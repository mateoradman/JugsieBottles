import { PrismaClient } from "@prisma/client";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { FAQTab } from "../components/faq/FAQTab";

export default function FAQPage({ faq }) {
  const { t } = useTranslation("common");
  return (
    <div className="mx-auto">
      <h1 className="prose-lg sm:prose-xl text-center font-extrabold mb-4 md:mb-6">
        {t("faq")}
      </h1>
      <FAQTab faq={faq} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  const prisma = new PrismaClient();
  let faq;
  if (locale === "en") {
    faq = await prisma.faq.findMany({
      where: { locale: "en" },
    });
  } else {
    faq = await prisma.faq.findMany({
      where: { locale: "hr" },
    });
  }

  return {
    props: {
      faq,
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
