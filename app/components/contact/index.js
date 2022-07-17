import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import { classNames } from "../../utils/general";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import {
  emptyEmailValidation,
  emptyMessageValidation,
  emptyPhoneNumberValidation,
  emptyStringValidation,
} from "../checkout/FormFields";
import { MailIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { iconFontSize, JUGSIE_EMAIL } from "../../utils/constants";
import Notification from "../alerts";

const inputErrorCheck = (isError) => {
  return classNames(
    "py-3 px-4 block w-full shadow-sm text-gray-900 rounded-md",
    isError
      ? "focus:ring-red-600 focus:border-red-600 border-red-400"
      : "focus:ring-indigo-500 focus:border-indigo-500 border-gray-300"
  );
};

export const Contact = () => {
  const { t } = useTranslation(["checkout", "common"]);
  const router = useRouter();
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
    value: enteredMessage,
    isValid: enteredMessageIsValid,
    hasError: enteredMessagehasError,
    valueChangeHandler: enteredMessageChangeHandler,
    inputBlurHandler: enteredMessageBlurHandler,
    reset: enteredMessageReset,
  } = useInput(emptyMessageValidation);

  const resetAllFields = () => {
    enteredFirstNameReset();
    enteredLastNameReset();
    enteredEmailReset();
    enteredPhoneReset();
    enteredMessageReset();
  };
  const formValidityArray = [
    enteredFirstNameIsValid,
    enteredLastNameIsValid,
    enteredEmailIsValid,
    enteredPhoneIsValid,
    enteredMessageIsValid,
  ];
  let formIsValid = formValidityArray.every(Boolean);

  const formData = {
    firstName: enteredFirstName,
    lastName: enteredLastName,
    email: enteredEmail,
    phone: enteredPhone,
    message: enteredMessage,
    locale: router.locale,
  };

  const [notification, setNotification] = useState({
    title: t("success", { ns: "common" }),
    message: t("contactSuccess", { ns: "common" }),
    success: true,
    show: false,
  });

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let requestFailed = true;
    if (formIsValid) {
      fetch("/api/contacts", {
        method: "POST",
        body: JSON.stringify(formData),
      }).then((response) => {
        if (response.ok) {
          requestFailed = false;
          resetAllFields();
          if (requestFailed) {
            setNotification({
              title: t("error", { ns: "common" }),
              message: t("contactError", { ns: "common" }),
              success: false,
              show: true,
            });
          } else {
            setNotification({ ...notification, show: true });
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
    <>
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gray-100 shadow-xl">
            <h2 className="sr-only">
              {t("contactSupport", { ns: "checkout" })}
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 sm:px-10 xl:p-12 bg-gray-200">
                <h3 className="text-lg font-medium text-gray-900">
                  Jugsie Bottles
                </h3>
                <p className="mt-6 text-base text-gray-900 max-w-3xl">
                  {t("contactText", { ns: "common" })}
                </p>
                <dl className="mt-8 space-y-6">
                  <dt>
                    <span className="sr-only">{t("email")}</span>
                  </dt>
                  <dd className="flex text-base text-gray-900">
                    <MailIcon
                      className="flex-shrink-0 w-6 h-6 text-gray-900"
                      aria-hidden="true"
                    />
                    <span className="ml-3">info@jugsie.com</span>
                  </dd>
                </dl>
                <ul role="list" className="mt-8 flex space-x-12">
                  <li>
                    <Link href="https://www.instagram.com/jugsiebottles/">
                      <a>
                        <FaInstagram
                          style={{ ...iconFontSize, color: "gray" }}
                        />
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/jugsiebottles/">
                      <a>
                        <FaFacebook
                          style={{ ...iconFontSize, color: "gray" }}
                        />
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900">
                  {t("contact-form")}
                </h3>
                <form
                  onSubmit={handleFormSubmit}
                  action="#"
                  method="POST"
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {t("firstName")}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        className={inputErrorCheck(enteredFirstNamehasError)}
                        value={enteredFirstName}
                        onChange={enteredFirstNameChangeHandler}
                        onBlur={enteredFirstNameBlurHandler}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {t("lastName")}
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="last-name"
                        id="last-name"
                        autoComplete="family-name"
                        className={inputErrorCheck(enteredLastNamehasError)}
                        value={enteredLastName}
                        onChange={enteredLastNameChangeHandler}
                        onBlur={enteredLastNameBlurHandler}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-900"
                    >
                      {t("email")}
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        className={inputErrorCheck(enteredEmailhasError)}
                        value={enteredEmail}
                        onChange={enteredEmailChangeHandler}
                        onBlur={enteredEmailBlurHandler}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between">
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {t("phone")}
                      </label>
                    </div>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="tel"
                        className={inputErrorCheck(enteredPhonehasError)}
                        value={enteredPhone}
                        onChange={enteredPhoneChangeHandler}
                        onBlur={enteredPhoneBlurHandler}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2">
                    <div className="flex justify-between">
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-900"
                      >
                        {t("message", { ns: "common" })}
                      </label>
                      <span id="message-max" className="text-sm text-gray-500">
                        {t("contactHelpText", { ns: "common" })}
                      </span>
                    </div>
                    <div className="mt-1">
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        className={inputErrorCheck(enteredMessagehasError)}
                        aria-describedby="message-max"
                        value={enteredMessage}
                        onChange={enteredMessageChangeHandler}
                        onBlur={enteredMessageBlurHandler}
                        maxLength={500}
                      />
                    </div>
                  </div>
                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:w-auto"
                    >
                      {t("submit", { ns: "common" })}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
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
    </>
  );
};
