"use client";
import React, { useState } from "react";

import Image from "next/image";
import Modal from "./Modal";
import image from "@/public/img/SingleCourse/Note.png";
import teacher from "@/public/img/SingleCourse/teacher.png";
import { MdOutlineCircle } from "react-icons/md";

const SingleCourse = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="text-center lg:w-[95%] my-10 mx-5 lg:mx-auto">
      <div className="grid grid-cols-12 gap-5">
        {/* leftside */}
        <div className="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-4">
          <div className="bg-white rounded-[10px] p-4">
            <div className="flex flex-wrap justify-between items-center">
              <button className="text-black rounded-[5px] py-2 px-4 bg-[#F5C362] text-[10px]">
                4.5/5
              </button>
              <div className="flex gap-4 items-center">
                <div className="text-right">
                  <p className="text-black font-bold text-[20px]">
                    استاد امین رعیتی
                  </p>
                  <p className="text-gray-500 mt-2">کارشناس ارشد زبان آلمانی</p>
                </div>
                <Image
                  className="w-24 h-24 rounded-full"
                  src={teacher}
                  alt="teacher"
                />
              </div>
            </div>
            <div className="h-[1px] w-full bg-[#0166ff29] mt-5"></div>

            <div className="grid grid-cols-12 my-5">
              <div className="col-span-12 order-2 sm:order-1 sm:col-span-6 md:col-span-6 lg:col-span-6 flex items-center gap-2 my-2 justify-end">
                <p className="text-black text-[12px]">انگلیسی مقدماتی</p>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F5C362] text-white font-bold leading-none">
                  <span className="mt-1">2</span>
                </div>
              </div>
              <div className="col-span-12 order-1 sm:order-2 sm:col-span-6 md:col-span-6 lg:col-span-6 flex items-center gap-2 my-2 justify-end">
                <p className="text-black text-[12px]">انگلیسی مقدماتی</p>
                <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F5C362] text-white font-bold leading-none">
                  <span className="mt-1">1</span>
                </div>
              </div>
            </div>

            <div className="text-center my-5">
              <button
                onClick={openModal}
                className="bg-[#0166FF] text-center px-5 py-3 text-white rounded-[10px] w-full"
              >
                پرداخت شهریه (1،250،000 تومان)
              </button>
              <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
            </div>
          </div>
        </div>

        {/* rightside */}
        <div className="col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-8">
          <div className="flex flex-wrap Mxs:flex-nowrap justify-end Mxs:justify-between">
            <div className="flex space-x-2 items-center order-2 Mxs:order-1  my-1">
              <p className="text-black">آموزش انگلیسی</p>
              <Image src={image} alt="image" className="object-contain" />
            </div>
            <p className="text-black text-[20px] font-bold order-1 Mxs:order-2  my-1">
              دوره آموزش زبان انگلیسی در سفر
            </p>
          </div>

          <div className="mt-10 text-right">
            <p className="text-[#0166FF] text-[18px] font-bold">توضیحات</p>
            <p
              className="text-justify mt-5 text-gray-500"
              style={{ lineHeight: "35px", direction: "rtl" }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم
              ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
              از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. لورم ایپسوم
              متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
              طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
              سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
              کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          </div>

          <div className="mt-10 text-right">
            <p className="text-[#0166FF] text-[18px] font-bold">
              ویژگی‌های دوره
            </p>
            <div className="flex items-center justify-end mt-5 ">
              <p className="text-black mx-2 text-[15px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان است چاپگرها و متون بلکه روزنامه است.
              </p>
              <MdOutlineCircle color="#0166FF" />
            </div>
            <div className="flex items-center justify-end mt-5 ">
              <p className="text-black mx-2 text-[15px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان است چاپگرها و متون بلکه روزنامه است.
              </p>
              <MdOutlineCircle color="#0166FF" />
            </div>
            <div className="flex items-center justify-end mt-5 ">
              <p className="text-black mx-2 text-[15px]">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان است چاپگرها و متون بلکه روزنامه است.
              </p>
              <MdOutlineCircle color="#0166FF" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
