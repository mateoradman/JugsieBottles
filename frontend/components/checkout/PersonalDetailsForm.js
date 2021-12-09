import React, { useState } from 'react'
import { ContinueButton, emptyEmailValidation, emptyPhoneNumberValidation, emptyStringValidation, StandardInputField, StandardSelectField } from './FormFields';
import useInput from '../../hooks/useInput'

export default function PersonalDetailsForm(props) {
    const [checkedTandC, setCheckedTandC] = useState(false);

    const supportedShippingCountries = ['Croatia']

    const {
        value: enteredFirstName,
        isValid: enteredFirstNameIsValid,
        hasError: enteredFirstNamehasError,
        valueChangeHandler: enteredFirstNameChangeHandler,
        inputBlurHandler: enteredFirstNameBlurHandler,
        reset: enteredFirstNameReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredLastName,
        isValid: enteredLastNameIsValid,
        hasError: enteredLastNamehasError,
        valueChangeHandler: enteredLastNameChangeHandler,
        inputBlurHandler: enteredLastNameBlurHandler,
        reset: enteredLastNameReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredEmail,
        isValid: enteredEmailIsValid,
        hasError: enteredEmailhasError,
        valueChangeHandler: enteredEmailChangeHandler,
        inputBlurHandler: enteredEmailBlurHandler,
        reset: enteredEmailReset
    } = useInput(emptyEmailValidation)
    const {
        value: enteredPhone,
        isValid: enteredPhoneIsValid,
        hasError: enteredPhonehasError,
        valueChangeHandler: enteredPhoneChangeHandler,
        inputBlurHandler: enteredPhoneBlurHandler,
        reset: enteredPhoneReset
    } = useInput(emptyPhoneNumberValidation)
    const {
        value: enteredStreet,
        isValid: enteredStreetIsValid,
        hasError: enteredStreethasError,
        valueChangeHandler: enteredStreetChangeHandler,
        inputBlurHandler: enteredStreetBlurHandler,
        reset: enteredStreetReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredCity,
        isValid: enteredCityIsValid,
        hasError: enteredCityhasError,
        valueChangeHandler: enteredCityChangeHandler,
        inputBlurHandler: enteredCityBlurHandler,
        reset: enteredCityReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredZIP,
        isValid: enteredZIPIsValid,
        hasError: enteredZIPhasError,
        valueChangeHandler: enteredZIPChangeHandler,
        inputBlurHandler: enteredZIPBlurHandler,
        reset: enteredZIPReset
    } = useInput(emptyStringValidation)

    const resetAllFields = () => {
        enteredFirstNameReset();
        enteredLastNameReset();
        enteredEmailReset();
        enteredPhoneReset();
        enteredStreetReset();
        enteredCityReset();
        enteredZIPReset();
        setCheckedTandC(false);
    }


    const formValidityArray = [checkedTandC, enteredFirstNameIsValid, enteredLastNameIsValid, enteredEmailIsValid, enteredPhoneIsValid, enteredStreetIsValid, enteredCityIsValid, enteredZIPIsValid];
    let formIsValid = formValidityArray.every(Boolean);

    const formData = {
        firstName: enteredFirstName,
        lastName: enteredLastName,
        email: enteredEmail,
        phone: enteredPhone,
        address: enteredStreet,
        city: enteredCity,
        zip: enteredZIP,
        country: supportedShippingCountries[0]
    }

    const handleFormSubmit = (event) => {
        if (!formIsValid) return;
        event.preventDefault();
        // add validation
        resetAllFields();
        props.updateFormData(formData)
        props.handleGoToNextStep();
        console.log(formData);
    }
    return (
        <div className="px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="my-6 sm:my-10 bg-white card py-8 px-3 md:shadow-lg rounded-lg sm:px-10">
                <h1 className="mb-4 text-capitalize font-extrabold text-2xl text-center">
                    Shipping Details
                </h1>
                <form
                    className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 gap-y-3 md:gap-x-10"
                    action="#"
                    method="POST"
                    onSubmit={ handleFormSubmit }
                >
                    <StandardInputField
                        inputLabel={ "First Name" }
                        inputID={ "first_name" }
                        typeOfInput={ "text" }
                        blurHandler={ enteredFirstNameBlurHandler }
                        changeHandler={ enteredFirstNameChangeHandler }
                        hasError={ enteredFirstNamehasError }
                        inputValue={ enteredFirstName }
                    />
                    <StandardInputField
                        inputLabel={ "Last Name" }
                        inputID={ "last_name" }
                        typeOfInput={ "text" }
                        blurHandler={ enteredLastNameBlurHandler }
                        changeHandler={ enteredLastNameChangeHandler }
                        hasError={ enteredLastNamehasError }
                        inputValue={ enteredLastName }
                    />
                    <StandardInputField
                        inputLabel={ "Email" }
                        inputID={ "email" }
                        typeOfInput={ "email" }
                        blurHandler={ enteredEmailBlurHandler }
                        changeHandler={ enteredEmailChangeHandler }
                        hasError={ enteredEmailhasError }
                        inputValue={ enteredEmail }
                    />
                    <StandardInputField
                        inputLabel={ "Phone Number" }
                        typeOfInput={ "tel" }
                        inputID={ "phone" }
                        blurHandler={ enteredPhoneBlurHandler }
                        changeHandler={ enteredPhoneChangeHandler }
                        hasError={ enteredPhonehasError }
                        inputValue={ enteredPhone }
                    />
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
                        inputID='country'
                        inputLabel='Country'
                        options={ supportedShippingCountries }
                    />

                    <div className="my-3 card bordered rounded-lg md:col-span-2 w-full sm:w-3/4 place-self-center">
                        <div className="form-control">
                            <label className="cursor-pointer label">
                                <span className="label-text font-bold p-1 ">
                                    I agree to Terms and Conditions
                                </span>
                                <input
                                    type="checkbox"
                                    className="checkbox checkbox-sm checkbox-primary"
                                    onClick={ () => setCheckedTandC(!checkedTandC) }
                                    defaultChecked={ checkedTandC } />
                            </label>
                        </div>
                    </div>

                    <ContinueButton />
                </form>
            </div>
        </div>
    )
}

