import React, { useState } from 'react'
import { classNames } from '../../utils/general';
import OverviewConfirmation from './OverviewConfirmation';
import PaymentForm from './PaymentForm';
import PersonalDetailsForm from './PersonalDetailsForm';
import Success from './Success';

export default function CheckoutForm() {
    const [step, setStep] = useState(1);
    const handleGoToNextStep = () => {
        setStep(prevStep => prevStep + 1);
    }
    function colourStep(currentStep, threshold) {
        return classNames("step", currentStep >= threshold ? 'step-info' : '')
    }

    const [formData, setFormData] = useState({});
    const updateFormData = (newFormData) => {
        setFormData(prevFormData => ({...prevFormData, ...newFormData}));
    }


    const componentToRender = () => {
        switch (step) {
            case 1:
                return <PersonalDetailsForm updateFormData={updateFormData} handleGoToNextStep={ handleGoToNextStep } />

            case 2:
                return <PaymentForm handleGoToNextStep={ handleGoToNextStep } />

            case 3:
                return <OverviewConfirmation handleGoToNextStep={ handleGoToNextStep } />

            case 4:
                return <Success handleGoToNextStep={ handleGoToNextStep } />
        }
    }

    return (
        <>
            <ul className="w-full steps">
                <li className={ colourStep(step, 1) }><span className="label-text">Personal Details</span></li>
                <li className={ colourStep(step, 2) }><span className="label-text">Payment</span></li>
                <li className={ colourStep(step, 3) }><span className="label-text">Overview</span></li>
                <li className={ colourStep(step, 4) }><span className="label-text">Success</span></li>
            </ul>
            { componentToRender() }
        </>
    )
}
