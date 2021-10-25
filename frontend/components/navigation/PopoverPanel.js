import {Popover} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import NavbarLinks from "./NavbarLinks";


const PopoverPanel = () => {
  return (
    <Popover.Panel
      focus
      className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
    >
      <div
        className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
        <div className="px-5 pt-4 flex items-center justify-between">
          <div>
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
              alt=""
            />
          </div>
          <div className="-mr-2">
            <Popover.Button
              className="bg-white rounded-md p-2 inline-flex items-center justify-center
                    text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                    focus:ring-inset focus:ring-indigo-500">
              <XIcon className="h-6 w-6" aria-hidden="true"/>
            </Popover.Button>
          </div>
        </div>
        <NavbarLinks
          buttonStyling="block px-3 py-2 rounded-md text-base font-medium text-gray-700
            hover:text-gray-900 hover:bg-gray-50"
          divStyling="px-2 pt-2 pb-3 space-y-1"
        />
      </div>
    </Popover.Panel>
  )
}

export default PopoverPanel;

