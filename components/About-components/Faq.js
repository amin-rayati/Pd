"use client";

import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [openQuestionIndex, setOpenQuestionIndex] = useState(null);
  const questions = [
    {
      title: "دیجی خدمات در کدام کشورها فروش ملک انجام میدهد؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "برای خرید ملک در خار ج از کشور به چه مدارک و اسنادی احتیاج دارم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "بهترین  کشور برای سرمایه گذاری در زمینه املاک کدام است؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
    {
      title: "برای خرید ملک در خار ج از کشور به چه مدارک و اسنادی احتیاج دارم؟",
      answer:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
    },
  ];

  const toggleQuestion = (index) => {
    setOpenQuestionIndex(index === openQuestionIndex ? null : index);
  };

  return (
    <div className="my-20 text-center">
      <h1 className="font-bold text-[30px]">دوره های آموزشی</h1>

      <div className="flex space-x-4 items-center justify-center m-5">
        <div className="h-[7px] w-6 bg-[#F5C362]"></div>
        <div className="h-[7px] w-20 bg-[#F5C362]"></div>
        <div className="h-[7px] w-80 bg-[#F5C362]"></div>
        <div className="h-[7px] w-20 bg-[#F5C362]"></div>
        <div className="h-[7px] w-6 bg-[#F5C362]"></div>
      </div>

      <p className="text-[#1e1e1ead] text-[17px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>

      <div className="mt-10 justify-center mx-5">
        {questions.map((question, index) => (
          <div
            key={index}
            className=" bg-white w-full lg:w-1/2  lg:mx-auto rounded-[20px] border mt-2 p-4"
          >
            <div className="gray-200">
              <button
                className="w-full flex justify-between text-end items-center p-4 text-left text-gray-800"
                onClick={() => toggleQuestion(index)}
              >
                <span
                  className={`transform ${
                    openQuestionIndex === index ? "rotate-180" : "rotate-0"
                  } transition-transform duration-200`}
                >
                  {openQuestionIndex === index ? (
                    <FaMinus color="#0166FF" size={35} />
                  ) : (
                    <FaPlus color="#0166FF" size={35} />
                  )}
                </span>
                <span className=" text-[15px] lg:text-[20px] text-[#000000] leading-[25px] font-bold">
                  {question.title}
                </span>
              </button>

              {openQuestionIndex === index && (
                <>
                  <div className="h-[1px] w-full bg-[#0166ff54] mt-5"></div>
                  <div className="px-4 pb-4  text-[15px] text-[#0166FF] text-right mt-5">
                    {question.answer}
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
