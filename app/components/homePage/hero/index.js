import { useTranslation } from "next-i18next";
import Link from "next/link";
import HeroPhoto from "../../../public/Hero/Hero.jpg";

const Hero = () => {
  const { t } = useTranslation('common');
  return (
    <div
      className="hero h-120 md:h-160"
      style={ {
        backgroundImage: `url(${HeroPhoto.src})`,
      } }
    >
      <div className="hero-overlay bg-opacity-80" />
      <div className="hero-content text-neutral-content w-full text-center flex-col">
        <h1
          className="-mt-8 text-5xl sm:text-6xl pb-2 sm:pb-3 md:text-8xl font-extrabold text-transparent
          bg-gradient-to-r bg-clip-text from-blue-500 to-green-300 whitespace-nowrap tracking-tight"
        >
          Jugsie Bottle,
        </h1>
        <p className="mb-3 sm:mb-5 -mt-2 text-2xl sm:text-3xl md:text-6xl font-extrabold text-white">
          { t("hero-message") }
        </p>
        <Link href="/shop">
          <button className="btn btn-outline text-white text-sm md:w-1/5 sm:text-lg md:text-xl">
            { t("buy-now") }
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
