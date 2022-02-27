import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import CheckoutForm from "../../components/checkout/CheckoutForm";

const Checkout = () => {
  return (
    <CheckoutForm />
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['checkout']),
  },
})

export default Checkout;