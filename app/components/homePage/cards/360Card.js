import { useTranslation } from "next-i18next";
import { AiOutlineRight } from "react-icons/ai";
import ThreeSixtyDisplay from "../bottlePhotos/360viewer";

const ThreeSixtyCard = (props) => {
  const { t } = useTranslation('index')
  return (
    <div
      className="flex custom-card bg-transparent">
      <ThreeSixtyDisplay />
    </div>
  )
}

export default ThreeSixtyCard;