import { HiOutlineLocationMarker } from "react-icons/hi";
import CardItem from "@/components/Card-components/CardItem";
const page = () => {
  return (
    <div className="text-center lg:w-[95%] my-10 mx-5 lg:mx-auto">
      <h1 className="font-bold text-[30px]">سبد خرید</h1>

      <div className="flex space-x-4 items-center justify-center m-5">
        <div className="h-[7px] w-10 bg-[#F5C362]"></div>
        <div className="h-[7px] w-60 bg-[#F5C362]"></div>
        <div className="h-[7px] w-10 bg-[#F5C362]"></div>
      </div>

      <div className="grid grid-cols-12 my-10 gap-5">
        {/* leftSide */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 order-2 lg:col-span-3 lg:order-1">
          {/* factor */}
          <div className="bg-white rounded-[20px] p-4">
            <p className="text-center text-black text-[18px]">توضیحات پرداخت</p>

            {/* address */}
            <div className="flex justify-end my-3 space-x-2 text-end">
              <p className="text-gray-600">
                سعادت آباد، بلوار دریا، رو به روی مسجد قدس، پلاک 57، واحد 5
              </p>
              <HiOutlineLocationMarker color="#0166ff" size={25} />
            </div>

            {/* with address */}
            <button className="rounded-[20px] border-2 border-[#0166ff] font-bold text-[#0166ff] w-full px-2 py-3 my-5">
              تغییر آدرس
            </button>

            {/* withOut address */}
            {/* <button className="rounded-[20px] border-2 border-[#0166ff] font-bold text-[#0166ff] w-full px-2 py-3 my-5">
              افزودن آدرس
            </button> */}

            <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

            {/* price */}

            <div className="flex justify-between my-5">
              <p style={{ direction: "rtl" }}>25،300،000 تومان</p>
              <p className="text-gray-500" style={{ direction: "rtl" }}>
                جمع مبالغ:
              </p>
            </div>

            <div className="flex justify-between my-5">
              <p style={{ direction: "rtl" }}>5،300،000 تومان</p>
              <p className="text-gray-500" style={{ direction: "rtl" }}>
                تخفیف خرید:
              </p>
            </div>

            <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

            <div className="flex justify-between my-5">
              <p style={{ direction: "rtl" }}>20،000،000 تومان</p>
              <p className="text-gray-500" style={{ direction: "rtl" }}>
                پرداختی نهایی:
              </p>
            </div>

            <button className="rounded-[20px] bg-[#0166ff] border-2 border-[#0166ff] font-bold text-white w-full px-2 py-3 my-5">
              پرداخت آنلاین
            </button>
          </div>
        </div>

        {/* rightSide */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 order-1 lg:col-span-9 lg:order-2">
          <CardItem />
        </div>
      </div>
    </div>
  );
};

export default page;
