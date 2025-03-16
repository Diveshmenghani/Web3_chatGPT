import Head from "next/head";
import "../styles/globals.css";
import { StateContextProvider } from "../context/index";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="assets/images/favicon.png"/>
        <link href="assets/js/bootstrap.bundle.min.js" rel="stylesheet"/>
      </Head>
      <StateContextProvider>
        <Component {...pageProps} />
      </StateContextProvider>

      <script src="assets/js/bootstrap.bundle.min.js"></script>
      <script src="assets/js/swiper-bundle.min.js"></script>
      <script src="assets/js/aos.js"></script>
      <script src="assets/js/custom-aos.js"></script>
      <script src="assets/js/home-animation.js"></script>
      <script src="assets/js/header_sticky.js"></script>
      <script src="assets/js/script.js"></script>
    </>
  );
}