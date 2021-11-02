import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
import ProductImageGallery from "./ImageGallery";
import {PersonalizationToggle} from "./Personalization";
import {bottleInformation, reviews} from "../../../utils/constants";
import {useState} from "react";
import ColourPicker from "./ColourPicker";

const product = {
  name: 'Jugsie Bottle',
  price: '130 kn',
  href: '#',
  images: [
    {
      src: "/ContentPhotos/IMG_9823.JPG",
      alt: 'Jugsie Bottle',
    },
    {
      src: "/ContentPhotos/IMG_9824.JPG",
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: "/ContentPhotos/IMG_9825.JPG",
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: "/BottlePhotos/Black.PNG",
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  noLogoImages: [
    {
      src: "/BottlePhotos/WithoutLogo/Black.png",
      alt: 'Jugsie Bottle',
    },
    {
      src: "/ContentPhotos/IMG_9824.JPG",
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: "/ContentPhotos/IMG_9825.JPG",
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: "/ContentPhotos/IMG_9826.JPG",
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Something goes here',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}


export const ProductCard = () => {
  const [selectedBottle, setSelectedBottle] = useState(bottleInformation[0]);
  const handleSelectedBottle = (radioPickedBottle) => {
    setSelectedBottle(radioPickedBottle);
  }

  const defaultPersonalization = {icon: "", text: ""};
  const [selectedPersonalization, setSelectedPersonalization] = useState(defaultPersonalization);
  const handleSelectedPersonalization = (personalization) => {
    setSelectedPersonalization(personalization);
  }

  return (
    <div className="bg-white">
      <div>
        {/* Image gallery */}
        <ProductImageGallery bottle={selectedBottle} personalization={selectedPersonalization}/>

        {/* Product info */}
        <div
          className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Recenzija</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {getStarsArray(reviews.average)}
                </div>
                <p className="sr-only">{reviews.average} od 5 zvjezdica na
                  Trustpilot-u.</p>
                <a href={reviews.href}
                   target="_blank"
                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} reviews
                </a>
              </div>
            </div>

            {/* Colour and Personalization Form */}
            <form className="mt-10">
              <ColourPicker onBottleChange={handleSelectedBottle}/>
              <PersonalizationToggle defaultPersonalization={defaultPersonalization}
                                     onPersonalizationChange={handleSelectedPersonalization}/>
              <button
                type="submit"
                className="mt-10 w-full btn btn-primary"
              >
                Dodaj u košaricu
              </button>
            </form>
          </div>

          <div
            className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r
            lg:border-gray-200 lg:pr-8">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="pl-4 list-disc text-sm space-y-2">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}


function getStarsArray(average) {
  let FullStarsArray = Array.from({length: parseInt(average)}, (v, i) => i);

  let returnArray = FullStarsArray.map((rating) => (
    <IoStar
      key={rating}
      className="h-5 w-5 flex-shrink-0"
    />
  ));

  if (average % 1 !== 0) {
    returnArray.push(
      <IoStarHalf
        key={returnArray.length}
        className="h-5 w-5 flex-shrink-0"
      />
    );
  }

  while (returnArray.length < 5) {
    returnArray.push(
      <IoStarOutline
        key={returnArray.length}
        className="h-5 w-5 flex-shrink-0"
      />
    );
  }
  return returnArray;
}