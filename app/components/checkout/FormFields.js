import {useTranslation} from "next-i18next";
import {classNames} from "../../utils/general";

export const emptyStringValidation = (stringToValidate) => {
  const regex = /[~`!#$%^&*+=\-\[\]\\';,/{}|":<>?\s]/g;
  return !(!stringToValidate || regex.test(stringToValidate));
}
export const emptyEmailValidation = (stringToValidate) => new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/).test(stringToValidate);
export const emptyPhoneNumberValidation = (stringToValidate) => new RegExp(/^[+0-9]+$/).test(stringToValidate);

export const StandardInputField = (props) => {

  const {t} = useTranslation('common');
  return (
    <>
      <label className="block text-sm font-medium text-gray-700"
             htmlFor={props.inputID}>
        <span>{props.inputLabel}</span>
      </label>
      <div className="mt-1">
        <input name={props.inputID}
               id={props.inputID}
               type={props.inputType}
               value={props.inputValue}
               onBlur={props.blurHandler}
               onChange={props.changeHandler}
               autoComplete={props.autoComplete}
               className={classNames("input block w-full h-10 p-2 rounded-md shadow-sm sm:text-sm",
                 props.hasError ? 'input-error' : 'input-info')}
        />
        {props.hasError ?
          <label className="mt-1 block text-xs font-medium text-gray-700">
            <span>{t("dataInvalid")}</span>
          </label> : null
        }
      </div>
    </>
  );
};

export const StandardSelectField = (props) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700"
             htmlFor={props.inputID}>
        <span>{props.inputLabel}</span>
      </label>
      <div className="mt-1">
        <select
          id={props.inputID}
          defaultValue={props.selectedCountry}
          onChange={props.onChange}
          className="block w-full h-10 border-info rounded-md shadow-sm focus:ring-indigo-500
          focus:border-indigo-500 sm:text-sm">
          {props.options.map((country) => (
            <option key={country.value} value={country.value}>
              {country.label}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
