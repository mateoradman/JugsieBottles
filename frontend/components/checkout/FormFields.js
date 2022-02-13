import { useTranslation } from "next-i18next";
import { classNames } from "../../utils/general";

export const emptyStringValidation = (stringToValidate) => stringToValidate.trim() !== '';
export const emptyEmailValidation = (stringToValidate) => new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(stringToValidate);
export const emptyPhoneNumberValidation = (stringToValidate) => new RegExp(/^[+0-9]+$/).test(stringToValidate);

export const StandardInputField = (props) => {

  const { t } = useTranslation('common');
  return (
    <div className="form-control">
      <label className="label block text-sm font-medium text-gray-700"
        htmlFor={ props.inputID }>
        <span className="label-text">{ props.inputLabel }</span>
      </label>
      <input name={ props.inputID }
        id={ props.inputID }
        type={ props.inputType }
        required
        ref={ props.inputRef }
        defaultValue={ props.inputValue }
        onBlur={ props.blurHandler }
        onChange={ props.changeHandler }
        className={ classNames("input input-bordered rounded-lg",
          props.hasError ? 'input-error' : 'input-info') }
      />
      { props.hasError ?
        <label className="label block text-sm font-medium text-gray-500">
          <span className="label-text-alt">{ t("dataInvalid") }</span>
        </label> : null
      }
    </div>
  );
};

export const StandardSelectField = (props) => {
  return (
    <div className="form-control">
      <label className="label mb-1 block text-sm font-medium text-gray-700"
        htmlFor={ props.inputID }>
        <span className="label-text">{ props.inputLabel }</span>
      </label>
      <select
        id={ props.inputID }
        defaultValue={ props.selectedCountry }
        onChange={ props.onChange }
        className="select select-bordered rounded-lg select-info w-full">
        { props.options.map((country) => (
          <option key={ country.value } value={ country.value }>
            { country.label }
          </option>
        )) }
      </select>
    </div>
  );
};

export const FormButton = (props) => {

  const { t } = useTranslation('common');
  return (
    <div className="col-span-1 md:col-span-2 justify-center">
      { props.back ?
        <button type="button"
          className="flex space-x-10 w-full btn btn-warning rounded-lg"
          onClick={ props.previousStepHandler }
        >
          { t("back") }
        </button>
        :
        <button type="submit"
          className="flex space-x-10 w-full btn btn-info rounded-lg"
        >
          { t("continue") }
        </button>
      }
    </div>
  );
};