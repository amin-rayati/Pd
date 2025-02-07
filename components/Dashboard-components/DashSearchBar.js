"use client";
import { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FiFilter } from "react-icons/fi";
import FilterModal from "./FilterModal";
import FilterModalUser from "./FilterModalUser";
import FilterModalBooks from "./FilterModalBooks";
const DashSearchBar = ({ page }) => {
  const [selectedOption, setSelectedOption] = useState("جدید ترین");

  const options = [
    { label: "پرفروش ترین", value: "پرفروش ترین" },
    { label: "ارزان ترین", value: "ارزان ترین" },
    { label: "گران ترین", value: "گران ترین" },
    { label: "جدید ترین", value: "جدید ترین" },
  ];

  const [isModalSalaryOpen, setIsModalSalaryOpen] = useState(false);
  const openModalSalary = () => setIsModalSalaryOpen(true);
  const closeModalSalary = () => setIsModalSalaryOpen(false);

  const [isModalCourseOpen, setIsModalCourseOpen] = useState(false);
  const openModalCourse = () => setIsModalCourseOpen(true);
  const closeModalCourse = () => setIsModalCourseOpen(false);

  const [isModalBooksOpen, setIsModalBooksOpen] = useState(false);
  const openModalBooks = () => setIsModalBooksOpen(true);
  const closeModalBooks = () => setIsModalBooksOpen(false);

  const Modal = () => {
    if (page === "UserCourse") {
      openModalCourse();
    } else if (page === "salary") {
      openModalSalary();
    } else if (page === "books") {
      openModalBooks();
    }
  };
  return (
    <>
      <div className="hidden lg:block">
        <div className="flex items-center justify-between mb-5">
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
          <div className="flex w-[45%]">
            <button
              onClick={() => Modal()}
              className="flex gap-5 rounded-[15px] border-2 border-[#0166ff] p-3"
            >
              <FiFilter color="#0166ff" size={20} />
              <p className="text-[#0166ff]">فیلتر ها</p>
            </button>

            <div className="relative flex items-center rounded-[15px] ml-3 flex-grow">
              <span className="absolute left-3 text-gray-500">
                <CiSearch color="#0166FF" size={20} />
              </span>

              <input
                type="text"
                placeholder="جستجوی واریزی ..."
                className="bg-gray-100 py-3 pl-10 pr-5 border-2 rounded-[15px] w-full text-right"
                style={{ direction: "rtl", outline: "none" }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="grid grid-cols-12 items-center justify-between mb-5">
          {/* Options Section */}
          <div className="col-span-12 sm:col-span-12 md:col-span-12 flex flex-wrap gap-2 items-center justify-between my-2">
            <button
              onClick={() => Modal()}
              className="flex gap-5 rounded-[15px] border-2 border-[#0166ff] p-3"
            >
              <FiFilter color="#0166ff" size={20} />
              <p className="text-[#0166ff]">فیلتر ها</p>
            </button>
            <div className="flex flex-wrap gap-2 items-center">
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
          </div>
          {/* Search Input */}
          <div className="col-span-12 sm:col-span-12 md:col-span-12 relative flex items-center  rounded-[15px] w-[100%] my-2">
            <span className="absolute left-3 text-gray-500">
              <CiSearch color="#0166FF" size={20} />
            </span>

            <input
              type="text"
              placeholder="جستجوی واریزی ..."
              className="bg-gray-100 py-3 pl-10 pr-5 border-2 rounded-[10px] w-full text-right"
              style={{ direction: "rtl", outline: "none" }}
            />
          </div>
        </div>
      </div>

      <FilterModal
        isModalSalaryOpen={isModalSalaryOpen}
        closeModalSalary={closeModalSalary}
      />
      <FilterModalUser
        isModalCourseOpen={isModalCourseOpen}
        closeModalCourse={closeModalCourse}
      />

      <FilterModalBooks
        isModalBooksOpen={isModalBooksOpen}
        closeModalBooks={closeModalBooks}
      />
    </>
  );
};

export default DashSearchBar;
