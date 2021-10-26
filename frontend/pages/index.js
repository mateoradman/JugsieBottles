import Script from 'next/script';
import Head from 'next/head';

import Navbar from "../components/navigation";
import Hero from "../components/hero";
import ThreeSixtyDisplay from "../components/bottlePhotos/360viewer";
import BottleDisplay from "../components/bottlePhotos/BottleDisplay";
import MarqueeRunningText from "../components/runningText";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jugsie Bottles</title>
      </Head>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <div className="relative bg-white h-full w-full overflow-hidden">
        <Navbar/>
        <Hero/>
        <MarqueeRunningText/>
        <BottleDisplay/>
        <ThreeSixtyDisplay/>
      </div>
    </>
  )
}
