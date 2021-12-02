import Link from "next/link";

const ContinueShoppingButton = (props) => {
  return (
    <Link href='/shop'>
      <button
        type="button"
        className="text-indigo-600 font-medium hover:text-indigo-500"
        onClick={props.handleOnClose}
      >
        Continue Shopping<span
        aria-hidden="true"> &rarr;</span>
      </button>
    </Link>
  );
};

export default ContinueShoppingButton;
