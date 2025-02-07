import DashSearchBar from "@/components/Dashboard-components/DashSearchBar";
import MainBanner from "@/components/Dashboard-components/MainBanner";
import { SlCalender } from "react-icons/sl";
import { PiMoneyWavy } from "react-icons/pi";
import { BiWallet } from "react-icons/bi";

const page = () => {
  return (
    <div>
      <MainBanner />
      <div className="text-center lg:w-[95%] my-20 mx-5 lg:mx-auto">
        <h1 className="font-bold text-[20px] md:text-[30px] text-right">
          حقوق و دستمزد
        </h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-5 md:w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-40 md:w-60 bg-[#F5C362]"></div>
        </div>

        <DashSearchBar page={"salary"} />

        <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button className="text-[#EA8C3A] rounded-[15px] py-2 px-4 border-[2px] border-[#EA8C3A] my-2 w-[190px] order-3 lg:order-none">
            در حال واریز
          </button>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p>بانک صادرات (2336 **** **** 6219)</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <BiWallet color="white" size={25} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p>1403/09/14</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p style={{ direction: "rtl" }}>14،500،000</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiMoneyWavy color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
            <div className="flex items-center gap-2 order-3 sm:order-1">
              <p>بانک صادرات (2336 **** **** 6219)</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <BiWallet color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-2 sm:order-2">
              <p>1403/09/14</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-1 sm:order-3">
              <p style={{ direction: "rtl" }}>14،500،000</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiMoneyWavy color="white" size={25} />
              </div>
            </div>
          </div>

          <p className="text-black font-bold my-2 order-1 lg:order-none">
            واریزی آذر ماه 1403
          </p>
        </div>

        <div className="flex flex-col items-end  lg:flex-row  lg:items-center justify-between bg-white rounded-[20px] p-3 my-5">
          <button className="text-[#348334] rounded-[15px] py-2 px-4 border-[2px] border-[#348334] my-2 w-[190px] order-3 lg:order-none">
            واریز شده
          </button>

          <div className="hidden lg:block">
            <div className="flex items-center gap-2 ">
              <p>بانک صادرات (2336 **** **** 6219)</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <BiWallet color="white" size={25} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p>1403/09/14</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="flex items-center gap-2">
              <p style={{ direction: "rtl" }}>14،500،000</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiMoneyWavy color="white" size={25} />
              </div>
            </div>
          </div>

          <div className="block lg:hidden flex flex-col items-end  sm:flex-row sm:items-center my-2 gap-5 order-2">
            <div className="flex items-center gap-2 order-3 sm:order-1">
              <p>بانک صادرات (2336 **** **** 6219)</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <BiWallet color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-2 sm:order-2">
              <p>1403/09/14</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <SlCalender color="white" size={25} />
              </div>
            </div>

            <div className="flex items-center gap-2 order-1 sm:order-3">
              <p style={{ direction: "rtl" }}>14،500،000</p>
              <div className="bg-[#0166ff] p-1 rounded-[5px]">
                <PiMoneyWavy color="white" size={25} />
              </div>
            </div>
          </div>

          <p className="text-black font-bold my-2 order-1 lg:order-none">
            واریزی آذر ماه 1403
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
