import { RadioGroup } from "@headlessui/react";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { Icons } from "../../../utils/constants";
import { classNames } from "../../../utils/general";

export function PersonalizationToggle(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    props.onPersonalizationChange({ icon: "", text: "" });
  };

  const { t } = useTranslation("shop");
  return (
    <div className="mt-4">
      <div className="p-3 card bordered">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">{t("personalization+40kn")}</span>
            <input
              type="checkbox"
              checked={checked}
              onChange={handleChange}
              className="checkbox checkbox-primary"
            />
          </label>
        </div>
      </div>
      {checked && (
        <Personalization
          defaultPersonalization={props.defaultPersonalization}
          onPersonalizationChange={props.onPersonalizationChange}
        />
      )}
    </div>
  );
}

export const Personalization = (props) => {
  const { t } = useTranslation("shop");
  const [personalization, setPersonalization] = useState(
    props.defaultPersonalization
  );
  const handleKeyPress = (e) => {
    let newPersonalization = { ...personalization, text: e.target.value };
    setPersonalization(newPersonalization);
  };

  const handleIconChange = (selectedIcon) => {
    let newPersonalization = { ...personalization, icon: selectedIcon };
    setPersonalization(newPersonalization);
  };

  useEffect(() => {
    props.onPersonalizationChange(personalization);
  }, [personalization]);

  return (
    <div className={""}>
      <IconTabRadioGroup onIconChange={handleIconChange} />
      <div className="mt-6 form-control">
        <input
          type="text"
          maxLength={8}
          placeholder={t("personalization-placeholder")}
          className="input input-bordered text-center"
          onChange={handleKeyPress}
        ></input>
      </div>
    </div>
  );
};

const IconTabRadioGroup = (props) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    if (selectedIcon) {
      props.onIconChange(selectedIcon);
    }
  }, [selectedIcon]);

  return (
    <RadioGroup
      value={selectedIcon}
      onChange={setSelectedIcon}
      className="mt-4"
    >
      <div className="grid grid-cols-7 gap-2.5">
        {Icons.map((iconObject) => (
          <RadioGroup.Option
            key={iconObject.name}
            value={iconObject.name}
            className={({ active, checked }) =>
              classNames(
                active && checked ? "ring-1" : "",
                !active && checked ? "ring-1" : "",
                "ring-black relative p-2 rounded-full flex items-center justify-center cursor-pointer focus:outline-none"
              )
            }
          >
            {<iconObject.icon height={20} width={20} />}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
