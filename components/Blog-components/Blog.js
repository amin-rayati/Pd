"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import course1 from "@/public/img/Home/course1.png";
import course2 from "@/public/img/Home/course2.png";
import course3 from "@/public/img/Home/course3.png";
import course4 from "@/public/img/Home/course4.png";
import { CiClock2 } from "react-icons/ci";
const Blog = () => {
  const [selectedOption, setSelectedOption] = useState("جدید ترین");

  const options = [
    { label: "بیش ترین بازدید", value: "بیش ترین بازدید" },
    { label: "جدید ترین", value: "جدید ترین" },
  ];
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-9 order-2 sm:order-2 md:order-1 lg:order-1">
      <div className="hidden lg:block">
        <div className="flex flex-wrap items-center justify-between mx-3 mb-5">
          {/* Options Section */}

          <p
            className="text-gray-400 text-sm my-1"
            style={{ direction: "rtl" }}
          >
            1،250 دوره
          </p>
          <div className="flex gap-2 my-1">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => setSelectedOption(option.value)}
                className={`p-3 rounded-[10px] cursor-pointer ${
                  selectedOption === option.value
                    ? "bg-white text-[#0166FF] font-bold text-sm"
                    : "bg-white text-gray-400 text-sm"
                }`}
              >
                <p>{option.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 text-center">
        {/* item1 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 mb-2">
          <div className="relative text-white gap-2 mx-3">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course1}
                alt="course1"
                objectFit="cover"
                priority={true}
                layout="fill"
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <Link href="/blog/1">
                  <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                    آموزش و یادگیری
                  </button>
                </Link>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                بـهـتـریـن مـحـتوای آمـوزشـی در رابــطه با موضوع گرامر زبان
                انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>
        {/* item2 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 mb-2">
          <div className="relative text-white gap-2 mx-3">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course2}
                alt="course2"
                objectFit="cover"
                priority={true}
                layout="fill"
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <Link href="/blog/2">
                  <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                    آموزش و یادگیری
                  </button>
                </Link>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                بـهـتـریـن مـحـتوای آمـوزشـی در رابــطه با موضوع گرامر زبان
                انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>
        {/* item3 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 mb-2">
          <div className="relative text-white gap-2 mx-3">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course3}
                alt="course3"
                objectFit="cover"
                priority={true}
                layout="fill"
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <Link href="/blog/3">
                  <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                    آموزش و یادگیری
                  </button>
                </Link>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                بـهـتـریـن مـحـتوای آمـوزشـی در رابــطه با موضوع گرامر زبان
                انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
