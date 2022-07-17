import {useTranslation} from "next-i18next";
import {useState} from "react";
import {IoStar, IoStarHalf, IoStarOutline} from "react-icons/io5";
import {useCartItems} from "../../../context/Context";
import {bottleInformation, reviews} from "../../../utils/constants";
import {classNames, getFormattedPrice} from "../../../utils/general";
import CartModal from "../../cart/CartModal";
import ColourPicker from "./ColourPicker";
import ProductImageGallery from "./ImageGallery";
import {PersonalizationToggle} from "./Personalization";

export const ProductCard = ({product}) => {
  const [isOpenCartModal, setOpenCartModal] = useState(false);

  const [selectedBottle, setSelectedBottle] = useState(bottleInformation[0]);
  const handleSelectedBottle = (radioPickedBottle) => {
    setSelectedBottle(radioPickedBottle);
  }

  const defaultPersonalization = {icon: "", text: ""};
  const [selectedPersonalization, setSelectedPersonalization] = useState(defaultPersonalization);
  const handleSelectedPersonalization = (personalization) => {
    setSelectedPersonalization(personalization);
    if (personalization.icon || personalization.text) {
      product.price = 170;
    } else {
      product.price = 130;
    }
  }

  const {cartItemsArray, setCartItemsArray} = useCartItems()
  const getCompleteBottleObject = () => {
    return {
      ...selectedBottle,
      ...selectedPersonalization,
      price: product.price
    };
  }

  const handleSubmitBottle = (e) => {
    e.preventDefault();
    setCartItemsArray([...cartItemsArray, getCompleteBottleObject()]);
    setOpenCartModal(true);
  }

  const {t} = useTranslation('shop')

  return (
    <div className="bg-white">
      <div>
        {/* Image gallery */}
        <ProductImageGallery bottle={selectedBottle}
                             personalization={selectedPersonalization}/>

        <CartModal isOpen={isOpenCartModal} setOpen={setOpenCartModal}
                   bottle={getCompleteBottleObject()}/>
        {/* Product info */}
        <div
          className="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1
              className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
              {`${selectedBottle.name} (500ml)`}
            </h1>
          </div>

          {/* Options */}
          <div className="mt-4 lg:mt-0 lg:row-span-3">
            <p className="text-3xl text-gray-900">
              {getFormattedPrice(product.price)}
            </p>

            {/* Reviews */}
            <div className="mt-6">
              <div className="flex items-center">
                <div className="flex items-center">
                  {getStarsArray(reviews.average)}
                </div>
                <a href={reviews.href}
                   target="_blank"
                   rel="noreferrer"
                   className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {reviews.totalCount} {t('reviews')}
                </a>
              </div>
            </div>

            {/* Colour and Personalization Form */}
            <form onSubmit={handleSubmitBottle} className="mt-10">
              <ColourPicker onBottleChange={handleSelectedBottle}/>
              <PersonalizationToggle
                defaultPersonalization={defaultPersonalization}
                onPersonalizationChange={handleSelectedPersonalization}/>
              <button
                type="submit"
                className={classNames("mt-10 w-full btn", selectedBottle.name === 'Black' ? "btn-disabled" : "btn-primary")}
              >
                {selectedBottle.name === 'Black' ? t('out-of-stock') : t('add-to-cart')}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )

}


function getStarsArray(average) {
  let FullStarsArray = Array.from({length: parseInt(average)}, (_v, i) => i);

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