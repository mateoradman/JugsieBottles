import {BiShoppingBag} from "react-icons/bi";

const CartIcon = (props) => {
  return (
    <div className="indicator">
      <div
        className="-m-1 indicator-item badge badge-info">{props.numberOfCartItems || 0}
      </div>
      <BiShoppingBag
        className={"h-7 w-7"}
      />
    </div>
  );
};

export default CartIcon;
