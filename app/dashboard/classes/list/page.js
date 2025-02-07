"use client";
import { useState } from "react";
import Image from "next/image";

import MainBanner from "@/components/Dashboard-components/MainBanner";
import prof from "@/public/img/Dashboard/prof.jpg";
import NummberModal from "@/components/Dashboard-components/NummberModal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          لیست زبان آموزان
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        {/* curentCourse */}
        <div className="flex flex-col items-end lg:flex-row lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button className=" rounded-[15px] py-2 px-4 border-[2px] border-[#EA8C3A] text-[#EA8C3A] my-2 order-4 lg:order-none w-[170px]">
            در حال گذراندن دوره
          </button>

          <div className="flex items-center gap-2 order-3 lg:order-none">
            <button
              onClick={openModal}
              className="bg-[#0166FF] rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-white my-2 order-2 lg:order-none w-[170px]"
            >
              وارد کردن نمره
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره پایان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 order-2 lg:order-none">
            <button
              onClick={openModal}
              className="bg-[#0166FF] rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-white my-2 order-2 lg:order-none w-[170px]"
            >
              وارد کردن نمره
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره میان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">مهدی کریمی</p>

            <Image
              src={prof}
              alt="prof"
              className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
            />
          </div>
        </div>

        {/* passedCourse */}
        <div className="flex flex-col items-end lg:flex-row lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button className=" rounded-[15px] py-2 px-4 border-[2px] border-[#348334] text-[#348334] my-2 order-4 lg:order-none w-[170px]">
            قبول شده
          </button>

          <div className="flex items-center gap-2 order-3 lg:order-none">
            <button className="rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-[#0166ff] my-2 order-2 lg:order-none w-[170px]">
              18
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره پایان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 order-2 lg:order-none">
            <button className="rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-[#0166ff] my-2 order-2 lg:order-none w-[170px]">
              18
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره میان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">مهدی کریمی</p>

            <Image
              src={prof}
              alt="prof"
              className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
            />
          </div>
        </div>

        {/* failedCourse */}
        <div className="flex flex-col items-end lg:flex-row lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button className=" rounded-[15px] py-2 px-4 border-[2px] border-[#E35151] text-[#E35151] my-2 order-4 lg:order-none w-[170px]">
            رد شده
          </button>

          <div className="flex items-center gap-2 order-3 lg:order-none">
            <button className="rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-[#0166ff] my-2 order-2 lg:order-none w-[170px]">
              8
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره پایان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 order-2 lg:order-none">
            <button className="rounded-[15px] py-2 px-4 border-[2px] border-[#0166FF] text-[#0166ff] my-2 order-2 lg:order-none w-[170px]">
              6.5
            </button>
            <p className="order-2" style={{ direction: "rtl" }}>
              نمره میان ترم:
            </p>
          </div>

          <div className="flex items-center gap-2 my-2 order-1 lg:order-none">
            <p className="text-black font-bold">مهدی کریمی</p>

            <Image
              src={prof}
              alt="prof"
              className="w-[60px] sm:w-[60px] h-auto rounded-[10px]"
            />
          </div>
        </div>

        <NummberModal isModalOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Page;
