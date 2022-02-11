import { FAQTab } from "../components/faq/FAQTab";
import { getAuthToken, getDefaultRequest } from "../utils/api";

export default function FAQPage({faq}) {
  return (
    <div className="mx-auto">
      <h1 className="prose-lg sm:prose-xl text-center font-extrabold mb-4 md:mb-6">Frequent Questions and Answers</h1>
      <FAQTab faq={faq}/>
    </div>
  )
}

export async function getStaticProps(context) {
  let authHeader = await getAuthToken();
  let customRequest = getDefaultRequest();
  customRequest.headers["Authorization"] = authHeader;
  const url = new URL("faq/faqs/", process.env.API_HOST);
  const res = await fetch(url.href, customRequest);
  const faq = await res.json();
  return {
    props: { faq }, // will be passed to the page component as props
  };
}