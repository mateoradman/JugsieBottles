import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useCartItems } from "../../context/Context";
import useInput from "../../hooks/useInput";
import { Croatia, DEFAULT_CURRENCY } from "../../utils/constants";
import { classNames, getCartTotalPrice } from "../../utils/general";
import Notification from "../alerts";
import CartProducts from "../cart/CartProducts";
import {
  emptyEmailValidation,
  emptyPhoneNumberValidation,
  emptyStringValidation,
  StandardInputField,
  StandardSelectField,
} from "./FormFields";

export default function Checkout() {
  const { t } = useTranslation("checkout");
  const { locale } = useRouter();
  const deliveryMethods = [
    {
      id: 1,
      title: "Standard",
      turnaround: t("deliveryDuration"),
      price: "0 €",
    },
  ];
  const paymentMethods = [{ id: "bank-transfer", title: t("bankTransfer") }];
  const { cartItemsArray, setCartItemsArray } = useCartItems();
  const [selectedDeliveryMethod, setSelectedDeliveryMethod] = useState(
    deliveryMethods[0]
  );

  const [notification, setNotification] = useState({
    title: t("success", { ns: "common" }),
    message: t("orderSuccess", { ns: "common" }),
    success: true,
    show: false,
  });

  const [selectedCountry, setSelectedCountry] = useState(Croatia.value);
  const countryOptions = [Croatia];
  const changeSelectedCountryHandler = (event) => {
    setSelectedCountry(event.target.value);
  };

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: enteredFirstNamehasError,
    valueChangeHandler: enteredFirstNameChangeHandler,
    inputBlurHandler: enteredFirstNameBlurHandler,
    reset: enteredFirstNameReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: enteredLastNamehasError,
    valueChangeHandler: enteredLastNameChangeHandler,
    inputBlurHandler: enteredLastNameBlurHandler,
    reset: enteredLastNameReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: enteredEmailhasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    reset: enteredEmailReset,
  } = useInput(emptyEmailValidation);
  const {
    value: enteredPhone,
    isValid: enteredPhoneIsValid,
    hasError: enteredPhonehasError,
    valueChangeHandler: enteredPhoneChangeHandler,
    inputBlurHandler: enteredPhoneBlurHandler,
    reset: enteredPhoneReset,
  } = useInput(emptyPhoneNumberValidation);
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: enteredStreethasError,
    valueChangeHandler: enteredStreetChangeHandler,
    inputBlurHandler: enteredStreetBlurHandler,
    reset: enteredStreetReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: enteredCityhasError,
    valueChangeHandler: enteredCityChangeHandler,
    inputBlurHandler: enteredCityBlurHandler,
    reset: enteredCityReset,
  } = useInput(emptyStringValidation);
  const {
    value: enteredZIP,
    isValid: enteredZIPIsValid,
    hasError: enteredZIPhasError,
    valueChangeHandler: enteredZIPChangeHandler,
    inputBlurHandler: enteredZIPBlurHandler,
    reset: enteredZIPReset,
  } = useInput(emptyStringValidation);

  const resetAllFields = () => {
    enteredFirstNameReset();
    enteredLastNameReset();
    enteredEmailReset();
    enteredPhoneReset();
    enteredStreetReset();
    enteredCityReset();
    enteredZIPReset();
    setSelectedCountry(Croatia.value);
  };

  const formValidityArray = [
    enteredFirstNameIsValid,
    enteredLastNameIsValid,
    enteredEmailIsValid,
    enteredPhoneIsValid,
    enteredStreetIsValid,
    enteredCityIsValid,
    enteredZIPIsValid,
  ];
  let formIsValid = formValidityArray.every(Boolean);

  const formData = {
    firstName: enteredFirstName,
    lastName: enteredLastName,
    email: enteredEmail,
    phone: enteredPhone,
    street: enteredStreet,
    city: enteredCity,
    zip: enteredZIP,
    country: selectedCountry,
    currency: DEFAULT_CURRENCY,
    items: cartItemsArray,
    locale: locale,
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let requestFailed = true;
    if (formIsValid) {
      fetch("/api/orders", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          requestFailed = false;
          resetAllFields();
          if (requestFailed) {
            setNotification({
              title: t("error", { ns: "common" }),
              message: t("orderError", { ns: "common" }),
              success: false,
              show: true,
            });
          } else {
            setNotification({ ...notification, show: true });
            setCartItemsArray([]);
          }
        }
      });
    } else {
      setNotification({
        title: t("error", { ns: "common" }),
        message: t("formValidationError", { ns: "common" }),
        success: false,
        show: true,
      });
    }
  };

  return (
    <div className="bg-gray-50">
      <div className="max-w-2xl mx-auto pt-16 pb-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">{t("checkout")}</h2>

        <form
          className="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16"
          onSubmit={handleFormSubmit}
        >
          <div>
            <div>
              <h2 className="text-lg font-medium text-gray-900">
                {t("contactInformation")}
              </h2>

              <div className="mt-4">
                <StandardInputField
                  inputLabel={t("email")}
                  inputID={"email"}
                  typeOfInput={"email"}
                  blurHandler={enteredEmailBlurHandler}
                  changeHandler={enteredEmailChangeHandler}
                  hasError={enteredEmailhasError}
                  inputValue={enteredEmail}
                  autoComplete={"email"}
                />
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                {t("shippingInformation")}
              </h2>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                <div>
                  <StandardInputField
                    inputLabel={t("firstName")}
                    inputID={"first_name"}
                    typeOfInput={"text"}
                    blurHandler={enteredFirstNameBlurHandler}
                    changeHandler={enteredFirstNameChangeHandler}
                    hasError={enteredFirstNamehasError}
                    inputValue={enteredFirstName}
                    autoComplete={"given-name"}
                  />
                </div>

                <div>
                  <StandardInputField
                    inputLabel={t("lastName")}
                    inputID={"last_name"}
                    typeOfInput={"text"}
                    blurHandler={enteredLastNameBlurHandler}
                    changeHandler={enteredLastNameChangeHandler}
                    hasError={enteredLastNamehasError}
                    inputValue={enteredLastName}
                    autoComplete={"family-name"}
                  />
                </div>

                <div className="sm:col-span-2">
                  <StandardInputField
                    inputLabel={t("address")}
                    typeOfInput={"text"}
                    inputID={"address"}
                    blurHandler={enteredStreetBlurHandler}
                    changeHandler={enteredStreetChangeHandler}
                    hasError={enteredStreethasError}
                    inputValue={enteredStreet}
                    autoComplete={"street-address"}
                  />
                </div>

                <div>
                  <StandardInputField
                    inputLabel={t("city")}
                    typeOfInput={"text"}
                    inputID={"city"}
                    blurHandler={enteredCityBlurHandler}
                    changeHandler={enteredCityChangeHandler}
                    hasError={enteredCityhasError}
                    inputValue={enteredCity}
                    autoComplete={"address-level2"}
                  />
                </div>

                <div>
                  <StandardSelectField
                    inputLabel={t("country")}
                    inputID={"country"}
                    options={countryOptions}
                    selectedCountry={selectedCountry}
                    onChange={changeSelectedCountryHandler}
                    autoComplete={"country-name"}
                  />
                </div>

                <div>
                  <StandardInputField
                    inputLabel={t("zip")}
                    typeOfInput={"text"}
                    inputID={"zip"}
                    blurHandler={enteredZIPBlurHandler}
                    changeHandler={enteredZIPChangeHandler}
                    hasError={enteredZIPhasError}
                    inputValue={enteredZIP}
                    autoComplete={"postal-code"}
                  />
                </div>

                <div className="sm:col-span-2">
                  <StandardInputField
                    inputLabel={t("phone")}
                    typeOfInput={"tel"}
                    inputID={"phone"}
                    blurHandler={enteredPhoneBlurHandler}
                    changeHandler={enteredPhoneChangeHandler}
                    hasError={enteredPhonehasError}
                    inputValue={enteredPhone}
                    autoComplete={"tel"}
                  />
                </div>
              </div>
            </div>

            <div className="mt-10 border-t border-gray-200 pt-10">
              <RadioGroup
                value={selectedDeliveryMethod}
                onChange={setSelectedDeliveryMethod}
              >
                <RadioGroup.Label className="text-lg font-medium text-gray-900">
                  {t("deliveryMethod")}
                </RadioGroup.Label>

                <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                  {deliveryMethods.map((deliveryMethod, _) => (
                    <RadioGroup.Option
                      key={deliveryMethod.id}
                      defaultChecked={deliveryMethod.id === 1}
                      value={deliveryMethod}
                      className={({ checked, active }) =>
                        classNames(
                          checked ? "border-transparent" : "border-gray-300",
                          active ? "ring-2 ring-indigo-500" : "",
                          "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                        )
                      }
                    >
                      {({ checked, active }) => (
                        <>
                          <span className="flex-1 flex">
                            <span className="flex flex-col">
                              <RadioGroup.Label
                                as="span"
                                className="block text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.title}
                              </RadioGroup.Label>
                              <RadioGroup.Description
                                as="span"
                                className="mt-1 flex items-center text-sm text-gray-500"
                              >
                                {deliveryMethod.turnaround}
                              </RadioGroup.Description>
                              <RadioGroup.Description
                                as="span"
                                className="mt-6 text-sm font-medium text-gray-900"
                              >
                                {deliveryMethod.price}
                              </RadioGroup.Description>
                            </span>
                          </span>
                          <CheckCircleIcon
                            className="h-5 w-5 text-indigo-600"
                            aria-hidden="true"
                          />
                          <span
                            className={classNames(
                              active ? "border" : "border-2",
                              checked
                                ? "border-indigo-500"
                                : "border-transparent",
                              "absolute -inset-px rounded-lg pointer-events-none"
                            )}
                            aria-hidden="true"
                          />
                        </>
                      )}
                    </RadioGroup.Option>
                  ))}
                </div>
              </RadioGroup>
            </div>

            {/* Payment */}
            <div className="mt-10 border-t border-gray-200 pt-10">
              <h2 className="text-lg font-medium text-gray-900">
                {t("payment")}
              </h2>

              <fieldset className="mt-4">
                <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                  {paymentMethods.map((paymentMethod, paymentMethodIdx) => (
                    <div key={paymentMethod.id} className="flex items-center">
                      {paymentMethodIdx === 0 ? (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          defaultChecked
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      ) : (
                        <input
                          id={paymentMethod.id}
                          name="payment-type"
                          type="radio"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
                        />
                      )}

                      <label
                        htmlFor={paymentMethod.id}
                        className="ml-3 block text-sm font-medium text-gray-700"
                      >
                        {paymentMethod.title}
                      </label>
                    </div>
                  ))}
                </div>
              </fieldset>
              {/* TODO After introducing Card Payment add Card form*/}
            </div>
          </div>

          {/* Order summary */}
          <div className="mt-10 lg:mt-0">
            <h2 className="text-lg font-medium text-gray-900">
              {t("orderSummary")}
            </h2>

            <div className="mt-4 bg-white border border-gray-200 rounded-lg shadow-sm">
              <div className="m-4">
                <CartProducts />
              </div>
              <dl className="border-t border-gray-200 py-6 px-4 space-y-6 sm:px-6">
                <div className="flex items-center justify-between">
                  <dt className="text-sm">{t("subtotal")}</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {getCartTotalPrice(cartItemsArray) * 0.75} kn
                  </dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">{t("shipping")}</dt>
                  <dd className="text-sm font-medium text-gray-900">0 kn</dd>
                </div>
                <div className="flex items-center justify-between">
                  <dt className="text-sm">{t("vat")}</dt>
                  <dd className="text-sm font-medium text-gray-900">
                    {getCartTotalPrice(cartItemsArray) * 0.25} kn
                  </dd>
                </div>
                <div className="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt className="text-base font-medium">{t("total")}</dt>
                  <dd className="text-base font-medium text-gray-900">
                    {getCartTotalPrice(cartItemsArray)} kn
                  </dd>
                </div>
              </dl>

              <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 border border-transparent rounded-md shadow-sm py-3 px-4 text-base
                  font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2
                  focus:ring-offset-gray-50 focus:ring-indigo-500"
                >
                  {t("confirm", { ns: "common" })}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div
        aria-live="assertive"
        className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start"
      >
        <div className="w-full flex flex-col items-center space-y-4 sm:items-end">
          <Notification
            notification={notification}
            setNotification={setNotification}
          />
        </div>
      </div>
    </div>
  );
}
