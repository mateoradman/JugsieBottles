import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useCartItems } from "../../context/Context";
import { DEFAULT_CURRENCY } from "../../utils/constants";
import {
  classNames,
  getCartTotalPrice,
  getFormattedPrice,
  ID,
} from "../../utils/general";
import CartProducts from "../cart/CartProducts";
import PaymentForm from "./PaymentForm";
import PersonalDetailsForm from "./PersonalDetailsForm";
import Success from "./Success";

export default function CheckoutForm() {
  const [step, setStep] = useState(1);
  const handleGoToNextStep = () => setStep((prevStep) => prevStep + 1);
  const handleGoToPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
    setFormData(defaultFormData);
  };
  function colourStep(currentStep, threshold) {
    return classNames("step", currentStep >= threshold ? "step-success" : "");
  }

  const defaultFormData = {
    Currency: DEFAULT_CURRENCY,
    Source: "Website",
    ExternalCustomerReference: ID(),
  };
  const [formData, setFormData] = useState(defaultFormData);
  const updateFormData = (newFormData) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  const { cartItemsArray, setCartItemsArray } = useCartItems();

  const componentToRender = () => {
    // Immediately don't render anything if there is nothing in the cart
    if ((!cartItemsArray || cartItemsArray.length === 0) && step !== 3) return null;

    switch (step) {
      case 1:
        return (
          <PersonalDetailsForm
            updateFormData={ updateFormData }
            handleGoToNextStep={ handleGoToNextStep }
          />
        );
      case 2:
        return (
          <PaymentForm
            formData={ formData }
            updateFormData={ updateFormData }
            handleGoToNextStep={ handleGoToNextStep }
            handleGoToPreviousStep={ handleGoToPreviousStep }
            step={ step }
            cartItemsArray={ cartItemsArray }
            setCartItemsArray={ setCartItemsArray }
          />
        );

      case 3:
        return <Success />;
      default:
        return null;
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <ul className="w-full steps">
        <li className={ colourStep(step, 1) }>
          <span className="label-text">Personal Details</span>
        </li>
        <li className={ colourStep(step, 2) }>
          <span className="label-text">Payment</span>
        </li>
        <li className={ colourStep(step, 3) }>
          <span className="label-text">Order complete</span>
        </li>
      </ul>
      { (step === 1 || step === 2) && (
        <div className="mt-6 px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
          <div className="flex flex-col space-y-4 w-full p-2 mx-auto bg-white rounded-2xl">
            <Disclosure defaultOpen>
              { ({ open }) => (
                <>
                  <Disclosure.Button
                    className={
                      "flex justify-between self-center px-6 sm:px-12 py-2 text-lg sm:text-xl font-medium text-left text-green-900 bg-green-100 rounded-lg hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75"
                    }
                  >
                    <span>Order Summary</span>
                    <ChevronUpIcon
                      className={ classNames(
                        "text-purple-900 w-5 h-5 ml-5 self-center",
                        open ? "transform rotate-180" : ""
                      ) }
                    />
                  </Disclosure.Button>
                  <Transition
                    show={ open }
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel static>
                      <div className="flex flex-col space-y-5 text-sm card bordered rounded-lg shadow-md p-4">
                        <CartProducts cartItemsArray={ cartItemsArray } />
                        <span className="self-end sm:text-lg font-extrabold">
                          Total price:{ " " }
                          { getFormattedPrice(getCartTotalPrice(cartItemsArray)) }
                        </span>
                      </div>
                    </Disclosure.Panel>
                  </Transition>
                </>
              ) }
            </Disclosure>
          </div>
        </div>
      ) }

      { componentToRender() }
    </div>
  );
}
