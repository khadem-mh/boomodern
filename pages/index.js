import React, { useRef, useState } from 'react';
import Header from "@/components/templates/base/Header/Header";
import DescriptionBox from "@/components/modules/base/DescriptionBox/DescriptionBox";
import WorkSample from "@/components/templates/base/WorkSample/workSample";
import Customer from "@/components/templates/base/Customer/Customer"
import LatestContent from "@/components/templates/base/LatestContent/LatestContent";
import Advertisment from "@/components/templates/base/advertisement/Advertisment";
//Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Asset
import customerInfos from "@/data/customers.json"

export default function Home() {

  const progressCircle = useRef(null)
  const progressContent = useRef(null)

  const onAutoplayTimeLeft = (s, time, progress) => {

    progressCircle.current.style.setProperty('--progress', 1 - progress)
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`

  }

  return (
    <section className="index__main">

      <section className="index__header">
        <Header />
      </section>

      <section className="index__boxes">
        <DescriptionBox title={"High performance"} text={"Improve your site's performance and get higher rankings in Google."} srcVideo={"videos/func1.mp4"} />
        <DescriptionBox title={"The liveliest editor"} text={"No need for coding skills to customize and create ideal sites with Boo."} srcVideo={"videos/func2.mp4"} />
        <DescriptionBox title={"Unique elements"} text={"Intense attention to detail is at the core of Bow's unique design."} srcVideo={"videos/func3.mp4"} />
      </section>

      <section>
        <WorkSample />
      </section>

      <section className="index-customers">

        <div className="index-customers__subject">
          <h2 className="index-customers__title">Customer reviews</h2>
        </div>

        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >

          {
            customerInfos.map((item, index) => (
              <SwiperSlide key={index}>
                <Customer {...item} />
              </SwiperSlide>
            ))
          }

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>

      </section>

      <section>
        <LatestContent />
      </section>

      <section>
        <Advertisment />
      </section>

    </section>
  );
}
