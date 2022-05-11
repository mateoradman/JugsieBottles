import {Popover, Transition} from "@headlessui/react";
import {MenuIcon, XIcon} from "@heroicons/react/outline";
import Link from "next/link";
import {Fragment, useState} from "react";
import {useCartItems} from "../../context/Context";
import JugsieBottlesLogo from "../../public/Logos/logo";
import Cart from "../cart";
import CartIcon from "./CartIcon";
import NavbarLinks from "./NavbarLinks";

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const setCartState = () => {
    setOpen(!open);
  }

  const { cartItemsArray } = useCartItems();

  return (
    <div className="relative pb-8 bg-white mx-auto">
      <Popover>
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 md:mx-16"
            aria-label="Global">
            <div
              className="flex items-center flex-grow flex-shrink-0 md:flex-grow-0">
              <div
                className="flex items-center justify-between w-full md:w-auto">
                <Popover.Button
                  className="rounded-md p-2 inline-flex items-center justify-center text-black md:hidden">
                  <MenuIcon className="h-7 w-7" aria-hidden="true" />
                </Popover.Button>
                <Link href="/">
                  <a className="-mt-1">
                    <JugsieBottlesLogo />
                  </a>
                </Link>
                <div
                  className="pr-3 py-1.5 justify-inline rounded-md h-10 md:hidden"
                  onClick={ setCartState }>
                  <CartIcon numberOfCartItems={ cartItemsArray.length } />
                </div>
              </div>
            </div>
            <NavbarLinks
              divStyling="hidden flex md:block md:mx-auto md:space-x-8 md:items-center"
              buttonStyling="btn btn-ghost btn-sm"
            />
            <div
              className="hidden md:border-none md:-mr-2 md:inline-flex"
              onClick={ setCartState }>
              <CartIcon numberOfCartItems={ cartItemsArray.length } />
            </div>
            <Cart open={ open } onClose={ setCartState }
              cartItemsArray={ cartItemsArray } />
          </nav>
        </div>

        <Transition
          as={ Fragment }
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute h-full z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            {({ close }) => (
              <div
                className="rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <JugsieBottlesLogo />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button
                      className="bg-white rounded-md p-2 inline-flex items-center justify-center
                      text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2
                      focus:ring-inset focus:ring-indigo-500">
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div onClick={async () => close()}>
                  <NavbarLinks
                      buttonStyling="btn btn-outline btn-primary"
                      divStyling="p-4 space-y-4 flex flex-col"
                  />
                </div>
              </div>
            )}
          </Popover.Panel>

        </Transition>
      </Popover>
    </div>
  );
}

export default Navbar;
