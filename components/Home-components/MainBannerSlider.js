"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/swiper-bundle.css";
import banner from "@/public/img/Home/banner.png";
import bannerLogo from "@/public/img/Home/bannerLogo.svg";

const MainBannerSlider = () => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50} // Space between slides
        slidesPerView={1} // Show 1 slide at a time
        loop={true} // Loop through slides
        autoplay={{ delay: 3000 }} // Autoplay after 3 seconds
        pagination={{ clickable: true }} // Dots enabled
        navigation={false} // No next/prev buttons
      >
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner}
              alt="Banner1"
              className="w-full h-[500px] object-cover"
            />
            <div className="flex flex-col absolute bottom-[150px] right-[40px]  sm:right-[80px]  md:right-[80px]  lg:right-[140px]  items-end ">
              <Image src={bannerLogo} alt="bannerLogo" width={90} />
              <p className="text-[22px] sm:text-[35px] md:text-[35px] lg:text-[35px] text-[#0166FF] font-bold mt-5 mb-1">
                پویندگان دانش
              </p>
              <p className="text-[19px] sm:text-[32px] md:text-[32px] lg:text-[32px] text-black font-bold my-1">
                موسسه زبان های خارجه{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <Image
              src={banner}
              alt="Banner1"
              className="w-full h-[500px] object-cover"
            />
            <div className="flex flex-col absolute bottom-[150px] right-[40px]  sm:right-[80px]  md:right-[80px]  lg:right-[140px]  items-end ">
              <Image src={bannerLogo} alt="bannerLogo" width={90} />
              <p className="text-[22px] sm:text-[35px] md:text-[35px] lg:text-[35px] text-[#0166FF] font-bold mt-5 mb-1">
                پویندگان دانش
              </p>
              <p className="text-[19px] sm:text-[32px] md:text-[32px] lg:text-[32px] text-black font-bold my-1">
                موسسه زبان های خارجه{" "}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MainBannerSlider;
