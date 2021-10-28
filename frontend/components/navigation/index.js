import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import {Fragment} from "react";
import {ShoppingCartIcon} from "@heroicons/react/solid";
import NavbarLinks from "./NavbarLinks";
import Link from "next/link";
import JugsieBottlesLogo from "../logo";


const Navbar = () => {
  return (
    <div className="relative pb-8 bg-white max-w-7xl mx-auto">
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10"
            aria-label="Global">
            <div
              className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div
                className="flex items-center justify-between w-full md:w-auto">
                <Link href="/">
                  <JugsieBottlesLogo/>
                </Link>
                <div className="-mr-2 flex items-center md:hidden">
                  <ShoppingCartIcon
                    className="flex px-4 py-1 rounded-md h-8 justify-inline
              text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  />
                  <Popover.Button
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center
                    text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                    focus:ring-inset focus:ring-indigo-500">
                    <MenuIcon className="h-6 w-6" aria-hidden="true"/>
                  </Popover.Button>
                </div>
              </div>
            </div>
            <NavbarLinks
              divStyling="hidden flex md:block md:ml-10 md:pr-4 md:space-x-8 lg:justify-center"
              buttonStyling="font-bold text-lg text-gray-500 hover:text-gray-900"
            />
            <ShoppingCartIcon
              className="hidden md:block md:-mr-2 md:h-8 inline-flex text-gray-500
             hover:text-gray-900"
            />
          </nav>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div
              className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <JugsieBottlesLogo/>
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

        </Transition>
      </Popover>
    </div>
  );
}


export default Navbar;