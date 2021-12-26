import React, { useEffect, useState, useMemo } from 'react'
import { PaymentFormStyle } from '../../styles/TwoCheckoutFormStyle';
import { FormButton, emptyStringValidation, StandardInputField, StandardSelectField } from './FormFields';
import { Switch } from "@headlessui/react";
import useInput from '../../hooks/useInput';
import countryList from 'react-select-country-list';


export default function PaymentForm(props) {
    const [isBillingAddressSame, setIsBillingAddressSame] = useState(true);
    const [selectedCountry, setSelectedCountry] = useState('');
    const countryOptions = useMemo(() => countryList().getData(), []);
    const changeSelectedCountryHandler = country => {
        setSelectedCountry(country);
    };

    const {
        value: enteredCardholderFirstName,
        hasError: enteredCardholderFirstNamehasError,
        valueChangeHandler: enteredCardholderFirstNameChangeHandler,
        inputBlurHandler: enteredCardholderFirstNameBlurHandler,
        reset: enteredCardholderFirstNameReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredCardholderLastName,
        hasError: enteredCardholderLastNamehasError,
        valueChangeHandler: enteredCardholderLastNameChangeHandler,
        inputBlurHandler: enteredCardholderLastNameBlurHandler,
        reset: enteredCardholderLastNameReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredStreet,
        hasError: enteredStreethasError,
        valueChangeHandler: enteredStreetChangeHandler,
        inputBlurHandler: enteredStreetBlurHandler,
        reset: enteredStreetReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredCity,
        hasError: enteredCityhasError,
        valueChangeHandler: enteredCityChangeHandler,
        inputBlurHandler: enteredCityBlurHandler,
        reset: enteredCityReset
    } = useInput(emptyStringValidation)
    const {
        value: enteredZIP,
        hasError: enteredZIPhasError,
        valueChangeHandler: enteredZIPChangeHandler,
        inputBlurHandler: enteredZIPBlurHandler,
        reset: enteredZIPReset
    } = useInput(emptyStringValidation)

    const [PaymentClient, setPaymentClient] = useState(new TwoPayClient(process.env.REACT_APP_MERCHANT_CODE))
    // TODO: Add translation
    PaymentClient.setup.setLanguage('hr');
    const [component, setComponent] = useState(PaymentClient.components.create('card', PaymentFormStyle))
    useEffect(() => {
        component.mount('#card-element');
    }, [])
    const generatePaymentToken = () => {
        PaymentClient.tokens.generate(component, bd).then((response) => {
            console.log(response.token);
            const Items = [{ Code: "someCode" }]
            const PaymentDetails = {
                Type: "TEST",
                Currency: "HRK",
                PaymentMethod: {
                    EesToken: response.token,
                    Vendor3DSReturnURL: "http:\/\/google.com",
                    Vendor3DSCancelURL: "http:\/\/facebook.com"
                }
            }
            props.updateFormData({ Items: Items, BillingDetails: BillingDetails, PaymentDetails: PaymentDetails })
            return true;
        }).catch((error) => {
            console.error(error);
            return false;
        });
    }

    const resetAllFields = () => {
        enteredCardholderFirstNameReset();
        enteredCardholderLastNameReset();
        enteredStreetReset();
        enteredCityReset();
        enteredZIPReset();
        setIsBillingAddressSame(true);
        setSelectedCountry('');
    };

    const BillingDetails = {
        "FirstName": enteredCardholderFirstName,
        "LastName": enteredCardholderLastName,
        "Address": enteredStreet | props.formData.Address,
        "City": enteredCity | props.formData.City,
        "Zip": enteredZIP | props.formData.Zip,
        "CountryCode": selectedCountry | props.formData.CountryCode,
    };
    const bd = {
        name: enteredCardholderFirstName
    }

    const handleFormSubmit = (event, j) => {
        event.preventDefault();
        resetAllFields();
        if (!generatePaymentToken()) return;
        props.handleGoToNextStep();
    }

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
                    id='payment-form'
                    onSubmit={ handleFormSubmit }
                >
                    <div className="form-group">
                        <StandardInputField
                            inputLabel={ "Cardholder First Name" }
                            typeOfInput={ "text" }
                            inputID={ "cardholderFirstName" }
                            blurHandler={ enteredCardholderFirstNameBlurHandler }
                            changeHandler={ enteredCardholderFirstNameChangeHandler }
                            hasError={ enteredCardholderFirstNamehasError }
                            inputValue={ enteredCardholderFirstName }
                        />
                    </div>

                    <div className="form-group">
                        <StandardInputField
                            inputLabel={ "Cardholder Last Name" }
                            typeOfInput={ "text" }
                            inputID={ "cardholderLastName" }
                            blurHandler={ enteredCardholderLastNameBlurHandler }
                            changeHandler={ enteredCardholderLastNameChangeHandler }
                            hasError={ enteredCardholderLastNamehasError }
                            inputValue={ enteredCardholderLastName }
                        />
                    </div>

                    <Switch.Group>
                        <div className="flex items-center my-2 md:justify-between">
                            <Switch.Label className="mr-2">Billing address same as shipping address</Switch.Label>
                            <Switch
                                checked={ isBillingAddressSame }
                                onChange={ () => setIsBillingAddressSame(!isBillingAddressSame) }
                                className={ `${isBillingAddressSame ? 'bg-blue-600' : 'bg-gray-200'
                                    } relative inline-flex items-center h-6 rounded-full w-16 md:w-11 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500` }
                            >
                                <span
                                    className={ `${isBillingAddressSame ? 'translate-x-7 md:translate-x-6' : 'translate-x-1'
                                        } inline-block w-4 h-4 transform bg-white rounded-full transition-transform` }
                                />
                            </Switch>
                        </div>
                    </Switch.Group>

                    { !isBillingAddressSame ?
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
                                inputLabel={ 'Country' }
                                inputID={ 'country' }
                                options={ countryOptions }
                                selectedCountry={ selectedCountry }
                                onChange={ changeSelectedCountryHandler }
                            />
                        </div>
                        : null }


                    <div id="card-element">
                    </div>

                    <FormButton back previousStepHandler={ props.handleGoToPreviousStep } />
                    <FormButton />
                </form >
            </div >
        </div >
    )
}
