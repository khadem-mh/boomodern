import "@/styles/globals.css";
import Navbar from "@/components/modules/base/Navbar/Navbar";
import Footer from "@/components/modules/base/Footer/Footer";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
