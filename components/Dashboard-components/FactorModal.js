import { IoMdClose } from "react-icons/io";
import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import shop1 from "@/public/img/Shop/shop1.png";
import { CgNotes } from "react-icons/cg";
import { MdOutlineDiscount } from "react-icons/md";
const FactorModal = ({ isModalOpen, closeModal }) => {
  const courseInfo = [
    { title: "2456", label: "شماره سفارش" },
    { title: "1402/05/30", label: " تاریخ سفارش" },
    { title: "ارسال شده", label: "وضعیت سفارش" },
    { title: "2،500،000 تومان", label: "مبلغ سفارش" },
  ];
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
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

            <div className="text-center mb-5">
              <p className="text-black text-lg font-bold">فاکتور سفارش</p>
            </div>

            {courseInfo.map((e, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2 sm:gap-5 my-5"
                >
                  <div className="col-span-12 order-2 sm:col-span-8 sm:order-1 md:col-span-8 md:order-1 lg:col-span-8 lg:order-1">
                    <div className="bg-white rounded-[10px] py-3 text-center">
                      <p className="text-black">{e.title}</p>
                    </div>
                  </div>
                  <div className="col-span-12 order-1 sm:col-span-4 sm:order-2 md:col-span-4 md:order-2 lg:col-span-4 lg:order-2">
                    <div className="bg-white rounded-[10px] py-4 text-center">
                      <p className="text-gray-500 text-[12px]">{e.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="text-center mb-5">
              <p className="text-gray-500 text-[13px]"> اقلام سفارش</p>
            </div>

            <div className="bg-white rounded-[20px] p-4 flex flex-col sm:flex-row justify-end gap-5">
              <div className="flex justify-end order-1 sm:order-2">
                <Image
                  src={shop1}
                  alt="shop1"
                  className="w-[160px] sm:w-[80px] h-auto"
                />
              </div>

              <div className="flex flex-col justify-around text-right order-2 sm:order-1 my-2">
                <p className="text-black text-[13px] md:text-[15px] mb-4">
                  کتاب Grammer in Use
                </p>

                <div className="flex flex-col Mxs:flex-row justify-end space-x-10">
                  <div className="flex space-x-2 order-2 Mxs:order-1 justify-end items-center">
                    <p
                      className="text-[10px] md:text-[13px]"
                      style={{ direction: "rtl" }}
                    >
                      آموزش انگلیسی
                    </p>
                    <div className="bg-[#0166ff] p-1 rounded-[5px]">
                      <CgNotes color="white" size={15} />
                    </div>
                  </div>

                  <div className="flex space-x-2 order-1 Mxs:order-2 justify-end items-center">
                    <p
                      className="text-[10px] md:text-[13px]"
                      style={{ direction: "rtl" }}
                    >
                      250،000 تومان
                    </p>
                    <div className="bg-[#0166ff] p-1 rounded-[5px]">
                      <MdOutlineDiscount color="white" size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FactorModal;
