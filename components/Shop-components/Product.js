import Link from "next/link";
import Image from "next/image";
import shop1 from "@/public/img/Shop/shop1.png";
import shop2 from "@/public/img/Shop/shop2.png";
import shop3 from "@/public/img/Shop/shop3.png";
import shop4 from "@/public/img/Shop/shop4.png";

import { CgNotes } from "react-icons/cg";
import price from "@/public/img/Home/price.png";
import SearchBar from "../SearchBar/SearchBar";
const Product = () => {
  return (
    <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-9 order-2 sm:order-2 md:order-1 lg:order-1">
      <div className="hidden lg:block">
        <SearchBar />
      </div>

      <div className="grid grid-cols-12 text-center">
        {/* item1 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 mb-2">
          <Link href="/shop/1">
            <div className="relative bg-white rounded-[20px] shadow-lg  md:mx-3 lg:mx-3 p-2">
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
                <Image
                  src={shop1}
                  alt="shop1"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="rounded-t-[20px]"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p
                  className="font-bold text-[20px] text-black text-right"
                  style={{ lineHeight: "25px", direction: "rtl" }}
                >
                  کتاب Grammer in Use
                </p>

                <div className="flex-col mt-5">
                  <div className="flex items-center justify-end my-1">
                    <div className="flex mx-2">
                      <p>آموزش انگلیسی</p>
                    </div>
                    <Image src={price} alt="price" />
                  </div>
                  <div className="flex items-center justify-end my-1 space-x-3">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className="text-[15px] text-black leading-[15px]">
                      1,200,000
                    </p>
                    <CgNotes color="#0166FF" size={20} />
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 text-[#0166FF] text-bold text-[16px] border-[2px] border-[#0166FF] px-4 py-2 rounded-b-[15px] rounded-tl-[15px]">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* item2 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 mb-2">
          <Link href="/shop/2">
            <div className="relative bg-white rounded-[20px] shadow-lg  md:mx-3 lg:mx-3 p-2">
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
                <Image
                  src={shop2}
                  alt="shop2"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="rounded-t-[20px]"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p
                  className="font-bold text-[20px] text-black text-right"
                  style={{ lineHeight: "25px", direction: "rtl" }}
                >
                  کتاب Grammer in Use
                </p>

                <div className="flex-col mt-5">
                  <div className="flex items-center justify-end my-1">
                    <div className="flex mx-2">
                      <p>آموزش انگلیسی</p>
                    </div>
                    <Image src={price} alt="price" />
                  </div>
                  <div className="flex items-center justify-end my-1 space-x-3">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className="text-[15px] text-black leading-[15px]">
                      1,200,000
                    </p>
                    <CgNotes color="#0166FF" size={20} />
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 text-[#0166FF] text-bold text-[16px] border-[2px] border-[#0166FF] px-4 py-2 rounded-b-[15px] rounded-tl-[15px]">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </Link>
        </div>

        {/* item3 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 mb-2">
          <Link href="/shop/3">
            <div className="relative bg-white rounded-[20px] shadow-lg  md:mx-3 lg:mx-3 p-2">
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
                <Image
                  src={shop3}
                  alt="shop3"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="rounded-t-[20px]"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p
                  className="font-bold text-[20px] text-black text-right"
                  style={{ lineHeight: "25px", direction: "rtl" }}
                >
                  کتاب Grammer in Use
                </p>

                <div className="flex-col mt-5">
                  <div className="flex items-center justify-end my-1">
                    <div className="flex mx-2">
                      <p>آموزش انگلیسی</p>
                    </div>
                    <Image src={price} alt="price" />
                  </div>
                  <div className="flex items-center justify-end my-1 space-x-3">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className="text-[15px] text-black leading-[15px]">
                      1,200,000
                    </p>
                    <CgNotes color="#0166FF" size={20} />
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 text-[#0166FF] text-bold text-[16px] border-[2px] border-[#0166FF] px-4 py-2 rounded-b-[15px] rounded-tl-[15px]">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </Link>
        </div>
        {/* item4 */}
        <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-3 mb-2">
          <Link href="/shop/4">
            <div className="relative bg-white rounded-[20px] shadow-lg  md:mx-3 lg:mx-3 p-2">
              {/* Image Section */}
              <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
                <Image
                  src={shop4}
                  alt="shop4"
                  layout="fill"
                  objectFit="cover"
                  priority={true}
                  className="rounded-t-[20px]"
                />
              </div>

              {/* Content Section */}
              <div className="p-4">
                <p
                  className="font-bold text-[20px] text-black text-right"
                  style={{ lineHeight: "25px", direction: "rtl" }}
                >
                  کتاب Grammer in Use
                </p>

                <div className="flex-col mt-5">
                  <div className="flex items-center justify-end my-1">
                    <div className="flex mx-2">
                      <p>آموزش انگلیسی</p>
                    </div>
                    <Image src={price} alt="price" />
                  </div>
                  <div className="flex items-center justify-end my-1 space-x-3">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className="text-[15px] text-black leading-[15px]">
                      1,200,000
                    </p>
                    <CgNotes color="#0166FF" size={20} />
                  </div>
                </div>

                {/* Button */}
                <button className="w-full mt-4 text-[#0166FF] text-bold text-[16px] border-[2px] border-[#0166FF] px-4 py-2 rounded-b-[15px] rounded-tl-[15px]">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
