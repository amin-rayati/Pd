"use client";
import { useState } from "react";
import Image from "next/image";
import MainBanner from "@/components/Dashboard-components/MainBanner";
import Prof from "@/public/img/Dashboard/prof.jpg";
import { BiSolidEdit } from "react-icons/bi";

const Page = () => {
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([
    "انگلیسی پیشرفته",
    "انگلیسی ابتدایی",
    "انگلیسی میان رده",
    "آلمانی ابتدایی",
    "آلمانی میان رده",
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectSuggestion = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
    }
    setInputValue(""); // Clear input after selection
  };

  const handleRemoveItem = (item) => {
    setSelectedItems(selectedItems.filter((i) => i !== item));
  };

  const filteredSuggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          ویرایش پروفایل
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        <div className="bg-white p-4 rounded-[20px] w-[90%] md:w-[70%] lg:w-[40%] mx-auto my-10">
          <div className="flex justify-center ">
            <div className="relative my-5">
              <Image
                src={Prof}
                alt="Prof"
                className="w-[100px] h-[100px] md:w-[150px] md:h-[150px] rounded-full object-contain"
              />
              {/* Small Circle */}
              <div className="flex items-center justify-center absolute bottom-3 right-0 w-5 h-5 md:w-8 md:h-8  rounded-full bg-white border-2 border-[#F5C362]">
                <BiSolidEdit color="#0166ff" size={20} />
              </div>
            </div>
          </div>
          <div className="flex flex-col my-5">
            <label className="text-sm font-medium text-gray-500 text-right">
              نام و نام خانوادگی
            </label>
            <input
              defaultValue="پارسا براتی"
              type="text"
              className="p-3 border-2 border-gray-100 rounded-[15px] focus:outline-none my-3 text-center "
            />
          </div>
          <div className="flex flex-col my-5">
            <label className="text-sm font-medium text-gray-500 text-right">
              دوره‌هایی که تدریس میکنید
            </label>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="p-3 border-2 border-gray-100 rounded-[15px] focus:outline-none my-3 text-center"
            />

            {inputValue && (
              <div className="border border-gray-300 rounded-lg bg-white shadow-md max-h-40 overflow-y-auto">
                {filteredSuggestions.length > 0 ? (
                  filteredSuggestions.map((item, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-center"
                      onClick={() => handleSelectSuggestion(item)}
                    >
                      {item}
                    </div>
                  ))
                ) : (
                  <p className="p-2 text-gray-500 text-center">
                    موردی یافت نشد
                  </p>
                )}
              </div>
            )}

            {/* Selected Items */}
            <div className="flex flex-wrap justify-end gap-2 mt-3">
              {selectedItems.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center bg-[#0166ff] text-white py-2 px-3 rounded-[15px] w-[160px]"
                >
                  <span>{item}</span>
                  <button
                    className="ml-2 text-white"
                    onClick={() => handleRemoveItem(item)}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button className="text-black border-2 border-[#F5C362] bg-[#F5C362]  p-3 my-5  w-[90%] sm:w-[50%] rounded-[15px]">
            ذخیره تغییرات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
