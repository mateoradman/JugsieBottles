import {RadioGroup} from '@headlessui/react'
import {useEffect, useState} from "react";
import {classNames} from "../../../utils/general";
import {personalizationIcons} from "../../../utils/constants";

export function PersonalizationToggle(props) {
  const [checked, setChecked] = useState(false)

  const handleChange = () => {
    setChecked(!checked);
    props.onPersonalizationChange({icon: "", text: ""});
  }

  return (
    <div className="mt-10">
      <div className="p-3 card bordered">
        <div className="form-control">
          <label className="cursor-pointer label">
            <span className="label-text">Personalizacija (+40kn)</span>
            <input type="checkbox" checked={checked} onChange={handleChange}
                   className="checkbox checkbox-primary"/>
          </label>
        </div>
      </div>
      {checked &&
      <Personalization defaultPersonalization={props.defaultPersonalization}
                       onPersonalizationChange={props.onPersonalizationChange}/>}
    </div>
  )
}

export const Personalization = (props) => {
  const [personalization, setPersonalization] = useState(props.defaultPersonalization)
  const handleKeyPress = (e) => {
    let newPersonalization = {...personalization, text: e.target.value}
    setPersonalization(newPersonalization);
  }

  const handleIconChange = (selectedIcon) => {
    let newPersonalization = {...personalization, icon: selectedIcon}
    setPersonalization(newPersonalization);
  }

  useEffect(() => {
    props.onPersonalizationChange(personalization);
  }, [personalization]);


  return (
    <div className={""}>
      <IconTabRadioGroup onIconChange={handleIconChange}/>
      <div className="mt-6 form-control">
        <input type="text"
               maxLength={8}
               placeholder="Personalizacija (max. 8 znakova)"
               className="input input-bordered"
               onChange={handleKeyPress}>
        </input>
      </div>
    </div>
  )
}

const IconTabRadioGroup = (props) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  useEffect(() => {
    if (selectedIcon) {
      props.onIconChange(selectedIcon);
    }
  }, [selectedIcon]);

  return (
    <RadioGroup value={selectedIcon} onChange={setSelectedIcon}
                className="mt-4">
      <div className="grid grid-cols-5 gap-5">
        {personalizationIcons.map((iconObject) => (
          <RadioGroup.Option
            key={iconObject.name}
            value={iconObject.name}
            className={({active, checked}) =>
              classNames(
                active && checked ? 'ring ring-offset-1' : '',
                !active && checked ? 'ring-2' : '',
                'ring-gray-400 relative p-2 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
              )
            }
          >
            {<iconObject.icon height={20} width={20}/>}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
