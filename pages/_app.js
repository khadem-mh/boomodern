import { useRef, useEffect, useState, useMemo } from "react";
import "@/styles/globals.css";
import Navbar from "@/components/modules/base/Navbar/Navbar";
import Footer from "@/components/modules/base/Footer/Footer";

export default function App({ Component, pageProps }) {

  const footerRef = useRef()
  const [isClient, setIsClient] = useState(false)
  const [prevWidth, setPrevWidth] = useState(null);

  useEffect(() => {
    setIsClient(true)
    setPrevWidth(window.innerWidth)
    document.querySelector('.app__footer').style.height = `${footerRef.current.clientHeight + 10}px`
  }, [])

  useEffect(() => {

    const scrollFooterHandler = e => {
      const scrollPosition = window.innerHeight + window.scrollY
      const appHeight = document.querySelector('.app__main').offsetHeight

      scrollPosition >= appHeight
        ?
        footerRef.current.classList.add('footer-show')
        :
        footerRef.current.classList.remove('footer-show')
    }

    window.addEventListener('scroll', scrollFooterHandler)

    return () => window.removeEventListener('scroll', scrollFooterHandler)

  }, [isClient])

  useEffect(() => {

    const resizeFooterHandler = event => {
      const newWidth = event.srcElement.innerWidth;
      const appFooter = document.querySelector('.app__footer')

      if (newWidth !== prevWidth) {
        appFooter.style.height = `${footerRef.current.clientHeight + 10}px`
        setPrevWidth(newWidth);
      }
    }

    window.addEventListener('resize', resizeFooterHandler)

    return () => window.removeEventListener('resize', resizeFooterHandler)

  }, [isClient , prevWidth])

  const memoizedMainContent = useMemo(() => (

    <div className="app__main">
      <Navbar />
      <Component {...pageProps} />
    </div>

  ), [Component, pageProps])

  return (
    <>
      {memoizedMainContent}
      <div className="app__footer"></div>
      <Footer ref={footerRef} />
    </>
  )
}
