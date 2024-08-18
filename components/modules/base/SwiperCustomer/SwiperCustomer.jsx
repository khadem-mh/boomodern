import React, { useRef, useState } from 'react';
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
import Customer from "@/components/templates/base/Customer/Customer"

const SwiperCustomer = () => {

    const progressCircle = useRef(null)
    const progressContent = useRef(null)

    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress)
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`
    }


    return (
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
    )
}

export default SwiperCustomer