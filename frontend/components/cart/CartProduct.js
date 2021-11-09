const CartProduct = (props) => {

  return (
    <li className="py-6 flex">
      <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
        <img
          src={props.bottle.mainPhoto}
          alt={props.bottle.alt}
          className="w-full h-full object-center object-cover"
        />
      </div>

      <div className="ml-4 flex-1 flex flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={props.bottle.href}>{props.bottle.name}</a>
            </h3>
            <p className="ml-4">{props.bottle.price}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{props.bottle.color}</p>
        </div>
        <div className="flex-1 flex items-end justify-between text-sm">
          <p className="text-gray-500">Qty {props.bottle.quantity}</p>

          <div className="flex">
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartProduct