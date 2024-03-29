import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProductCard } from "../components/shop/productDetail";
import TechnicalSpecs from "../components/shop/productTechnicalSpecs";
import { PrismaClient } from "@prisma/client";
import Incentives from "../components/shop/incentives";

export default function Shop(props) {
  return (
    <>
      <ProductCard product={props.product} />
      <Incentives />
      <TechnicalSpecs />
    </>
  );
}

export async function getStaticProps({ locale }) {
  const prisma = new PrismaClient();
  const product = await prisma.bottle.findFirst({
    where: {
      colour: "Blue",
    },
  });

  return {
    props: {
      product,
      ...(await serverSideTranslations(locale, ["common", "shop"])),
    },
  };
}
