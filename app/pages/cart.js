import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FullCart } from "../components/cart/FullCart";

const Cart = (props) => {
  return <FullCart />;
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Cart;
