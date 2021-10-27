import Script from 'next/script';
import Head from 'next/head';

import Navbar from "../components/navigation";
import Hero from "../components/hero";
import BottleDisplay from "../components/bottlePhotos/BottleDisplay";
import MarqueeRunningText from "../components/runningText";
import ThreeSixtyCard from "../components/cards/360Card";
import HomePageCard from "../components/cards/HomePageCard";
import CardPhotoOne from "../public/ContentPhotos/IMG_9820.JPG"
import Footer from "../components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Jugsie Bottles</title>
      </Head>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <div
        className="relative bg-white min-h-screen min-w-full overflow-hidden">
        <Navbar/>
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

        <Footer/>
      </div>
    </>
  )
}
