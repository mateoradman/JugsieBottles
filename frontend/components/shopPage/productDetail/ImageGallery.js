import Image from "next/image";
import {getPersonalizationIcon} from "../../../utils/constants";
import {classNames} from "../../../utils/general";
import {useRef} from "react";

const IndividualImage = (props) => {
  return (
    <Image
      src={props.image}
      alt={"Some text"}
      layout={"fill"}
      objectFit="contain"
      objectPosition="center"
      className={classNames("w-full h-full", props.className)}
      priority
    />
  )
}

const ProductImageGallery = (props) => {
  const bottleRef = useRef(null);

  let Icon;
  if (props.personalization.icon) {
    Icon = getPersonalizationIcon(props.personalization.icon);
  }

  return (
    <div
      className="mt-4 max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div
        className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <IndividualImage image={props.bottle.mainPhoto}/>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
          <IndividualImage image={props.bottle.mainPhoto}/>
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
          <IndividualImage image={props.bottle.mainPhoto}/>
        </div>
      </div>
      <div
        className="aspect-w-4 aspect-h-4 rounded-xl overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
        ref={bottleRef}
      >
        {props.personalization.text || props.personalization.icon ?
          <div className={"flex flex-col-reverse"}>
            <h2
              className={"text-center z-10 mb-20 sm:mb-0 md:mb-0 text-gray-400 text-lg"}>{props.personalization.text}</h2>
            {Icon && <Icon fill="fill-personalization"
                           className={classNames(
                             "z-10 fill-personalization self-center h-6 w-6 md:h-6 md:w-6",
                             !props.personalization.text ? 'mb-20' : 'mb-1')
                           }/>}
            <IndividualImage image={props.bottle.emptyPhoto} className={"scale-150 -translate-y-1/3"}/>
          </div>
          :
          <IndividualImage image={props.bottle.mainPhoto}/>
        }
      </div>
    </div>
  );
};

export default ProductImageGallery;
