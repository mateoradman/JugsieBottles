import Hero from "../components/homePage/hero";
import BottleDisplay from "../components/homePage/bottlePhotos/BottleDisplay";
import MarqueeRunningText from "../components/homePage/runningText";
import ThreeSixtyCard from "../components/homePage/cards/360Card";
import HomePageCard from "../components/homePage/cards/HomePageCard";

export default function Home() {
  return (
    <div
      className="relative min-h-screen min-w-full overflow-hidden">
      <Hero/>
      <MarqueeRunningText/>
      <BottleDisplay/>

      <div
        className="pb-16 px-8 pt-8 grid grid-cols-1 gap-y-10 md:px-5 md:pt-2 md:grid-cols-2 md:gap-x-16">
        <HomePageCard
          cardImageSrc={"/ContentPhotos/IMG_9820.JPG"}
          cardTitle={"Some Title"}
          cardBody={"lorem ipsum something else here"}
        />
        <ThreeSixtyCard/>
      </div>
    </div>
  )
}
