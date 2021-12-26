import CartProduct from "./CartProduct";
import {useCartItems} from "../../context/Context";
import {ID} from "../../utils/general";

const CartProducts = (props) => {
  const {cartItemsArray, setCartItemsArray} = useCartItems();
  const handleRemoveItemFromCart = (bottleItem) => {
    setCartItemsArray(cartItemsArray.filter((item) => item !== bottleItem));
  }

  return (
    <div className="mt-8">
      {cartItemsArray.length > 0 ?
        <div className="flow-root">
          <ul role="list"
              className="-my-6 divide-y divide-gray-200">
            {cartItemsArray.map((product) =>
              <CartProduct key={ID()} bottle={product}
                           onRemove={handleRemoveItemFromCart}/>
            )}
          </ul>
        </div>
        :
        <p
          className="text-base text-gray-900">
          The cart is empty.
        </p>
      }

    </div>
  )
}

export default CartProducts