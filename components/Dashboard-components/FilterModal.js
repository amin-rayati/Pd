"use client";
import React, { useState } from "react";

import { IoMdClose } from "react-icons/io";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
const FilterModal = ({ isModalSalaryOpen, closeModalSalary }) => {
  const [startDate, setStartDate] = useState(null);
  return (
    <div>
      {isModalSalaryOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModalSalary}
        >
          <div
            className="bg-gray-100 p-6 rounded-[20px] w-[90%] max-w-md sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeModalSalary}>
                <IoMdClose size={30} color="#6b728094" />
              </button>
            </div>

            <div className="text-center mb-5">
              <p className="text-black text-lg font-bold">فیلتر ها</p>
            </div>

            <div className="flex flex-col ">
              <label className="text-sm font-medium text-gray-500 text-right">
                بازه دستمزد
              </label>
              <select
                className="p-3 border-2 rounded-[15px] bg-white focus:outline-none my-3 text-right "
                style={{ direction: "rtl" }}
              >
                <option value="" disabled selected>
                  انتخاب کنید
                </option>
                <option value="low">کمتر از 10 میلیون</option>
                <option value="medium">10 تا 20 میلیون</option>
                <option value="high">بیشتر از 20 میلیون</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 text-right">
                بانک واریز شده
              </label>
              <select
                className="p-3 border-2 rounded-[15px] bg-white focus:outline-none my-3 text-right "
                style={{ direction: "rtl" }}
              >
                <option value="" disabled selected>
                  انتخاب کنید
                </option>
                <option value="low">ملی</option>
                <option value="medium">ملت</option>
                <option value="high">مسکن</option>
              </select>
            </div>

            {/* <div className="flex flex-col items-right my-5">
              <label className="text-sm font-medium text-gray-500 text-right">
                تاریخ واریزی
              </label>

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                locale="fa"
                minDate={new Date()}
                className="p-3 text-[#016ff] bg-white text-center border-2  rounded-[15px]  focus:outline-none my-3 w-full"
                placeholderText="انتخاب تاریخ"
              />
            </div> */}

            <div className="flex justify-center mt-10 gap-5">
              <button className="bg-[#0166ff] text-white px-4 py-3 border-[#0166ff] rounded-[15px] w-full text-[15px]">
                اعمال فیلترها
              </button>
              <button className="text-[#E35151] px-4 py-3 border-2 border-[#E35151] rounded-[15px] w-full text-[15px]">
                حذف فیلترها
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FilterModal;
