import { Switch } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useState } from "react";
import countryList from "react-select-country-list";
import useInput from "../../hooks/useInput";
import { Croatia } from "../../utils/constants";
import { classNames, getCartTotalPrice, getOrderItemsArray } from "../../utils/general";
import {
  emptyStringValidation, StandardInputField, StandardSelectField
} from "./FormFields";

export default function BankTransferForm(props) {
  const router = useRouter()
  const [FormIsValid, setFormIsValid] = useState(false);
  const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
  const [selectedCountry, setSelectedCountry] = useState(Croatia.value);
  const countryOptions = useMemo(() => countryList().getData(), []);
  const changeSelectedCountryHandler = event => {
    setSelectedCountry(event.target.value);
  };

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

  props.updateFormData({
    Items: getOrderItemsArray(props.cartItemsArray),
    CartData: props.cartItemsArray,
    BillingDetails: getBillingDetails(),
    Locale: router.locale,
    TotalPrice: getCartTotalPrice(props.cartItemsArray),
    OrderTimeString: new Date().toLocaleString('hr', { timeZone: 'Europe/Zagreb' })
  });
  setFormIsValid(true);


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
      return props.formData.DeliveryDetails;
    } else {
      return {
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
      fetch("/api/order", {
        method: "POST", body: JSON.stringify(props.formData),
      }).then((res) => {
        if (res.ok) props.setCartItemsArray([]);
        resetAllFields();
        router.push({
          pathname: '/checkout/status', query: { success: res.ok }
        })
      });
    }
  }, [FormIsValid]);

  const { t } = useTranslation(['checkout', 'common']);

  return (
    <div className="px-3 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="my-6 sm:my-10 bg-white card py-8 px-3 md:shadow-lg rounded-lg sm:px-10">
        <h1 className="mb-4 text-capitalize font-extrabold text-2xl text-center">
          {t('payment')}
        </h1>
        <form
          className="flex flex-col px-5 md:px-0 gap-y-3"
          action="#"
          method="POST"
          type="post"
          id="payment-form"
          onSubmit={handleFormSubmit}
        >
          <Switch.Group>
            <div className="flex items-center my-2 md:justify-between">
              <Switch.Label className="mr-2">
                {t("billingSameAsShipping")}
              </Switch.Label>
              <Switch
                checked={isBillingAddressSame}
                onChange={() => setIsBillingAddressSame(!isBillingAddressSame)}
                className={`${isBillingAddressSame ? "bg-blue-600" : "bg-gray-200"} relative inline-flex items-center 
                h-6 rounded-full w-16 md:w-11 transition-colors focus:outline-none focus:ring-2 
                focus:ring-offset-2 focus:ring-indigo-500`}
              >
                <span
                  className={`${isBillingAddressSame ? "translate-x-7 md:translate-x-6" : "translate-x-1"} inline-block
                   w-4 h-4 transform bg-white rounded-full transition-transform`}
                />
              </Switch>
            </div>
          </Switch.Group>

          {!isBillingAddressSame && (<div className="mb-4">
            <StandardInputField
              inputLabel={t("address")}
              typeOfInput={"text"}
              inputID={"address"}
              blurHandler={enteredStreetBlurHandler}
              changeHandler={enteredStreetChangeHandler}
              hasError={enteredStreethasError}
              inputValue={enteredStreet}
            />
            <StandardInputField
              inputLabel={t("city")}
              typeOfInput={"text"}
              inputID={"city"}
              blurHandler={enteredCityBlurHandler}
              changeHandler={enteredCityChangeHandler}
              hasError={enteredCityhasError}
              inputValue={enteredCity}
            />
            <StandardInputField
              inputLabel={t("zip")}
              typeOfInput={"text"}
              inputID={"zip"}
              blurHandler={enteredZIPBlurHandler}
              changeHandler={enteredZIPChangeHandler}
              hasError={enteredZIPhasError}
              inputValue={enteredZIP}
            />
            <StandardSelectField
              inputLabel={t("country")}
              inputID={"country"}
              options={countryOptions}
              selectedCountry={selectedCountry}
              onChange={changeSelectedCountryHandler}
            />
          </div>)}

          <div className="col-span-1 md:col-span-2 justify-center">
            <button type="button"
              className="flex space-x-10 w-full btn btn-warning rounded-lg"
              onClick={props.handleGoToPreviousStep}>
              {t("back", { ns: 'common' })}
            </button>
          </div>
          <div className="col-span-1 md:col-span-2 justify-center">
            <button type="submit"
              className={classNames("flex space-x-10 w-full btn btn-info rounded-lg", FormIsValid && "loading")}>
              {t("pay", { ns: 'common' })}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
