import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Checkout from "../../components/checkout/Checkout";

const CheckoutPage = () => {
  return (
    <Checkout />
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common','checkout']),
  },
})

export default CheckoutPage;