import {useEffect, useState} from "react";
import {RadioGroup} from "@headlessui/react";
import {classNames} from "../../../utils/general";
import {bottleInformation} from "../../../utils/constants";


const ColourPicker = (props) => {
  const [selectedBottle, setSelectedBottle] = useState(bottleInformation[0]);

  useEffect(() => {
    props.onBottleChange(selectedBottle);
  }, [selectedBottle]);

  return (
    <RadioGroup value={selectedBottle} onChange={setSelectedBottle}
                className="mt-4">
      <div className="flex items-center space-x-3">
        {bottleInformation.map((bottle) => (
          <RadioGroup.Option
            key={bottle.name}
            value={bottle}
            className={({active, checked}) =>
              classNames(
                active && checked ? 'ring-1 ring-offset-1' : '',
                !active && checked ? 'ring-1' : '',
                'ring-black relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none',
              )
            }
          >
            <span
              aria-hidden="true"
              className={classNames(
                'h-8 w-8 border border-black border-opacity-10 rounded-full',
                bottle.class
              )}
            />
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}

export default ColourPicker;