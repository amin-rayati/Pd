"use client";
import { useState } from "react";

import MainBanner from "@/components/Dashboard-components/MainBanner";
import ReportCardModal from "@/components/Dashboard-components/ReportCardModal";
import DashSearchBar from "@/components/Dashboard-components/DashSearchBar";

import { SlCalender } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { HiHashtag } from "react-icons/hi2";

const page = () => {
  const [isModalReportOpen, setIsModalReportOpen] = useState(false);
  const openModalReport = () => setIsModalReportOpen(true);
  const closeModalReport = () => setIsModalReportOpen(false);

  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          دوره‌های گذرانده شده
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        <DashSearchBar page={"UserCourse"} />

        <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button
            onClick={openModalReport}
            className="order-3 lg:order-none bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[170px]"
          >
            مشاهده کارنامه
          </button>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p className="text-[13px]">14/20</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <HiHashtag color="white" size={20} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p className="text-[13px]">1،450،000 تومان</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <MdOutlineDiscount color="white" size={20} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p className="text-[13px]">1403/05/21 - 1403/06/21</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={20} />
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p className="text-[13px]" style={{ direction: "rtl" }}>
                استاد حسین علی یاری
              </p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <FaRegUser color="white" size={20} />
              </div>
            </div>
          </div>

          <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
            <div className="flex items-center gap-2 order-4 md:order-1 ">
              <p className="text-[13px]">14/20</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <HiHashtag color="white" size={20} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-3  md:order-2">
              <p className="text-[13px]">1،450،000 تومان</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <MdOutlineDiscount color="white" size={20} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-2  md:order-3">
              <p className="text-[13px]">1403/05/21 - 1403/06/21</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={20} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-1  md:order-4">
              <p className="text-[13px]" style={{ direction: "rtl" }}>
                استاد حسین علی یاری
              </p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <FaRegUser color="white" size={20} />
              </div>
            </div>
          </div>

          <div className="flex gap-1 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">آموزش زبان انگلیسی مقدماتی</p>
            <p className="text-black font-bold">-1</p>
          </div>
        </div>

        <ReportCardModal
          isModalReportOpen={isModalReportOpen}
          closeModalReport={closeModalReport}
        />
      </div>
    </div>
  );
};

export default page;
