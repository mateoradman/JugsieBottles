import Script from 'next/script';
import Head from 'next/head';
import Hero from "../components/homePage/hero";
import BottleDisplay from "../components/homePage/bottlePhotos/BottleDisplay";
import MarqueeRunningText from "../components/homePage/runningText";
import ThreeSixtyCard from "../components/homePage/cards/360Card";
import HomePageCard from "../components/homePage/cards/HomePageCard";
import CardPhotoOne from "../public/ContentPhotos/IMG_9820.JPG"

export default function Home() {
  return (
    <>
      <Head>
        <title>Jugsie Bottles</title>
      </Head>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <div
        className="relative min-h-screen min-w-full overflow-hidden">
        <Hero/>
        <MarqueeRunningText/>
        <BottleDisplay/>

        <div
          className="p-5 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          <HomePageCard
            cardImageSrc={CardPhotoOne}
            cardTitle={"Some Title"}
            cardBody={"lorem ipsum something else here"}
          />
          <ThreeSixtyCard/>
        </div>
      </div>
    </>
  )
}
