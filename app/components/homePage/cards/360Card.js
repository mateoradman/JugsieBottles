import { useTranslation } from "next-i18next";
import { AiOutlineRight } from "react-icons/ai";
import ThreeSixtyDisplay from "../bottlePhotos/360viewer";

const ThreeSixtyCard = (props) => {
  const { t } = useTranslation('index')
  return (
    <div
      className="flex custom-card bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="mt-8 ml-2.5 flex-col self-center space-y-12">
        <span className="btn no-animation cursor-default">{ t('rotate-me') }</span>
        <span className="btn btn-sm md:btn-md btn-secondary flex-nowrap">
          { t('personalize') }
          <AiOutlineRight className="ml-0.5" />
        </span>
      </div>
      <ThreeSixtyDisplay />
    </div>
  )
}

export default ThreeSixtyCard;