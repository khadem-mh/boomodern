import Header from "@/components/templates/base/Header/Header";
import DescriptionBox from "@/components/modules/base/DescriptionBox/DescriptionBox";
import WorkSample from "@/components/templates/base/WorkSample/workSample";
import Customer from "@/components/templates/base/Customer/Customer"
import LatestContent from "@/components/templates/base/LatestContent/LatestContent";
import Advertisment from "@/components/templates/base/advertisement/Advertisment";
//Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
// Asset
import customerInfos from "@/data/customers.json"

export default function Home() {
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

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            customerInfos.map((item, index) => (
              <SwiperSlide key={index} className="index-customers__SwiperSlide">
                <Customer {...item} />
              </SwiperSlide>
            ))
          }
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
