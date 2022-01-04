import { ProductCard } from "../components/shop/productDetail";
import TechnicalSpecs from "../components/shop/productTechnicalSpecs";
import { getAuthToken, getDefaultRequest } from "../utils/api";

export default function Shop({ product }) {
  return (
    <>
      <ProductCard product={product} />
      <TechnicalSpecs />
    </>
  );
}

export async function getStaticProps(context) {
  let authHeader = await getAuthToken();
  let customRequest = getDefaultRequest();
  customRequest.headers["Authorization"] = authHeader;
  const url = new URL("product/bottles/1", process.env.API_HOST);
  const res = await fetch(url.href, customRequest);
  const product = await res.json();

  return {
    props: { product }, // will be passed to the page component as props
  };
}
