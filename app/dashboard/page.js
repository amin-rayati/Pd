import Image from "next/image";
import Link from "next/link";

import { FaChevronLeft } from "react-icons/fa6";

import Prof from "@/public/img/Dashboard/prof.jpg";
import classIcon from "@/public/img/Dashboard/class.png";
import moneyIcon from "@/public/img/Dashboard/money.png";
import editIcon from "@/public/img/Dashboard/edit.png";

import MainBanner from "@/components/Dashboard-components/MainBanner";
const page = () => {
  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end">
          {/* logoutBtn */}
          <div className="order-2 sm:order-1 mt-10 text-left">
            <button className="border-2 border-[#E35151] px-3 md:px-6 py-3 text-[12px] md:text-[15px] rounded-[15px] text-[#E35151]">
              خروج از حساب کاربری
            </button>
          </div>

          {/* userInfo */}
          <div className="flex flex-col Mxs:flex-row items-end Mxs:items-center Mxs:space-x-10 order-1 sm:order-2 justify-end">
            <div className="order-2 Mxs:order-1 my-2">
              <h1 className="font-bold text-[20px] md:text-[30px] text-right">
                استاد پارسا براتی
              </h1>

              <div className="flex space-x-2 items-center justify-end my-5">
                <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
                <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
              </div>

              <p className="text-[14px] md:text-[18px]">
                تدریس زبان انگلیسی - تدریس زبان آلمانی
              </p>
            </div>
            <div className="order-1 Mxs:order-2 my-2">
              <Image
                src={Prof}
                alt="Prof"
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full object-contain"
              />
            </div>
          </div>
        </div>
        <div className="h-[1px] w-full bg-[#0166ff54] mt-10"></div>

        <div className="grid grid-cols-12 my-10 gap-4">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-3  lg:order-1">
            <Link href="/dashboard/profile">
              <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
                <FaChevronLeft color="#0166ff" size={25} />

                <div className="flex items-center space-x-5">
                  <div>
                    <p className="text-black text-right text-[20px] my-2">
                      ویرایش پروفایل
                    </p>
                    <p
                      className="text-gray-400 text-right text-[17px] my-2"
                      style={{ direction: "rtl" }}
                    >
                      اطلاعات فردی، دوره ها و ...
                    </p>
                  </div>
                  <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                    <Image src={editIcon} alt="editIcon" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-2  lg:order-2">
            <Link href="/dashboard/salary">
              <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
                <FaChevronLeft color="#0166ff" size={25} />

                <div className="flex items-center space-x-5">
                  <div>
                    <p className="text-black text-right text-[20px] my-2">
                      حقوق و دستمزد
                    </p>
                    <p
                      className="text-gray-400 text-right text-[17px] my-2"
                      style={{ direction: "rtl" }}
                    >
                      + 25،1400،000 تومان
                    </p>
                  </div>
                  <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                    <Image src={moneyIcon} alt="moneyIcon" />
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-4 order-1  lg:order-3">
            <Link href="/dashboard/classes">
              <div className="bg-white p-5 flex items-center justify-between rounded-[20px] h-full">
                <FaChevronLeft color="#0166ff" size={25} />

                <div className="flex items-center space-x-5">
                  <div>
                    <p className="text-black text-right text-[20px] my-2">
                      کلاس‌های فعال
                    </p>
                    <p
                      className="text-gray-400 text-right text-[17px] my-2"
                      style={{ direction: "rtl" }}
                    >
                      14 کلاس
                    </p>
                  </div>
                  <div className="border-2 border-[#F5C362] p-4 rounded-[15px]">
                    <Image src={classIcon} alt="classIcon" />
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
