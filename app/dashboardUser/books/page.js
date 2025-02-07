"use client";
import { useState } from "react";
import Image from "next/image";
import MainBanner from "@/components/Dashboard-components/MainBanner";
import FactorModal from "@/components/Dashboard-components/FactorModal";
import DashSearchBar from "@/components/Dashboard-components/DashSearchBar";

import { SlCalender } from "react-icons/sl";
import { MdOutlineDiscount } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import shop1 from "@/public/img/Shop/shop1.png";
import shop2 from "@/public/img/Shop/shop2.png";
import shop3 from "@/public/img/Shop/shop3.png";

const page = () => {
  const [activeTab, setActiveTab] = useState("tab2");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          کتاب‌های خریداری شده
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        <div className="border-b border-gray-200 relative my-10 md:w-[70%] mx-auto">
          <div className="flex justify-between relative">
            <button
              className={`flex-1 p-1 py-4 rounded-t-lg relative z-10 transition-colors duration-300 ${
                activeTab === "tab1"
                  ? "text-[#0166FF] text-[12px] md:text-[18px]"
                  : "text-gray-500 hover:text-gray-600 text-[12px] md:text-[18px]"
              }`}
              onClick={() => setActiveTab("tab1")}
            >
              لغو شده
            </button>

            <button
              className={`flex-1 p-1 py-4 rounded-t-lg relative z-10 transition-colors duration-300 ${
                activeTab === "tab2"
                  ? "text-[#0166FF] text-[12px] md:text-[18px]"
                  : "text-gray-500 hover:text-gray-600 text-[12px] md:text-[18px]"
              }`}
              onClick={() => setActiveTab("tab2")}
            >
              ارسال شده
            </button>

            <button
              className={`flex-1 p-1 py-4 rounded-t-lg relative z-10 transition-colors duration-300 ${
                activeTab === "tab3"
                  ? "text-[#0166FF] text-[12px] md:text-[18px]"
                  : "text-gray-500 hover:text-gray-600 text-[12px] md:text-[18px]"
              }`}
              onClick={() => setActiveTab("tab3")}
            >
              در حال ارسال
            </button>
          </div>

          <div
            className="absolute bottom-0 left-0 h-[2px] bg-[#0166FF] transition-all duration-300"
            style={{
              width: "33%", // Keep the width of the border under each tab (33% for 3 tabs)
              left:
                activeTab === "tab1"
                  ? "0%"
                  : activeTab === "tab2"
                  ? "33%"
                  : "66%", // This ensures the border is under the active tab
            }}
          />
        </div>

        <DashSearchBar page={"books"} />

        {activeTab === "tab1" && (
          <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
            <button
              onClick={openModal}
              className="order-3 lg:order-none bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[170px]"
            >
              مشاهده فاکتور
            </button>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2 ">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  4 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
              <div className="flex items-center gap-2 order-2  sm:order-3">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-3  sm:order-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-1  sm:order-4">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  4 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
              <p className="text-black font-bold" style={{ direction: "rtl" }}>
                سفارش 124 (Grammer In Use, Family & Friends و ...)
              </p>

              <Image
                src={shop1}
                alt="shop1"
                className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
              />
            </div>
          </div>
        )}

        {activeTab === "tab2" && (
          <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
            <button
              onClick={openModal}
              className="order-3 lg:order-none bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[170px]"
            >
              مشاهده فاکتور
            </button>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2 ">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  4 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
              <div className="flex items-center gap-2 order-2  sm:order-3">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-3  sm:order-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-1  sm:order-4">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  4 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
              <p className="text-black font-bold" style={{ direction: "rtl" }}>
                سفارش 124 (Grammer In Use, Family & Friends و ...)
              </p>

              <Image
                src={shop2}
                alt="shop2"
                className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
              />
            </div>
          </div>
        )}

        {activeTab === "tab3" && (
          <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
            <button
              onClick={openModal}
              className="order-3 lg:order-none bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362] my-2 w-[170px]"
            >
              مشاهده فاکتور
            </button>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2 ">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="flex items-center gap-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  3 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
              <div className="flex items-center gap-2 order-2  sm:order-3">
                <p className="text-[13px]">1403/06/21</p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <SlCalender color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-3  sm:order-2">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  1،450،000 تومان
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <MdOutlineDiscount color="white" size={20} />
                </div>
              </div>

              <div className="flex items-center gap-2 order-1  sm:order-4">
                <p className="text-[13px]" style={{ direction: "rtl" }}>
                  3 کتاب
                </p>
                <div className="bg-[#0166ff] p-1 rounded-[5px]">
                  <CgNotes color="white" size={20} />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
              <p className="text-black font-bold" style={{ direction: "rtl" }}>
                سفارش 124 (Grammer In Use, Family & Friends و ...)
              </p>

              <Image
                src={shop3}
                alt="shop3"
                className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
              />
            </div>
          </div>
        )}

        <FactorModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default page;
