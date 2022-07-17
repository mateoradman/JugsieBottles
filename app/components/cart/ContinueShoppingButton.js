import { useTranslation } from "next-i18next";
import Link from "next/link";

const ContinueShoppingButton = (props) => {
  const { t } = useTranslation("common");

  return (
    <Link href="/shop">
      <button
        type="button"
        className="text-indigo-600 font-medium hover:text-indigo-500"
        onClick={props.handleOnClose}
      >
        {t("continueShopping")}
        <span aria-hidden="true"> &rarr;</span>
      </button>
    </Link>
  );
};

export default ContinueShoppingButton;
