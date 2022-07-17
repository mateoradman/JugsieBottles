import { useTranslation } from "next-i18next";
import Link from "next/link";
import CartProducts from "./CartProducts";
import { useCartItems } from "../../context/Context";
import ContinueShoppingButton from "./ContinueShoppingButton";
import { classNames, getCartTotalPrice } from "../../utils/general";

export const FullCart = (props) => {
  const { cartItemsArray } = useCartItems();
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto h-screen container">
      <div className="h-full flex flex-col bg-transparent">
        <div className="py-6 px-4 sm:px-6 overflow-y-auto">
          <div className="text-xl font-extrabold text-gray-900">
            {t("cart")}
          </div>
          <CartProducts cartItemsArray={cartItemsArray} />
        </div>

        <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>{t("subtotal")}</p>
            <p>{`${getCartTotalPrice(cartItemsArray)} kn`}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">{t("shipping")}</p>
          <div className="mt-6">
            <Link href="/checkout">
              <a
                className={classNames(
                  `flex max-w-md btn hover:btn-success 
                                      border-none rounded-md mx-auto justify-center`,
                  cartItemsArray.length === 0
                    ? "btn-disabled bg-gray-100"
                    : "bg-green-800"
                )}
              >
                {t("checkout")}
              </a>
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-sm text-center text-gray-500">
            <p>
              {t("or")} <ContinueShoppingButton />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
