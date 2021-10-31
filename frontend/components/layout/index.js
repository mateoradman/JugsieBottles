import Navbar from "../navigation";
import Footer from "../footer";
import Head from "next/head";
import Script from "next/script";

export default function Layout({children}) {
  return (
    <div className="bg-white min-h-full">
      <Head>
        <title>Jugsie Bottles</title>
        <link rel="icon" type="image/svg+xml" href="/Favicon/favicon.svg"/>
        <link rel="icon" type="image/png" href="/Favicon/favicon.png"/>
      </Head>
      <Script src="https://scripts.sirv.com/sirv.js"/>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </div>
  )
}