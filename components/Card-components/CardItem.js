import { FaPlus, FaMinus } from "react-icons/fa6";
import Image from "next/image";
import shop1 from "@/public/img/Shop/shop1.png";
import { CgNotes } from "react-icons/cg";
const CardItem = () => {
  return (
    <div className="bg-white rounded-[20px] p-4 flex flex-col sm:flex-row justify-between mb-5">
      <div className="flex items-center space-x-5 justify-end order-2 sm:order-1 sm:justify-right">
        <button className="bg-[#EAEAEA] p-3 rounded-[10px]">
          <FaMinus />
        </button>

        <p>1</p>

        <button className="bg-[#0166ff] p-3 rounded-[10px]">
          <FaPlus color="white" />
        </button>
      </div>

      <div className="flex flex-col sm:flex-row space-x-3 order-1 sm:order-2 my-1 items-end">
        <div className="flex flex-col justify-around text-right order-2 sm:order-1 my-2">
          <p className="text-black text-[17px] md:text-[20px] mb-4">
            کتاب آموزش زبان انگلیسی Grammer In Use
          </p>

          <div className="flex flex-col Mxs:flex-row justify-end space-x-10">
            <div className="flex space-x-2 order-2 Mxs:order-1 justify-end">
              <p
                className="text-[15px] md:text-[18px]"
                style={{ direction: "rtl" }}
              >
                250،000 تومان
              </p>
              <CgNotes color="#0166ff" size={20} />
            </div>
            <div className="flex space-x-2 order-1 Mxs:order-2 justify-end">
              <p
                className="text-[15px] md:text-[18px]"
                style={{ direction: "rtl" }}
              >
                آموزش انگلیسی
              </p>
              <CgNotes color="#0166ff" size={20} />
            </div>
          </div>
        </div>

        <div className="flex bg-[#F9FAFC] p-3 rounded-[10px] order-1 sm:order-2 my-2 w-[160px] sm:w-[80px] h-auto">
          <Image
            src={shop1}
            alt="shop1"
            className="w-[160px] sm:w-[80px] h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
