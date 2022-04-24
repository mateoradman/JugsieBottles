import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { useTranslation } from "next-i18next";
import { classNames, getCartTotalPrice, getFormattedPrice } from "../../utils/general";
import CartProducts from '../cart/CartProducts';

export const OrderSummary = (props) => {
    const { t } = useTranslation('checkout');

    return (
        <div className="mt-6 px-5 sm:px-0 sm:mx-auto sm:w-full sm:max-w-xl">
            <div className="flex flex-col space-y-4 w-full p-2 mx-auto bg-white rounded-2xl">
                <Disclosure defaultOpen>
                    { ({ open }) => (
                        <>
                            <Disclosure.Button
                                className={
                                    `flex justify-between self-center px-6 sm:px-12 py-2 text-lg 
                                    sm:text-xl font-medium text-left text-green-900 bg-green-100 rounded-lg 
                                  hover:bg-green-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 
                                    focus-visible:ring-opacity-75`
                                }
                            >
                                <span>{ t('orderSummary') }</span>
                                <ChevronUpIcon
                                    className={ classNames(
                                        "text-purple-900 w-5 h-5 ml-5 self-center",
                                        open ? "transform rotate-180" : ""
                                    ) }
                                />
                            </Disclosure.Button>
                            <Transition
                                show={ open }
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <Disclosure.Panel static>
                                    <div className="flex flex-col space-y-5 text-sm card bordered rounded-lg shadow-md p-4">
                                        <CartProducts cartItemsArray={ props.cartItemsArray } />
                                        <span className="self-end sm:text-lg font-extrabold">
                                            { t('totalPrice') }:{ " " }
                                            { getFormattedPrice(getCartTotalPrice(props.cartItemsArray)) }
                                        </span>
                                    </div>
                                </Disclosure.Panel>
                            </Transition>
                        </>
                    ) }
                </Disclosure>
            </div>
        </div>
    )
}
