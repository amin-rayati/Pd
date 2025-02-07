"use client";
import { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { BiTrashAlt } from "react-icons/bi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FaPlus } from "react-icons/fa6";

import AddressModal from "@/components/Address-components/AddressModal";

const Page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="text-center lg:w-[65%] my-10 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[30px]">آدرس ها</h1>

        <div className="flex space-x-4 items-center justify-center m-5">
          <div className="h-[7px] w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-60 bg-[#F5C362]"></div>
          <div className="h-[7px] w-10 bg-[#F5C362]"></div>
        </div>

        <div className="bg-white rounded-[20px] p-4 flex flex-col sm:flex-row justify-between mb-5">
          <div className="flex items-center space-x-5 order-2 sm:order-1 ">
            <BiTrashAlt size={22} color="#E35151" />
            <FiEdit size={22} color="#0166ff" />
          </div>

          <div className="flex items-center space-x-5 justify-end order-1 sm:order-2 my-1">
            <div className="text-right">
              <p>خانه</p>
              <div className="flex my-3 space-x-2">
                <p className="text-gray-600">
                  سعادت آباد، بلوار دریا، رو به روی مسجد قدس، پلاک 57، واحد 5
                </p>
                <HiOutlineLocationMarker color="#0166ff" size={25} />
              </div>
            </div>
            <div className="flex items-center justify-between my-5">
              <input
                type="checkbox"
                className="w-6 h-6 bg-gray-200 border-2 rounded-sm focus:ring-[#0166FF] appearance-none checked:bg-blue-500"
              />
            </div>
          </div>
        </div>

        <div
          onClick={openModal}
          className="flex items-center justify-end space-x-2 cursor-pointer"
        >
          <p className="text-[#0166ff] text-[18px]">افزودن آدرس</p>
          <FaPlus color="#0166ff" />
        </div>
      </div>

      <AddressModal isModalOpen={isModalOpen} closeModal={closeModal} />
    </>
  );
};

export default Page;
