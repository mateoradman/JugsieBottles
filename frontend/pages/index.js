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
        className="p-5 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
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
