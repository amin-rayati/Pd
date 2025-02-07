"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
const SearchBar = () => {
  const [selectedOption, setSelectedOption] = useState("جدید ترین");

  const options = [
    { label: "پرفروش ترین", value: "پرفروش ترین" },
    { label: "ارزان ترین", value: "ارزان ترین" },
    { label: "گران ترین", value: "گران ترین" },
    { label: "جدید ترین", value: "جدید ترین" },
  ];
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mx-3 mb-5">
          {/* Options Section */}
          <div className="flex gap-2 items-center">
            <p className="text-gray-400 text-sm" style={{ direction: "rtl" }}>
              1،250 دوره
            </p>
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
          {/* Search Input */}
          <div className="relative flex items-center border-2 border-gray-300 rounded-[10px] w-[35%] ml-3">
            <span className="absolute left-3 text-gray-500">
              <CiSearch color="#0166FF" size={20} />
            </span>

            <input
              type="text"
              placeholder="جستجوی دوره ..."
              className="py-3 pl-10 pr-5 rounded-[10px] w-full text-right"
              style={{ direction: "rtl", outline: "none" }}
            />
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="grid grid-cols-12 items-center justify-between mx-3 mb-5">
          {/* Options Section */}
          <div className="col-span-12 sm:col-span-12 md:col-span-12 flex flex-wrap gap-2 items-center my-2">
            <p className="text-gray-400 text-sm" style={{ direction: "rtl" }}>
              1،250 دوره
            </p>
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
          {/* Search Input */}
          <div className="col-span-12 sm:col-span-12 md:col-span-12 relative flex items-center border-2 border-gray-300 rounded-[10px] w-[100%] my-2">
            <span className="absolute left-3 text-gray-500">
              <CiSearch color="#0166FF" size={20} />
            </span>

            <input
              type="text"
              placeholder="جستجوی دوره ..."
              className="py-3 pl-10 pr-5 rounded-[10px] w-full text-right"
              style={{ direction: "rtl", outline: "none" }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
