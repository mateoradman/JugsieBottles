import Image from "next/image";
import {getPersonalizationIcon} from "../../../utils/general";
import {classNames} from "../../../utils/general";

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
      >
        {props.personalization.text || props.personalization.icon ?
          <>
            <div className="flex flex-col-reverse z-10">
              <h2
                className={classNames(
                  "text-center mb-15% lg:mb-22% text-sm md:text-base",
                  props.bottle.name === 'White' ? 'text-personalization-dark' : 'text-personalization-standard',
                )}>{props.personalization.text}</h2>
              {Icon && <Icon className={classNames(
                "self-center h-6 w-6",
                !props.personalization.text ? 'mb-2' : '',
                props.bottle.name === 'White' ? 'fill-personalization-dark' : 'fill-personalization-standard',
              )
              }/>}
            </div>
            <IndividualImage image={props.bottle.emptyPhoto}/>
          </>
          :
          <IndividualImage image={props.bottle.mainPhoto}/>
        }
      </div>
    </div>
  );
};

export default ProductImageGallery;
