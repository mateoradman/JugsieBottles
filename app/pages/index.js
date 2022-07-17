import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import BottleDisplay from "../components/homePage/bottlePhotos/BottleDisplay";
import Gallery from "../components/homePage/gallery";
import Hero from "../components/homePage/hero";
import MarqueeRunningText from "../components/homePage/runningText";

export default function Home() {
  const { t } = useTranslation("common");
  return (
    <div className="relative min-h-screen overflow-hidden">
      <Hero />

      <MarqueeRunningText />
      {/* Message about sustainability */}
      <div className="bg-transparent">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:pt-12 sm:pb-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {t("sustainabilityTextHome")}
            </p>
            <p className="max-w-xl mt-3 sm:mt-5 mx-auto text-xl text-gray-500">
              {t("sustainabilitySecondTextHome")}
            </p>
          </div>
        </div>
      </div>
      <BottleDisplay />
      <Gallery />
    </div>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
