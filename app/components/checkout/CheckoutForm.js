import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { useCartItems } from "../../context/Context";
import { DEFAULT_CURRENCY } from "../../utils/constants";
import { classNames } from "../../utils/general";
import { InfoAlert, NeutralAlert } from "../alerts";
import BankTransferForm from "./BankTransferForm";
import CreditCardForm from "./CreditCardForm";
import { OrderSummary } from "./OrderSummary";
import PersonalDetailsForm from "./PersonalDetailsForm";

export default function CheckoutForm() {
  const [step, setStep] = useState(2);
  const handleGoToNextStep = () => setStep((prevStep) => prevStep + 1);
  const handleGoToPreviousStep = () => {
    setStep((prevStep) => prevStep - 1);
    setFormData(defaultFormData);
  };
  const colourStep = (currentStep, threshold) => {
    return classNames("step", currentStep >= threshold ? "step-primary" : "");
  }

  // payment by card or bank transfer possible. Default is bank transfer
  const [paymentByCard, setPaymentByCard] = useState(false);
  const handlePaymentMethod = (event) => {
    setPaymentByCard(event.target.value);
  }

  const defaultFormData = {
    currency: DEFAULT_CURRENCY,
    orderUUID: uuidv4(),
    coupon: null,
    paymentOption: paymentByCard ? "CreditCard" : "BankTransfer",
  };
  const [formData, setFormData] = useState(defaultFormData);
  const updateFormData = (newFormData) => {
    setFormData((prevFormData) => ({ ...prevFormData, ...newFormData }));
  };

  const { cartItemsArray, setCartItemsArray } = useCartItems();

  const componentToRender = () => {
    // Immediately don't render anything if there is nothing in the cart
    if (!cartItemsArray || cartItemsArray.length === 0) return null;

    switch (step) {
      case 1:
        return (
          <PersonalDetailsForm
            updateFormData={updateFormData}
            handleGoToNextStep={handleGoToNextStep}
          />
        );
      case 2:
        return (
          <>
            {paymentByCard ? (
              <CreditCardForm
                formData={formData}
                updateFormData={updateFormData}
                handleGoToNextStep={handleGoToNextStep}
                handleGoToPreviousStep={handleGoToPreviousStep}
                step={step}
                cartItemsArray={cartItemsArray}
                setCartItemsArray={setCartItemsArray}
              />
            ) : (
              <div>AOSkfosdkfsdop</div>
              // <BankTransferForm></BankTransferForm>
            )}
          </>
        );
      default:
        return null;
    }
  };

  const { t } = useTranslation('checkout');

  return (
    <div className="relative flex flex-col items-center justify-center overflow-hidden">
      <ul className="w-full steps">
        <li className={colourStep(step, 1)}>
          <span className="label-text">{t('personalDetails')}</span>
        </li>
        <li className={colourStep(step, 2)}>
          <span className="label-text">{t('payment')}</span>
        </li>
        <li className="step">
          <span className="label-text">{t('orderComplete')}</span>
        </li>
      </ul>
      {step === 2 &&
      (<div className="mx-6 mt-6 flex font-medium text-sm">
        <InfoAlert message={t('bankTransferAlert')}/>
      </div>)
      }
      <OrderSummary cartItemsArray={cartItemsArray} />
      {componentToRender()}
    </div>
  );
}
