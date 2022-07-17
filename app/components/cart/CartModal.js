import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CartProduct from "./CartProduct";
import { XIcon } from "@heroicons/react/outline";

export default function CartModal(props) {
  return (
    <Transition.Root show={props.isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={() => props.setOpen(!props.isOpen)}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-top self-center bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pb-4 sm:p-6 sm:pb-4">
                <div className="ml-2 h-7 flex items-center pt-3">
                  <button
                    type="button"
                    className="-m-2 p-2 hover:text-gray-500"
                    onClick={() => props.setOpen(!props.isOpen)}
                  >
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <CartProduct hideRemove={true} bottle={props.bottle} />
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
