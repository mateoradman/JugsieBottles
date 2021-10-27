import ThreeSixtyDisplay from "../bottlePhotos/360viewer";
import {AiOutlineRight} from "react-icons/ai";
import {Md360} from "react-icons/md";

const ThreeSixtyCard = (props) => {
  return (
    <div
      className="flex custom-card bg-gradient-to-r from-indigo-50 to-indigo-100">
      <div className="mt-8 ml-2.5 flex-col self-center space-y-12">
        <span className="btn">Okreni me</span>
        <span className="btn btn-sm md:btn-md btn-secondary flex-nowrap">
          Personaliziraj
          <AiOutlineRight className="ml-0.5"/>
        </span>
      </div>
      <ThreeSixtyDisplay/>
    </div>
  )
}

export default ThreeSixtyCard;