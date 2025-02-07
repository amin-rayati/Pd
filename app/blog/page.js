"use client";
import { useState } from "react";

import Filter from "@/components/Departments-components/Filter";
import Blog from "@/components/Blog-components/Blog";
function Page() {
  const [selectedOption, setSelectedOption] = useState("جدید ترین");

  const options = [
    { label: "بیش ترین بازدید", value: "بیش ترین بازدید" },
    { label: "جدید ترین", value: "جدید ترین" },
  ];
  return (
    <div className="text-center lg:w-[95%] my-10 mx-5 lg:mx-auto">
      <div className="block lg:hidden">
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

      <div className="grid grid-cols-12">
        <Blog />
        <Filter />
      </div>
    </div>
  );
}

export default Page;
