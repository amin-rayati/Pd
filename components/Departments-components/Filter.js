"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Filter = () => {
  const [filters, setFilters] = useState([
    {
      title: "دسته بندی",
      isOpen: false,
      items: ["انگلیسی", "فرانسه", "آلمانی", "ترکی استانبولی"],
    },
    {
      title: "نوع دوره",
      isOpen: false,
      items: ["حضوری", "آنلاین", "نیمه حضوری"],
    },
    {
      title: "محدوده قیمت",
      isOpen: false,
      minPrice: "",
      maxPrice: "",
    },
  ]);

  const toggleDropdown = (index) => {
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) =>
        i === index ? { ...filter, isOpen: !filter.isOpen } : filter
      )
    );
  };

  const handlePriceChange = (e, type) => {
    const value = e.target.value;
    setFilters((prevFilters) =>
      prevFilters.map((filter, i) =>
        filter.title === "محدوده قیمت"
          ? {
              ...filter,
              [type]: value,
            }
          : filter
      )
    );
  };

  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-3 order-1 sm:order-1 md:order-2 lg:order-2 mb-5">
      <div className="bg-white rounded-[20px] p-4">
        {filters.map((filter, filterIndex) => (
          <div key={filterIndex} className="mb-4">
            <div
              className="flex items-center my-3 justify-between cursor-pointer"
              onClick={() => toggleDropdown(filterIndex)}
            >
              {filter.isOpen ? (
                <FaChevronUp color="#0166FF" size={20} />
              ) : (
                <FaChevronDown color="#0166FF" size={20} />
              )}
              <p className="text-black font-bold text-[17px]">{filter.title}</p>
            </div>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                filter.isOpen
                  ? "max-h-[500px] opacity-100"
                  : "max-h-0 opacity-0"
              }`}
            >
              {filter.title === "محدوده قیمت" ? (
                <div className="mt-4">
                  <div className="flex gap-4 items-center">
                    <input
                      type="number"
                      value={filter.minPrice}
                      onChange={(e) => handlePriceChange(e, "minPrice")}
                      className="w-full p-2 border-2 rounded-[10px] bg-gray-50"
                      style={{ outline: "none" }}
                    />
                    <p className="text-gray-500">تا</p>
                    <input
                      type="number"
                      value={filter.maxPrice}
                      onChange={(e) => handlePriceChange(e, "maxPrice")}
                      className="w-full p-2 border-2 rounded-[10px] bg-gray-50"
                      style={{ outline: "none" }}
                    />

                    <p className="text-gray-500">از</p>
                  </div>
                </div>
              ) : (
                <div className="mt-4">
                  {filter.items?.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between my-5"
                    >
                      <input
                        type="checkbox"
                        id={`${filter.title.toLowerCase()}-${index}`}
                        className="w-6 h-6 bg-gray-200 border-2 rounded-sm focus:ring-[#0166FF] appearance-none checked:bg-blue-500"
                      />

                      <label
                        htmlFor={`${filter.title.toLowerCase()}-${index}`}
                        className="text-gray-500 ml-2 cursor-pointer"
                      >
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
