import { useRef, useEffect, useState } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/modules/base/Navbar/Navbar";
import Footer from "@/components/modules/base/Footer/Footer";

export default function App({ Component, pageProps }) {

  const footerRef = useRef()
  const [isClient, setIsClient] = useState(false)
  const [prevWidth, setPrevWidth] = useState(null);

  useEffect(() => {

    setPrevWidth(window.innerWidth)

    document.querySelector('.app__footer').style.height = `${footerRef.current.clientHeight + 10}px`

  }, [])

  useEffect(() => {

    setIsClient(true)

    const resizeFooterHandler = event => {
      const newWidth = event.srcElement.innerWidth;
      const appFooter = document.querySelector('.app__footer')

      if (newWidth !== prevWidth) {
        appFooter.style.height = `${footerRef.current.clientHeight + 10}px`
        setPrevWidth(newWidth);
      }
    }

    const scrollFooterHandler = e => {
      const scrollPosition = window.innerHeight + window.scrollY
      const appHeight = document.querySelector('.app__main').offsetHeight

      if (scrollPosition >= appHeight) {
        footerRef.current.classList.add('footer-show')
      } else {
        footerRef.current.classList.remove('footer-show')
      }

    }

    window.addEventListener('resize', resizeFooterHandler)
    window.addEventListener('scroll', scrollFooterHandler)

    return () => {
      window.removeEventListener('resize', resizeFooterHandler)
      window.removeEventListener('scroll', scrollFooterHandler)
    }

  }, [isClient, isClient && document.documentElement.clientWidth])


  return (
    <>
      <div className="app__main">
        <Navbar />
        <Component {...pageProps} />
      </div>
      <div className="app__footer"></div>
      <Footer ref={footerRef} />
    </>
  )
}
