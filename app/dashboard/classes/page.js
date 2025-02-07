import Link from "next/link";
import MainBanner from "@/components/Dashboard-components/MainBanner";
import { LuClock4 } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { PiStudentLight } from "react-icons/pi";

const page = () => {
  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          کلاس‌های فعال
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <Link
            href="/dashboard/classes/list"
            className="order-3 lg:order-none"
          >
            <button className="bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[190px]">
              لیست زبان آموزان
            </button>
          </Link>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p>14:30 - 16:30</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <LuClock4 color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p>شنبه، دوشنبه، چهار شنبه</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p style={{ direction: "rtl" }}> 25 زبان آموز</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiStudentLight color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
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
              <p style={{ direction: "rtl" }}> 25 زبان آموز</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiStudentLight color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="flex gap-1 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">آموزش زبان انگلیسی مقدماتی</p>
            <p className="text-black font-bold">-1</p>
          </div>
        </div>

        <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <Link
            href="/dashboard/classes/list"
            className="order-3 lg:order-none"
          >
            <button className="bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[190px]">
              لیست زبان آموزان
            </button>
          </Link>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p>14:30 - 16:30</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <LuClock4 color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p>شنبه، دوشنبه، چهار شنبه</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p style={{ direction: "rtl" }}> 25 زبان آموز</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiStudentLight color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
            <div className="flex items-center gap-2">
              <p>14:30 - 16:30</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <LuClock4 color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p>شنبه، دوشنبه، چهار شنبه</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p style={{ direction: "rtl" }}> 25 زبان آموز</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiStudentLight color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="flex gap-1 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">آموزش زبان انگلیسی پیشرفته</p>
            <p className="text-black font-bold">-1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
