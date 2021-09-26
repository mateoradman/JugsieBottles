import {Navbar} from "../components/navigation/Navbar";
import Hero from "../components/hero/Hero";
import ThreeSixtyDisplay from "../components/bottlePhotos/360viewer";
import Script from 'next/script';
import BottleDisplay from "../components/bottlePhotos/BottleDisplay";

export default function Home() {
  return (
    <>
      <title>Jugsie Bottles</title>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <div className="relative bg-white overflow-hidden">
        <div
          className="relative pb-8 bg-white max-w-7xl mx-auto">
          <Navbar/>
        </div>
        <Hero/>
        <BottleDisplay/>
        <ThreeSixtyDisplay/>
      </div>
    </>
  )
}
