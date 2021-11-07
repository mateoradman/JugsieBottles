import Image from "next/image";

const bottles = [
  {bottle: "/bottles/Green.png", bottleName: "Green"},
  {bottle: "/bottles/Black.PNG", bottleName: "Black"},
  {bottle: "/bottles/White.PNG", bottleName: "White"},
  {bottle: "/bottles/Blue.PNG", bottleName: "Blue"},
  {bottle: "/bottles/Pink.PNG", bottleName: "Hot Pink"},
  {bottle: "/bottles/Lilac.PNG", bottleName: "Lilac"},
  {bottle: "/bottles/Turquoise.png", bottleName: "Turquoise"},
]

const BottleDisplay = () => {
  return (
    <div className="bg-transparent md:pt-10 md:pb-20">
      <div className="w-full items-center p-4 carousel space-x-10">
        {bottles.map((item) => (
          <div key={item.bottleName}
               className="carousel-item w-2/7 h-60 md:h-120 relative">
            <Image
              src={item.bottle}
              alt={item.bottleName + " Jugsie Bottle"}
              objectFit={"contain"}
              layout={"fill"}
              priority
              className={"bg-transparent"}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BottleDisplay;
