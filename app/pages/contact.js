import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Contact } from "../components/contact";

export default function ContactPage() {
  return <Contact></Contact>;
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common", "checkout"])),
  },
});
