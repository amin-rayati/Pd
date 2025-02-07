"use client";
import React, { useState } from "react";

import Image from "next/image";
import bac from "@/public/img/Login/bacImg.png";

import { FaMale, FaFemale } from "react-icons/fa";
import { RiEditLine } from "react-icons/ri";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment-jalaali";

const LoginForm = () => {
  const [gender, setGender] = useState("");
  const [phone, setPhone] = useState("");
  const [startDate, setStartDate] = useState(null);

  return (
    <div className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 h-[1000px] order-2 sm:order-2 md:order-2 lg:order-2">
      <div className="absolute inset-0 block md:hidden">
        <Image
          src={bac}
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="z-0"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 bg-[#ffffff] p-8 rounded-[20px] shadow-lg w-[90%] lg:w-[70%]">
          <h1 className="font-bold text-[30px] text-right">ورود / ثبت نام</h1>

          <div className="flex space-x-2 items-center justify-end my-5">
            <div className="h-[7px] w-5 bg-[#F5C362]"></div>
            <div className="h-[7px] w-40 bg-[#F5C362]"></div>
          </div>

          {/* FormRegister */}
          <form>
            <div className="flex flex-col items-right mt-10">
              <label
                htmlFor="otp"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                نام و نام خانوداگی
              </label>

              <input
                type="text"
                id="otp"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2"
              />
            </div>

            <div className="flex flex-col items-right my-5">
              <label
                htmlFor="otp"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                تاریخ تولد
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale="fa"
                minDate={new Date()}
                className="p-4 text-[#016ff] text-center border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2 w-full"
                placeholderText="انتخاب تاریخ"
              />
            </div>

            <div className="flex flex-col items-right my-5">
              <label
                htmlFor="otp"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                کد ملی
              </label>

              <input
                type="text"
                id="otp"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2"
              />
            </div>

            <div className="flex-col text-right">
              <label
                htmlFor="gender"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                جنسیت
              </label>

              <div className="flex justify-between space-x-2 mt-2">
                {/* Female */}
                <label className="flex items-center w-[50%]">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    checked={gender === "female"}
                    onChange={() => setGender("female")}
                    className="hidden peer"
                  />
                  <div className="flex justify-between items-center p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] w-full">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-400 mr-2 peer-checked:border-blue-500"></span>
                    <div className="flex space-x-2">
                      <span>زن</span>
                      <FaFemale
                        size={20}
                        color="#0166ff"
                        className="hidden sm:block"
                      />
                    </div>
                  </div>
                </label>

                {/* Male */}
                <label className="flex items-center w-[50%]">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    checked={gender === "male"}
                    onChange={() => setGender("male")}
                    className="hidden peer"
                  />
                  <div className="flex justify-between items-center p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] w-full">
                    <span className="w-5 h-5 rounded-full border-2 border-gray-400 mr-2 peer-checked:border-blue-500"></span>
                    <div className="flex space-x-2">
                      <span>مرد</span>
                      <FaMale
                        size={20}
                        color="#0166ff"
                        className="hidden sm:block"
                      />
                    </div>
                  </div>
                </label>
              </div>
            </div>

            <div className="flex flex-col items-right my-5">
              <label
                htmlFor="otp"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                آدرس
              </label>

              <input
                type="text"
                id="otp"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2"
              />
            </div>

            <div className="mt-20">
              <button className="bg-[#F5C362] rounded-[15px] py-3 px-10 border-[2px] border-[#F5C362]">
                ورود به وبسایت
              </button>
            </div>
          </form>

          {/* FormLogin */}
          {/* <form>
            <div className="flex flex-col items-right mt-10">
              <label
                htmlFor="phone"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                شماره تلفن
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="p-4 text-black text-center border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2 w-full pl-4 pr-12"
                />

                {phone && (
                  <button
                    onClick={() => setPhone("")}
                    className="absolute inset-y-0 right-4 flex items-center text-gray-500 hover:text-black"
                    title="ویرایش شماره"
                  >
                    <RiEditLine color="#0166ff" size={20} />
                  </button>
                )}
              </div>
            </div>
            <div className="flex flex-col items-right my-5">
              <div className="flex justify-between">
                <p className="text-[17px] text-[#0166ff]">ارسال مجدد</p>
                <label
                  htmlFor="otp"
                  className="text-[17px] text-right font-medium text-gray-700"
                >
                  کد تایید
                </label>
              </div>

              <input
                type="email"
                id="otp"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-2"
              />
            </div>

            <div className="mt-20">
              <button className="bg-[#F5C362] rounded-[15px] py-3 px-10 border-[2px] border-[#F5C362]">
                ارسال کد تایید
              </button>
            </div>
          </form> */}
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
