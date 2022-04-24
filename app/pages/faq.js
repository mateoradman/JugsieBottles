import {FAQTab} from "../components/faq/FAQTab";
import {getAuthToken, getDefaultRequest} from "../utils/api";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export default function FAQPage({faq}) {
  return (
    <div className="mx-auto">
      <h1 className="prose-lg sm:prose-xl text-center font-extrabold mb-4 md:mb-6">
        Frequent Questions and Answers
      </h1>
      <FAQTab faq={faq}/>
    </div>
  )
}

export async function getStaticProps({locale}) {
  let authHeader = await getAuthToken();
  let customRequest = getDefaultRequest();
  customRequest.headers["Authorization"] = authHeader;
  const url = new URL("faq/faqs/", process.env.API_HOST);
  const res = await fetch(url.href, customRequest);
  const faq = await res.json();
  return {
    props: {
      faq,
      ...await serverSideTranslations(locale, ['common']),
    }
  };
}