import {useTranslation} from "next-i18next";
import ThreeSixtyCard from "../360Card";

export default function TechnicalSpecs() {
  const {t} = useTranslation('shop');
  const bottleFeatures = [
    { name: t('manufacturingCountry'), description: t("China") },
    {
      name: t("material"),
      description: t("stainlessSteel"),
    },
    { name: t("dimensions"), description: '26cm x 7cm' },
    { name: t("weight"), description: '380g' },
    { name: t("finish"), description: t("finishDescription") },
    {
      name: t("considerations"),
      description: t('considerationsDescription'),
    },
  ];
  return (
    <div className="bg-white">
      <div
        className="max-w-2xl mx-auto py-16 px-4 grid items-start grid-cols-1 gap-x-8 gap-y-16 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            {t('technicalSpecifications')}
          </h2>
          <p className="mt-4 text-gray-500">
            {t('technicalSpecificationsDescription')}
          </p>

          <dl
            className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 sm:gap-y-12 lg:gap-x-8">
            {bottleFeatures.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-2">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd
                  className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ThreeSixtyCard/>
      </div>
    </div>
  )
}
