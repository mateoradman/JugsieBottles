import { useTranslation } from "next-i18next";
import Link from "next/link";
import { getFormattedPrice, getIcon } from "../../utils/general";

const CartProduct = (props) => {
  let Icon = getIcon(props.bottle.icon, "w-2 h-2 md:h-4 md:w-4 ml-1");
  const { t } = useTranslation('common')

  return (
    <li className="py-6 flex">
      <div
        className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={ props.bottle.mainPhoto }
          alt={ props.bottle.alt }
          className="w-full h-full object-center object-contain"
        />
      </div>

      <div className="ml-3 flex-1 flex flex-col">
        <div>
          <div
            className="flex justify-between text-sm sm:text-base font-medium text-gray-900">
            <h3>Jugsie Bottle</h3>
            <p className="ml-4">{ getFormattedPrice(props.bottle.price) }</p>
          </div>
          <p
            className="flex mt-1 text-sm text-gray-500">
            <span className="font-bold"><span
              className="mr-1">{ `${t('colour')}:` }</span></span>
            { props.bottle.name }
          </p>
          { props.bottle.icon || props.bottle.text ?
            <p
              className="flex space-x-1 mt-1 text-sm text-gray-500">
              <span className="font-bold">{ `${t('personalization')}:` }</span>
              { Icon ? <span className="flex">
                <span>{ props.bottle.text || null }</span>
                <span className="pl-2 self-center"><Icon /></span>
              </span>
                :
                <span>{ props.bottle.text }</span> }
            </p>
            : null }
        </div>
        <div className="sm:justify-end sm:flex">
          { !props.hideRemove ?
            <button type="button"
              className="font-medium text-indigo-600 hover:text-indigo-500 text-sm"
              onClick={ () => props.onRemove(props.bottle) }
            >
              { t("remove") }
            </button> :
            <Link href="/cart">
              <button type="button"
                className="mt-5 btn btn-primary text-2xs btn-xs">
                { t("viewCart") }
              </button>
            </Link>
          }
        </div>
      </div>
    </li>
  );
}

export default CartProduct