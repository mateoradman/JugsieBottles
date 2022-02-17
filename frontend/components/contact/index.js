import { useTranslation } from "next-i18next";
import useInput from "../../hooks/useInput";
import { classNames } from "../../utils/general";
import { emptyEmailValidation, emptyPhoneNumberValidation, emptyStringValidation, StandardInputField } from '../checkout/FormFields';

export const Contact = () => {
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
        value: enteredMessage,
        isValid: enteredMessageIsValid,
        hasError: enteredMessagehasError,
        valueChangeHandler: enteredMessageChangeHandler,
        inputBlurHandler: enteredMessageBlurHandler,
        reset: enteredMessageReset
    } = useInput(emptyStringValidation)

    const resetAllFields = () => {
        enteredFirstNameReset();
        enteredLastNameReset();
        enteredEmailReset();
        enteredPhoneReset();
        enteredMessageReset();
    }


    const formValidityArray = [enteredFirstNameIsValid, enteredLastNameIsValid, enteredEmailIsValid, enteredPhoneIsValid, enteredMessageIsValid];
    let formIsValid = formValidityArray.every(Boolean);

    const formData = {
        FirstName: enteredFirstName,
        LastName: enteredLastName,
        Email: enteredEmail,
        Phone: enteredPhone,
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (formIsValid) {
            return
        }
    }

    const { t } = useTranslation(['checkout', 'common']);

    return (
        <div className="px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="my-6 sm:my-10 bg-white card py-8 px-3 md:shadow-lg rounded-lg sm:px-10">
                <h1 className="mb-4 text-capitalize font-bold text-2xl text-center">
                    { t('contact-form') }
                </h1>
                <form
                    className="grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 gap-y-3 md:gap-x-10"
                    action="#"
                    method="POST"
                    onSubmit={ handleFormSubmit }
                >
                    <StandardInputField
                        inputLabel={ t('firstName') }
                        inputID={ "first_name" }
                        typeOfInput={ "text" }
                        blurHandler={ enteredFirstNameBlurHandler }
                        changeHandler={ enteredFirstNameChangeHandler }
                        hasError={ enteredFirstNamehasError }
                        inputValue={ enteredFirstName }
                    />
                    <StandardInputField
                        inputLabel={ t('lastName') }
                        inputID={ "last_name" }
                        typeOfInput={ "text" }
                        blurHandler={ enteredLastNameBlurHandler }
                        changeHandler={ enteredLastNameChangeHandler }
                        hasError={ enteredLastNamehasError }
                        inputValue={ enteredLastName }
                    />
                    <StandardInputField
                        inputLabel={ t('email') }
                        inputID={ "email" }
                        typeOfInput={ "email" }
                        blurHandler={ enteredEmailBlurHandler }
                        changeHandler={ enteredEmailChangeHandler }
                        hasError={ enteredEmailhasError }
                        inputValue={ enteredEmail }
                    />
                    <StandardInputField
                        inputLabel={ t('phone') }
                        typeOfInput={ "tel" }
                        inputID={ "phone" }
                        blurHandler={ enteredPhoneBlurHandler }
                        changeHandler={ enteredPhoneChangeHandler }
                        hasError={ enteredPhonehasError }
                        inputValue={ enteredPhone }
                    />
                    <div className="form-control">
                        <label className="label block text-sm font-medium text-gray-700"
                            htmlFor={ "message" }>
                            <span className="label-text">{ t("message", { ns: 'common' }) }</span>
                        </label>
                        <textarea name={ "message" }
                            id={ "message" }
                            required
                            defaultValue={ enteredMessage }
                            onBlur={ enteredMessageBlurHandler }
                            onChange={ enteredMessageChangeHandler }
                            className={ classNames("textarea textarea-bordered rounded-lg",
                                enteredMessagehasError ? 'textarea-error' : 'textarea-info') }
                        />
                        { enteredMessagehasError ?
                            <label className="label block text-sm font-medium text-gray-500">
                                <span className="label-text-alt">{ t("dataInvalid", { ns: 'common' }) }</span>
                            </label> : null
                        }
                    </div>
                    <div className="col-span-1 md:col-span-2 justify-center">
                        <button type="submit"
                            className="flex space-x-10 w-full btn btn-info rounded-lg"
                        >
                            { t("send") }
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
