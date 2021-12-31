import { ProductCard } from "../components/shop/productDetail";
import TechnicalSpecs from "../components/shop/productTechnicalSpecs";
import { APIRequestDefaults, APIUrl } from "../utils/constants";

export default function Shop({ product }) {
  return (
    <>
      <ProductCard product={ product } />
      <TechnicalSpecs />
    </>
  )
}

export async function getStaticProps(context) {
  const url = new URL('product/bottles/1', APIUrl)
  const res = await fetch(url.href, APIRequestDefaults)
  const product = await res.json()

  return {
    props: { product }// will be passed to the page component as props
  }
}
