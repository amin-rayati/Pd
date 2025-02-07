import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import shop1 from "@/public/img/Shop/shop1.png";
import shop2 from "@/public/img/Shop/shop2.png";
import shop3 from "@/public/img/Shop/shop3.png";
import shop4 from "@/public/img/Shop/shop4.png";
const Slider = () => {
  return (
    <div className="slider-container">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
      >
        <SwiperSlide>
          <Image
            src={shop1}
            alt="shop1"
            className="w-[200px] h-[200px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop2}
            alt="shop2"
            className="w-[200px] h-[200px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop3}
            alt="shop3"
            className="w-[200px] h-[200px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop4}
            alt="shop4"
            className="w-[200px] h-[200px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop2}
            alt="shop2"
            className="w-[200px] h-[200px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>
      </Swiper>

      <Swiper
        spaceBetween={5}
        slidesPerView={5}
        freeMode
        watchSlidesProgress
        className="mt-4"
      >
        <SwiperSlide>
          <Image
            src={shop1}
            alt="shop1"
            className="w-[100px] h-[100px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop2}
            alt="shop2"
            className="w-[100px] h-[100px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop3}
            alt="shop3"
            className="w-[100px] h-[100px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop4}
            alt="shop4"
            className="w-[100px] h-[100px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src={shop2}
            alt="shop2"
            className="w-[100px] h-[100px] object-cover mx-auto" // Adjust size here
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
