import { nanoid } from "nanoid";
import { useTranslation } from "next-i18next";
import { useCartItems } from "../../context/Context";
import CartProduct from "./CartProduct";

const CartProducts = () => {
  const { cartItemsArray, setCartItemsArray } = useCartItems();
  const handleRemoveItemFromCart = (bottleItem) => {
    setCartItemsArray(cartItemsArray.filter((item) => item !== bottleItem));
  };
  const { t } = useTranslation("common");

  return (
    <div className="mt-8">
      {cartItemsArray.length > 0 ? (
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {cartItemsArray.map((product) => (
              <CartProduct
                key={nanoid()}
                bottle={product}
                onRemove={handleRemoveItemFromCart}
              />
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-base text-gray-900">{t("cartEmpty")}</p>
      )}
    </div>
  );
};

export default CartProducts;
