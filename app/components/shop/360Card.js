import {useTranslation} from "next-i18next";

const ThreeSixtyCard = () => {
  const {t} = useTranslation('shop')
  return (
    <div className="h-3/4 pt-8 sm:pt-0">
      <h2
        className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-center">
        {t('360DegreeView')}
      </h2>
      <p className="mt-4 text-gray-500 mb-8 lg:text-center">
        {t('360DegreeViewDescription')}
      </p>
      <div className="Sirv" data-src="https://gemartfu.sirv.com/crop%202/crop%202.spin"/>
    </div>
  )
}

export default ThreeSixtyCard;