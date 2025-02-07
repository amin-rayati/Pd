import Image from "next/image";
import Link from "next/link";
import MainBanner from "@/components/Dashboard-components/MainBanner";

import Prof from "@/public/img/Dashboard/prof.jpg";

import courseIcon from "@/public/img/Dashboard/course.png";
import bookIcon from "@/public/img/Dashboard/book.png";
import moneyIcon from "@/public/img/Dashboard/money.png";

import { LuClock4 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa6";

const page = () => {
  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <div className="flex flex-col md:flex-row items-end md:items-center justify-between">
          <div className="flex-grow order-2 md:order-1 w-full">
            {/* userinfo */}
            <div className="flex flex-col md:flex-row justify-between">
              {/* logoutBtn */}
              <div className="hidden md:block order-2 md:order-1 mt-10 text-left md:mr-auto">
                <button className="border-2 border-[#E35151] px-3 md:px-6 py-3 text-[12px] md:text-[15px] rounded-[15px] text-[#E35151]">
                  خروج از حساب کاربری
                </button>
              </div>

              {/* Text content */}
              <div className="order-1 md:order-2 my-2 text-right">
                <h1 className="font-bold text-[20px] md:text-[30px]">
                  مرتضی شیرین زاده
                </h1>
                <div className="flex space-x-2 items-center justify-end my-5">
                  <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
                  <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
                </div>
              </div>
            </div>

            {/* whiteBox */}
            <div className="flex flex-col items-end md:flex-row md:items-center justify-between bg-white rounded-[20px] p-3 mb-5 w-full max-w-full">
              <div className="hidden md:block">
                <div className="flex items-center gap-2 ">
                  <p className="text-[12px]">14:30 - 16:30</p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <LuClock4 color="white" size={25} />
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <p className="text-[12px]">شنبه، دوشنبه، چهار شنبه</p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <SlCalender color="white" size={25} />
                  </div>
                </div>
              </div>

              <div className="hidden md:block">
                <div className="flex items-center gap-2">
                  <p className="text-[12px]" style={{ direction: "rtl" }}>
                    استاد حسین علی یاری
                  </p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <FaRegUser color="white" size={25} />
                  </div>
                </div>
              </div>

              <div className="block md:hidden flex flex-col items-end sm:flex-row sm:items-center my-2 gap-5 order-2">
                <div className="flex items-center gap-2 order-3 sm:order-1">
                  <p>14:30 - 16:30</p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <LuClock4 color="white" size={25} />
                  </div>
                </div>

                <div className="flex items-center gap-2 order-2 sm:order-2">
                  <p>شنبه، دوشنبه، چهار شنبه</p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <SlCalender color="white" size={25} />
                  </div>
                </div>

                <div className="flex items-center gap-2 order-1 sm:order-3">
                  <p style={{ direction: "rtl" }}>استاد حسین علی یاری</p>
                  <div className="bg-[#0166ff] p-1 rounded-[5px]">
                    <FaRegUser color="white" size={25} />
                  </div>
                </div>
              </div>

              <div className="flex gap-1 my-2 order-1 lg:order-none">
                <p className="text-black font-bold text-[15px]">
                  آموزش زبان انگلیسی مقدماتی
                </p>
                <p
                  className="text-gray-500 text-[12px]"
                  style={{ direction: "rtl" }}
                >
                  دوره فعلی:
                </p>
              </div>
            </div>

            {/* logoutBtn */}
            <div className="block md:hidden order-2 md:order-1  text-left md:mr-auto">
              <button className="border-2 border-[#E35151] px-3 md:px-6 py-3 text-[12px] md:text-[15px] rounded-[15px] text-[#E35151]">
                خروج از حساب کاربری
              </button>
            </div>
          </div>

          {/* image */}
          <div className="flex order-1 md:order-2">
            <div className="ml-5">
              <Image
                src={Prof}
                alt="Prof"
                className="w-[100px] h-[100px] md:w-[160px] md:h-[140px] lg:w-[180px] lg:h-[160px] rounded-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full bg-[#0166ff54] mt-10"></div>

        <div className="grid grid-cols-12 my-10 gap-4">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-3  lg:order-1">
            <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
              <FaChevronLeft color="#0166ff" size={25} />

              <div className="flex items-center space-x-5">
                <div>
                  <p className="text-black text-right text-[20px] my-2">
                    تسویه شهریه
                  </p>
                  <p
                    className="text-gray-400 text-right text-[17px] my-2"
                    style={{ direction: "rtl" }}
                  >
                    250،000 تومان
                  </p>
                </div>
                <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                  <Image src={moneyIcon} alt="moneyIcon" />
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-2  lg:order-2">
            <Link href="/dashboardUser/books">
              <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
                <FaChevronLeft color="#0166ff" size={25} />

                <div className="flex items-center space-x-5">
                  <div>
                    <p className="text-black text-right text-[20px] my-2">
                      کتاب‌های خریداری شده
                    </p>
                    <p
                      className="text-gray-400 text-right text-[17px] my-2"
                      style={{ direction: "rtl" }}
                    >
                      125 کتاب
                    </p>
                  </div>
                  <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                    <Image src={bookIcon} alt="bookIcon" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-1  lg:order-3">
            <Link href="/dashboardUser/courses">
              <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
                <FaChevronLeft color="#0166ff" size={25} />

                <div className="flex items-center space-x-5">
                  <div>
                    <p className="text-black text-right text-[20px] my-2">
                      دوره‌های گذرانده شده
                    </p>
                    <p
                      className="text-gray-400 text-right text-[17px] my-2"
                      style={{ direction: "rtl" }}
                    >
                      25 دوره
                    </p>
                  </div>
                  <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                    <Image src={courseIcon} alt="courseIcon" />
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
