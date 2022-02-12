import { Switch } from "@headlessui/react";
import { useRouter } from "next/dist/client/router";
import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import useInput from "../../hooks/useInput";
import { PaymentFormStyle } from "../../styles/TwoCheckoutFormStyle";
import { DEFAULT_CURRENCY } from "../../utils/constants";
import { getCartTotalPrice, getOrderItemsArray } from "../../utils/general";
import {
  emptyStringValidation,
  FormButton,
  StandardInputField,
  StandardSelectField
} from "./FormFields";

export default function PaymentForm(props) {
  const router = useRouter()
  const [FormIsValid, setFormIsValid] = useState(false);
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState("");
  const countryOptions = useMemo(() => countryList().getData(), []);
  const changeSelectedCountryHandler = (country) => {
    setSelectedCountry(country);
  };

  const {
    value: enteredCardholderName,
    hasError: enteredCardholderNamehasError,
    isValid: enteredCardholderNameIsValid,
    valueChangeHandler: enteredCardholderNameChangeHandler,
    inputBlurHandler: enteredCardholderNameBlurHandler,
    reset: enteredCardholderNameReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredStreet,
    hasError: enteredStreethasError,
    valueChangeHandler: enteredStreetChangeHandler,
    inputBlurHandler: enteredStreetBlurHandler,
    reset: enteredStreetReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredCity,
    hasError: enteredCityhasError,
    valueChangeHandler: enteredCityChangeHandler,
    inputBlurHandler: enteredCityBlurHandler,
    reset: enteredCityReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredZIP,
    hasError: enteredZIPhasError,
    valueChangeHandler: enteredZIPChangeHandler,
    inputBlurHandler: enteredZIPBlurHandler,
    reset: enteredZIPReset,
  } = useInput(emptyStringValidation);

  const [PaymentClient, setPaymentClient] = useState(
    new TwoPayClient(process.env.NEXT_PUBLIC_MERCHANT_CODE)
  );
  // TODO: Add translation
  PaymentClient.setup.setLanguage(router.locale);
  const [component, setComponent] = useState(
    PaymentClient.components.create("card", PaymentFormStyle)
  );
  useEffect(() => {
    component.mount("#card-element");
  }, []);
  const generatePaymentToken = () => {
    let BillingDetails = getBillingDetails();
    PaymentClient.tokens
      .generate(component, BillingDetails)
      .then((response) => {
        const PaymentDetails = {
          Type: "TEST",
          Currency: DEFAULT_CURRENCY,
          TotalAmount: getCartTotalPrice(props.cartItemsArray),
          PaymentMethod: {
            EesToken: response.token,
            Currency: DEFAULT_CURRENCY,
            Vendor3DSReturnURL: "http://google.com",
            Vendor3DSCancelURL: "http://facebook.com",
          },
        };
        props.updateFormData({
          Items: getOrderItemsArray(props.cartItemsArray),
          CartData: props.cartItemsArray,
          BillingDetails: BillingDetails,
          PaymentDetails: PaymentDetails,
        });
        setFormIsValid(true);
      });
  };

  const resetAllFields = () => {
    enteredCardholderNameReset();
    enteredStreetReset();
    enteredCityReset();
    enteredZIPReset();
    setIsBillingAddressSame(true);
    setSelectedCountry("");
  };

  const getBillingDetails = () => {
    if (isBillingAddressSame) {
      return {
        name: enteredCardholderName,
        ...props.formData.DeliveryDetails,
      };
    } else {
      return {
        name: enteredCardholderName,
        Address1: enteredStreet,
        City: enteredCity,
        Zip: enteredZIP,
        CountryCode: selectedCountry,
        Email: props.formData.DeliveryDetails.Email,
        Phone: props.formData.DeliveryDetails.Phone,
      };
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (enteredCardholderNameIsValid) {
      generatePaymentToken();
    }
  };

  useEffect(() => {
    if (FormIsValid === true) {
      props.setCartItemsArray([]);
      fetch("/api/order", {
        method: "POST",
        body: JSON.stringify(props.formData),
      });
      resetAllFields();
      props.handleGoToNextStep();
    }
  }, [FormIsValid]);

  return (
    <div className="px-3 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="my-6 sm:my-10 bg-white card py-8 px-3 md:shadow-lg rounded-lg sm:px-10">
        <h1 className="mb-4 text-capitalize font-extrabold text-2xl text-center">
          Payment
        </h1>
        <form
          className="flex flex-col px-5 md:px-0 gap-y-3"
          action="#"
          method="POST"
          type="post"
          id="payment-form"
          onSubmit={ handleFormSubmit }
        >
          <div className="form-group">
            <StandardInputField
              inputLabel={ "Cardholder" }
              typeOfInput={ "text" }
              inputID={ "cardholder" }
              blurHandler={ enteredCardholderNameBlurHandler }
              changeHandler={ enteredCardholderNameChangeHandler }
              hasError={ enteredCardholderNamehasError }
              inputValue={ enteredCardholderName }
            />
          </div>
          <Switch.Group>
            <div className="flex items-center my-2 md:justify-between">
              <Switch.Label className="mr-2">
                Billing address same as shipping address
              </Switch.Label>
              <Switch
                checked={ isBillingAddressSame }
                onChange={ () => setIsBillingAddressSame(!isBillingAddressSame) }
                className={ `${isBillingAddressSame ? "bg-blue-600" : "bg-gray-200"
                  } relative inline-flex items-center h-6 rounded-full w-16 md:w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` }
              >
                <span
                  className={ `${isBillingAddressSame
                      ? "translate-x-7 md:translate-x-6"
                      : "translate-x-1"
                    } inline-block w-4 h-4 transform bg-white rounded-full transition-transform` }
                />
              </Switch>
            </div>
          </Switch.Group>

          { !isBillingAddressSame ? (
            <div className="mb-4">
              <StandardInputField
                inputLabel={ "Street and House Number" }
                typeOfInput={ "text" }
                inputID={ "address" }
                blurHandler={ enteredStreetBlurHandler }
                changeHandler={ enteredStreetChangeHandler }
                hasError={ enteredStreethasError }
                inputValue={ enteredStreet }
              />
              <StandardInputField
                inputLabel={ "City" }
                typeOfInput={ "text" }
                inputID={ "city" }
                blurHandler={ enteredCityBlurHandler }
                changeHandler={ enteredCityChangeHandler }
                hasError={ enteredCityhasError }
                inputValue={ enteredCity }
              />
              <StandardInputField
                inputLabel={ "ZIP" }
                typeOfInput={ "text" }
                inputID={ "zip" }
                blurHandler={ enteredZIPBlurHandler }
                changeHandler={ enteredZIPChangeHandler }
                hasError={ enteredZIPhasError }
                inputValue={ enteredZIP }
              />
              <StandardSelectField
                inputLabel={ "Country" }
                inputID={ "country" }
                options={ countryOptions }
                selectedCountry={ selectedCountry }
                onChange={ changeSelectedCountryHandler }
              />
            </div>
          ) : null }

          <div id="card-element"></div>

          <FormButton back previousStepHandler={ props.handleGoToPreviousStep } />
          <FormButton />
        </form>
      </div>
    </div>
  );
}
