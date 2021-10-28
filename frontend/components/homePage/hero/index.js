import React from 'react';
import HeroPhoto from '../../../public/Hero/Hero.jpg';
import Link from "next/link";


const Hero = () => {
  return (
    <div className="hero h-120 md:h-160"
         style={{
           backgroundImage: `url(${HeroPhoto.src})`
         }}>
      <div className="hero-overlay bg-opacity-60"/>
      <div className="text-center hero-content text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-extrabold tracking-wider">
            JUGSIE BOTTLES
          </h1>
          <p className="mb-5">
            Tvoja boca za svaki dan.
          </p>
          <Link href="/shop">
            <button className="btn btn-outline text-white">Kupi sada</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default Hero;

