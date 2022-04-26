import { FAQTab } from "../components/faq/FAQTab";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { PrismaClient } from "@prisma/client";

export default function FAQPage({ faq }) {
  return (
    <div className="mx-auto">
      <h1 className="prose-lg sm:prose-xl text-center font-extrabold mb-4 md:mb-6">
        Frequent Questions and Answers
      </h1>
      <FAQTab faq={faq} />
    </div>
  )
}

export async function getStaticProps({ locale }) {
  // TODO: Add translated FAQs
  const prisma = new PrismaClient();
  const faq = await prisma.faq.findMany();
  return {
    props: {
      faq,
      ...await serverSideTranslations(locale, ['common']),
    }
  };
}