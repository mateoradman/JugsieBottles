import React from 'react';
import HeroPhoto from '../../public/Hero/Hero.jpg';
import Link from "next/link";


const Hero = () => {
  return (
    <div className="hero min-h-screen"
         style={{
           backgroundImage: `url(${HeroPhoto.src})`
         }}>
      <div className="hero-overlay bg-opacity-60"/>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Jugsie Bottles
          </h1>
          <p className="mb-5">
            Tvoja boca za svaki dan.
          </p>
          <Link href="/shop">
            <button className="btn btn-outline">Kupi sada</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Hero;

