import {useCartItems} from "../context/Context";
import Link from "next/link";
import {getCartTotalPrice, ID} from "../utils/general";
import CartProducts from "../components/cart/CartProducts";
import ContinueShoppingButton from "../components/cart/ContinueShoppingButton";

export default function Cart() {
  const {cartItemsArray} = useCartItems();

  return (
    <>
      <div className="mx-auto h-70vh container">
        <div
          className="h-full flex flex-col bg-transparent overflow-y-scroll">
          <div className="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
            <div
              className="text-xl font-extrabold text-gray-900">
              Shopping cart
            </div>
            <CartProducts cartItemsArray={cartItemsArray}/>
          </div>

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
            <div
              className="flex justify-between text-base font-medium text-gray-900">
              <p>Subtotal</p>
              <p>{`${getCartTotalPrice(cartItemsArray)} kn`}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-500">
              Free shipping included in the price.
            </p>
            <div className="mt-6">
              <Link href='/checkout/[id]' as={`/checkout/${ID()}`}>
                <a
                  className="flex max-w-md btn bg-green-800 hover:btn-success border-none rounded-md mx-auto justify-center">
                  Checkout
                </a>
              </Link>
            </div>
            <div
              className="mt-6 flex justify-center text-sm text-center text-gray-500">
              <p>
                or{' '}
                <ContinueShoppingButton/>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
