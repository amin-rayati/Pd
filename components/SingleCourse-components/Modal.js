"use client";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const Modal = ({ isModalOpen, closeModal }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-all duration-500"
          onClick={closeModal}
        >
          <div
            className="bg-gray-100 p-6 rounded-[20px] w-[90%] max-w-md sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <IoMdClose size={30} color="#6b728094" />
              </button>
            </div>

            <div className="text-center my-5">
              <p className="text-black text-[25px] font-bold">روش پرداخت</p>
            </div>

            <div className="border-b border-gray-200 relative">
              <div className="flex justify-around">
                <button
                  className={`p-4 rounded-t-lg relative z-10 transition-colors duration-300 ${
                    activeTab === "tab1"
                      ? "text-[#0166FF] text-[18px]"
                      : "text-gray-500 hover:text-gray-600 text-[18px]"
                  }`}
                  onClick={() => setActiveTab("tab1")}
                >
                  اقساطی
                </button>

                <button
                  className={`p-4 rounded-t-lg relative z-10 transition-colors duration-300 ${
                    activeTab === "tab2"
                      ? "text-[#0166FF] text-[18px]"
                      : "text-gray-500 hover:text-gray-600 text-[18px]"
                  }`}
                  onClick={() => setActiveTab("tab2")}
                >
                  نقدی
                </button>
              </div>

              <div
                className="absolute bottom-0 left-0 h-[2px] bg-[#0166FF] transition-all duration-500"
                style={{
                  width: activeTab === "tab1" ? "50%" : "50%",
                  transform:
                    activeTab === "tab1"
                      ? "translateX(0%)"
                      : "translateX(100%)",
                }}
              />
            </div>

            <div className="p-4 mt-5">
              {activeTab === "tab1" && (
                <>
                  <div className="flex flex-wrap Mxsss:flex-nowrap justify-end items-center Mxsss:justify-between bg-white px-5 py-4 rounded-[10px] my-5">
                    <p
                      className="text-black font-bold order-2 Mxsss:order-1"
                      style={{ direction: "rtl" }}
                    >
                      1،250،000 تومان
                    </p>
                    <div className="order-1 Mxsss:order-2">
                      <div className="flex items-center gap-2">
                        <p className="text-gray-500 text-[15px]">قسط اول</p>
                        <div className="w-6 h-6 flex items-center justify-center rounded-full bg-[#F5C362] text-white font-bold leading-none">
                          <span className="mt-1">1</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap Mxsss:flex-nowrap justify-end items-center Mxsss:justify-between px-5 py-4 rounded-[10px]">
                    <p
                      className="text-black font-bold order-2 Mxsss:order-1"
                      style={{ direction: "rtl" }}
                    >
                      1،250،000 تومان
                    </p>
                    <p
                      className="text-black font-bold order-1 Mxsss:order-2"
                      style={{ direction: "rtl" }}
                    >
                      مبلغ نهایی:
                    </p>
                  </div>
                  <div className="text-center mt-10">
                    <button className="bg-[#0166FF] text-center px-5 py-4 text-white rounded-[10px] w-full">
                      پرداخت
                    </button>
                  </div>
                </>
              )}
              {activeTab === "tab2" && (
                <>
                  <div className="flex flex-wrap Mxss:flex-nowrap justify-end Mxss:justify-between bg-white px-5 py-4 rounded-[10px] my-5">
                    <p
                      className="text-black font-bold order-2 Mxss:order-1"
                      style={{ direction: "rtl" }}
                    >
                      1،250،000 تومان
                    </p>
                    <p className="text-gray-500 order-1 Mxss:order-2">
                      مبلغ قابل پرداخت
                    </p>
                  </div>
                  <div className="text-center mt-10">
                    <button className="bg-[#0166FF] text-center px-5 py-4 text-white rounded-[10px] w-full">
                      پرداخت
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
