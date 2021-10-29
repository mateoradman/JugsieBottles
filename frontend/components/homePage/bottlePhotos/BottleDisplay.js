import Image from "next/image";

const bottles = [
  {bottle: "/BottlePhotos/Green.png", bottleName: "Green"},
  {bottle: "/BottlePhotos/Black.PNG", bottleName: "Black"},
  {bottle: "/BottlePhotos/White.PNG", bottleName: "White"},
  {bottle: "/BottlePhotos/Blue.PNG", bottleName: "Blue"},
  {bottle: "/BottlePhotos/Pink.PNG", bottleName: "Hot Pink"},
  {bottle: "/BottlePhotos/Lilac.PNG", bottleName: "Lilac"},
  {bottle: "/BottlePhotos/Turquoise.png", bottleName: "Turquoise"},
]

const BottleDisplay = () => {
  return (
    <div className="bg-transparent py-15 md:py-20">
      <div className="w-full items-center p-4 space-x-1 carousel">
        {bottles.map((item) => (
          <div key={item.bottleName}
               className="carousel-item w-2/7 h-60 md:h-auto md:max-h-120 relative">
            <Image
              src={item.bottle}
              alt={item.bottleName + " Jugsie Bottle"}
              objectFit={"contain"}
              layout={"fill"}
              priority={"true"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleDisplay;
