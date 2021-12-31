/* This example requires Tailwind CSS v2.0+ */
import { bottleFeatures } from "../../../utils/constants";
import HomePageCard from "../../homePage/cards/HomePageCard";

export default function TechnicalSpecs() {
  return (
    <div className="bg-white">
      <div
        className="max-w-2xl mx-auto py-12 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8 lg:grid-cols-2">
        <div>
          <h2
            className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">Technical
            Specifications</h2>
          <p className="mt-4 text-gray-500">
            The walnut wood card tray is precision milled to perfectly fit a
            stack of Focus cards. The powder coated
            steel divider separates active cards from new ones, or can be used
            to archive important task lists.
          </p>

          <dl
            className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
            {bottleFeatures.map((feature) => (
              <div key={feature.name} className="border-t border-gray-200 pt-4">
                <dt className="font-medium text-gray-900">{feature.name}</dt>
                <dd
                  className="mt-2 text-sm text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
          <HomePageCard
            cardImageSrc={"/ContentPhotos/IMG_9819.JPG"}
          />
          <HomePageCard
            cardImageSrc={"/ContentPhotos/IMG_9832.JPG"}
          />
        </div>
      </div>
    </div>
  )
}
