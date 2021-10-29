import Image from "next/image";

const IndividualImage = (props, priority = "false") => {
  console.log(props, priority)
  return (
    <Image
      src={props.image.src}
      alt={props.image.alt}
      layout={"fill"}
      objectFit="cover"
      objectPosition="center"
      className="w-full h-full"
      priority={priority}
    />
  )
}
const ProductImageGallery = (props) => {
  return (
    <div
      className="mt-4 max-w-2xl mx-auto px-4 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div
        className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <IndividualImage image={props.images[0]}/>
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
          <IndividualImage image={props.images[1]}/>
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-xl overflow-hidden">
          <IndividualImage image={props.images[2]}/>
        </div>
      </div>
      <div
        className="aspect-w-4 aspect-h-5 rounded-xl overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <IndividualImage image={props.images[3]} priority={"true"}/>
      </div>
    </div>
  );
};

export default ProductImageGallery;
