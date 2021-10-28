import React from 'react';
import Image from "next/image";
import JB from "../../../public/ContentPhotos/IMG_9823.JPG";
import JB2 from "../../../public/ContentPhotos/IMG_9824.JPG";
import JB3 from "../../../public/ContentPhotos/IMG_9825.JPG";
import JB4 from "../../../public/ContentPhotos/IMG_9826.JPG";

const ProductImages = {
  images: [
    {
      src: JB,
      alt: 'Jugsie Bottle',
    },
    {
      src: JB2,
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: JB3,
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: JB4,
      alt: 'Model wearing plain white basic tee.',
    },
  ],
}

const ImageGallery = () => {
  return (
    <div
      className="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-x-8">
      <div
        className="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
        <Image
          src={ProductImages.images[0].src}
          alt={ProductImages.images[0].alt}
          layout={"fill"}
          className="w-full h-full object-center object-cover"
        />
      </div>
      <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <Image
            src={ProductImages.images[1].src}
            alt={ProductImages.images[1].alt}
            layout={"fill"}
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div className="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden">
          <Image
            src={ProductImages.images[2].src}
            alt={ProductImages.images[2].alt}
            layout={"fill"}
            className="w-full h-full object-center object-cover"
          />
        </div>
      </div>
      <div
        className="aspect-w-4 aspect-h-5 sm:rounded-lg sm:overflow-hidden lg:aspect-w-3 lg:aspect-h-4">
        <Image
          src={ProductImages.images[3].src}
          alt={ProductImages.images[3].alt}
          layout={"fill"}
          className="w-full h-full object-center object-cover"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
