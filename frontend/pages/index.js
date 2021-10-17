import Script from 'next/script';

import Navbar from "../components/navigation";
import Hero from "../components/hero";
import ThreeSixtyDisplay from "../components/bottlePhotos/360viewer";
import BottleDisplay from "../components/bottlePhotos/BottleDisplay";
import RunningText from "../components/runningText";


export default function Home() {
  return (
    <>
      <title>Jugsie Bottles</title>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <div className="relative bg-white h-full w-full overflow-hidden">
        <Navbar/>
        <Hero/>
        <RunningText/>
        <BottleDisplay/>
        <ThreeSixtyDisplay/>
      </div>
    </>
  )
}
