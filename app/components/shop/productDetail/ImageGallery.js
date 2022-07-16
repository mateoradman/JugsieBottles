import Image from "next/image";
import { classNames, getIcon } from "../../../utils/general";

const IndividualImage = (props) => {
  return (
    <Image
      src={ props.image }
      alt={ props.alt }
      layout={ "fill" }
      objectFit="contain"
      objectPosition="center"
      className={ classNames("w-full h-full", props.className) }
      priority={true}
    />
  )
}

const ProductImageGallery = (props) => {
  let Icon;
  if (props.personalization.icon) {
    Icon = getIcon(props.personalization.icon);
  }

  return (
    <div
      className="mt-4 mx-auto px-4 max-w-md lg:px-8">
      <div
        className="aspect-w-4 aspect-h-4 rounded-xl overflow-hidden lg:aspect-w-3 lg:aspect-h-4"
      >
        { props.personalization.text || props.personalization.icon ?
          <>
            <div className="flex flex-col-reverse z-10">
              <h2
                className={ classNames(
                  "text-center mb-15% lg:mb-22% text-xs",
                  props.bottle.name === 'White' ? 'text-personalization-dark' : 'text-personalization-standard',
                ) }>{ props.personalization.text }</h2>
              { Icon && <Icon className={ classNames(
                "self-center h-5 w-5",
                !props.personalization.text ? 'mb-2' : 'mb-1',
                props.bottle.name === 'White' ? 'fill-personalization-dark' : 'fill-personalization-standard',
              )
              } /> }
            </div>
            <IndividualImage image={ props.bottle.emptyPhoto } />
          </>
          :
          <IndividualImage image={ props.bottle.mainPhoto } />
        }
      </div>
    </div>
  );
};

export default ProductImageGallery;
