import React from 'react';
import Green from '../../public/BottlePhotos/Green.png';
import Blue from '../../public/BottlePhotos/Blue.PNG';
import White from '../../public/BottlePhotos/White.PNG';
import Turquoise from '../../public/BottlePhotos/Turquoise.png';
import Pink from '../../public/BottlePhotos/Pink.PNG';
import Black from '../../public/BottlePhotos/Black.PNG';
import Lilac from '../../public/BottlePhotos/Lilac.PNG';
import Image from "next/image";

const bottles = [
  {bottle: Green, bottleName: "Green"},
  {bottle: Black, bottleName: "Black"},
  {bottle: White, bottleName: "White"},
  {bottle: Blue, bottleName: "Blue"},
  {bottle: Pink, bottleName: "Hot Pink"},
  {bottle: Lilac, bottleName: "Lilac"},
  {bottle: Turquoise, bottleName: "Turquoise"},
]

const BottleDisplay = () => {
  return (
    <div className="mb-10 bg-blue-100 py-15 md:py-20">
      <div className="w-full items-center p-4 space-x-1 carousel">
        {bottles.map((item) => (
          <div key={item.bottleName}
               className="carousel-item max-h-72 md:max-h-96 w-1/3">
            <Image
              src={item.bottle}
              alt={item.bottleName + " Jugsie Bottle"}
              objectFit={"contain"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleDisplay;