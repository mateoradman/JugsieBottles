import React from 'react';
import HeroPhoto from '../../public/Hero/Hero.jpg';
import Bottle from "../bottlePhotos/Bottle";

const HeroBigText = () => (
  <h1
    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
    <span className="block xl:inline">Tvoja boca</span><br/>
    <span
      className="block text-green-500 xl:inline">za svaki dan.</span>
  </h1>
);

const Hero = () => {
  return (
    <div className="w-screen">
      <Bottle
        bottle={HeroPhoto}
        bottle_name="Black"
        formatting=""
      />
      <div className="mt-5 sm:mt-8 sm:flex justify-center">
        <div className="rounded-2xl shadow">
          <a
            href="/shop"
            className="w-full flex items-center justify-center px-8 py-3
                      border border-transparent text-base font-medium rounded text-white
                      bg-green-600 hover:bg-green-700 md:py-4 md:text-lg md:font-extrabold md:px-10"
          >
            Shop
          </a>
        </div>
      </div>
    </div>
  );
};


export default Hero;

