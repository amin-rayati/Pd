"use client";
import Image from "next/image";
import { CgNotes } from "react-icons/cg";
import Slider from "@/components/SingleProduct-component/Slider";
import Comment from "@/components/SingleProduct-component/Comments";
import SimillarBooks from "@/components/SingleProduct-component/SimillarBooks";

import delivery from "@/public/img/Shop/delivery.png";
import quality from "@/public/img/Shop/quality.png";
import book from "@/public/img/Shop/book.png";

const page = () => {
  return (
    <div className="text-center lg:w-[95%] my-10 mx-5 lg:mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* Left Side Content */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-8 order-2 lg:order-1">
          <div className="grid grid-cols-12 gap-2">
            {/* Features Boxes */}
            <div className="col-span-12 sm:col-span-12 md:col-span-3 lg:col-span-2 order-2 md:order-1 flex flex-col sm:flex-row md:flex-col justify-between gap-2">
              {/* Delivery Box */}
              <div className="bg-white rounded-[10px] py-5 px-3 w-[100%]">
                <Image src={delivery} alt="delivery" className="m-auto" />
                <p className="mt-2">ارسال سریع</p>
              </div>

              {/* Quality Box */}
              <div className="bg-white rounded-[10px] py-5 px-3 w-[100%]">
                <Image src={quality} alt="quality" className="m-auto" />
                <p className="mt-2">کیفیت مناسب</p>
              </div>

              {/* Book Box */}
              <div className="bg-white rounded-[10px] py-5 px-3 w-[100%]">
                <Image src={book} alt="book" className="m-auto" />
                <p className="mt-2">کتاب معتبر</p>
              </div>
            </div>

            {/* Text Section (Book Details) */}
            <div className="col-span-12 sm:col-span-12 md:col-span-9 lg:col-span-10 order-1 md:order-2">
              <div className="flex flex-wrap justify-end Mx:flex-nowrap Mx:justify-between items-center">
                {/* English Training Header */}
                <p className="flex items-center gap-2 order-2 Mx:order-1 my-2">
                  آموزش انگلیسی
                  <CgNotes color="#0166FF" />
                </p>

                {/* Book Title */}
                <p
                  className="flex items-center gap-2 font-bold text-[18px] order-1 Mx:order-2 my-2"
                  style={{ direction: "rtl" }}
                >
                  کتاب آموزش زبان انگلیسی Grammer In Use
                </p>
              </div>

              {/* Description Section */}
              <div className="my-10">
                <p className="text-[#0166FF] text-[17px] text-right font-bold">
                  توضیحات
                </p>
                <p
                  className="text-gray-500 text-justify mt-2"
                  style={{ direction: "rtl" }}
                >
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                  تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای
                  کاربردی می باشد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم
                  از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون
                  بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                  شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
                  ابزارهای کاربردی می باشد.
                </p>
              </div>

              {/* Price and Add to Cart Section */}
              <div className="relative flex text-center justify-between bg-white rounded-[10px] w-[100%] lg:w-[65%] m-auto px-5 py-3">
                {/* Discount Badge */}
                <div className="absolute top-[-20px] right-[-20px] bg-[#F5C362] text-black text-sm rounded-full w-[40px] h-[40px] flex items-center justify-center shadow-md">
                  10%
                </div>

                {/* Add to Cart Button */}
                <button className="text-white text-center px-4 py-3 rounded-[10px] bg-[#0166ff]">
                  افزودن به سبد خرید
                </button>

                {/* Price Section */}
                <div>
                  <p
                    className="text-black text-right"
                    style={{ direction: "rtl" }}
                  >
                    5،250،000 تومان
                  </p>
                  <p className="text-gray-500 text-right line-through">
                    5،580،000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Content*/}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-1 lg:order-2 bg-white p-5 rounded-[20px]">
          <Slider />
        </div>
      </div>
      <Comment />
      <SimillarBooks />
    </div>
  );
};

export default page;
