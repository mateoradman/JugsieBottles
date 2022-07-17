import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function Gallery() {
  const { t } = useTranslation("common");
  return (
    <div className="bg-transparent">
      <div className="max-w-2xl mx-auto px-4 py-12 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        {/* Details section */}
        <section aria-labelledby="details-heading">
          <div className="mt-8 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8">
            <div>
              <div className="w-full aspect-w-2 aspect-h-2 rounded-lg overflow-hidden">
                <Image
                  src="/Images/three_bottles.jpg"
                  alt="Three Jugsie thermos bottles in a body of water."
                  layout="fill"
                  priority="false"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                {t("galleryDescriptionOne")}
              </p>
            </div>
            <div>
              <div className="w-full aspect-w-2 aspect-h-2 rounded-lg overflow-hidden">
                <Image
                  src="/Images/woman_holding_bottle.jpg"
                  alt="Lady holding a thermos bottle."
                  layout="fill"
                  priority="false"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <p className="mt-8 text-base text-gray-500">
                {t("galleryDescriptionTwo")}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
