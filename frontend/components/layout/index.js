import Head from "next/head";
import Script from "next/script";
import { CartProvider } from "../../context/Context";
import Footer from "../footer";
import Navbar from "../navigation";

export default function Layout({ children }) {
  return (
    <div className="mx-auto bg-white w-full h-max min-h-full max-w-screen-2xl">
      <Head>
        <title>Jugsie Bottles</title>
        <link rel="icon" type="image/svg+xml" href="/Favicon/favicon.svg" />
        <link rel="icon" type="image/png" href="/Favicon/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous" />
      </Head>
      <Script src="https://scripts.sirv.com/sirv.js" />
      <Script type="text/javascript"
        src="https://2pay-js.2checkout.com/v1/2pay.js" />
      <CartProvider>
        <Navbar />
        <main>{ children }</main>
      </CartProvider>
      <Footer />
    </div>
  )
}