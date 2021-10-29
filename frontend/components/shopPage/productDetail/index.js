import {useState} from 'react'
import {RadioGroup} from '@headlessui/react'
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
import ProductImageGallery from "./ImageGallery";

const product = {
  name: 'Jugsie Bottle',
  price: '130 kn',
  href: '#',
  breadcrumbs: [
    {id: 1, name: 'Men', href: '#'},
    {id: 2, name: 'Clothing', href: '#'},
  ],
  colors: [
    {name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400'},
    {name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900'},
    {name: 'Hot Pink', class: 'bg-pink-200', selectedClass: 'ring-gray-400'},
    {name: 'Turquoise', class: 'bg-green-500', selectedClass: 'ring-gray-400'},
    {name: 'Lilac', class: 'bg-indigo-400', selectedClass: 'ring-gray-400'},
    {name: 'Green', class: 'bg-green-700', selectedClass: 'ring-gray-400'},
    {name: 'Blue', class: 'bg-blue-700', selectedClass: 'ring-gray-400'},
  ],
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

const reviews = {
  href: 'https://www.trustpilot.com/review/jugsie.com',
  average: 4.4,
  totalCount: 12
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


export const ProductCard = () => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])

  const handleKeyPress = (e) => {
    console.log('this is:', e.target.value);
  }

  return (
    <div className="bg-white">
      <div>
        {/* Image gallery */}
        <ProductImageGallery images={product.images}/>

        {/* Product info */}
        <div
          className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">{product.name}</h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <h2 className="sr-only">Product information</h2>
            <p className="text-3xl text-gray-900">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
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

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-900 font-medium">Color</h3>

                <RadioGroup value={selectedColor} onChange={setSelectedColor}
                            className="mt-4">
                  <RadioGroup.Label className="sr-only">Choose a
                    color</RadioGroup.Label>
                  <div className="flex items-center space-x-3">
                    {product.colors.map((color) => (
                      <RadioGroup.Option
                        key={color.name}
                        value={color}
                        className={({active, checked}) =>
                          classNames(
                            color.selectedClass,
                            active && checked ? 'ring ring-offset-1' : '',
                            !active && checked ? 'ring-2' : '',
                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                          )
                        }
                      >
                        <RadioGroup.Label as="p" className="sr-only">
                          {color.name}
                        </RadioGroup.Label>
                        <span
                          aria-hidden="true"
                          className={classNames(
                            color.class,
                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                          )}
                        />
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>

              <div className="mt-10 form-control">
                <label className="label">
                  <span className="text-sm text-gray-900 font-medium">
                    Personalizacija
                  </span>
                </label>
                <input type="text"
                       maxLength={8}
                       placeholder="Personalizacija (max. 8 znakova)"
                       className="input input-bordered"
                       onChange={handleKeyPress}>
                </input>
              </div>

              <button
                type="submit"
                className="mt-10 w-full btn btn-primary"
              >
                Dodaj u košaricu
              </button>
            </form>
          </div>

          <div
            className="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
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