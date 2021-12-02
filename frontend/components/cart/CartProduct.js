import {getFormattedPrice, getPersonalizationIcon} from "../../utils/general";
import Link from "next/link";

const CartProduct = (props) => {
  let Icon = getPersonalizationIcon(props.bottle.icon, "w-2 h-2 md:h-4 md:w-4 ml-1");

  return (
    <li className="py-6 flex">
      <div
        className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={props.bottle.mainPhoto}
          alt={props.bottle.alt}
          className="w-full h-full object-center object-contain"
        />
      </div>

      <div className="ml-3 flex-1 flex flex-col">
        <div>
          <div
            className="flex justify-between text-base font-medium text-gray-900">
            <h3>Jugsie Bottle</h3>
            <p className="ml-4">{getFormattedPrice(props.bottle.price)}</p>
          </div>
          <p
            className="flex mt-1 text-sm text-gray-500">
              <span className="font-bold"><span
                className="mr-1">{'Colour:'}</span></span>
            {props.bottle.name}
          </p>
          {props.bottle.icon || props.bottle.text ?
            <p
              className="flex space-x-1 mt-1 text-sm text-gray-500">
              <span className="font-bold">Personalization: </span>
              {Icon ? <span className="flex">
                <span>{props.bottle.text || null}</span>
              <span className="pl-2"><Icon/></span>
            </span>
                :
                <span>{props.bottle.text}</span>}
            </p>
            : null}
        </div>
        <div className="flex justify-end">
          {!props.hideRemove ?
            <button type="button"
                    className="font-medium text-indigo-600 hover:text-indigo-500"
                    onClick={() => props.onRemove(props.bottle)}
            >
              Remove
            </button> :
            <Link href="/cart">
              <button type="button"
                      className="mt-5 btn btn-primary text-2xs btn-xs">
                View Full Cart
              </button>
            </Link>
          }
        </div>
      </div>
    </li>
  );
}

export default CartProduct