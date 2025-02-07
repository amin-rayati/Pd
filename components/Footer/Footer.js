import React from "react";
import logoImg from "@/public/img/footer/footer.png";
import clapImg from "@/public/img/footer/vector.png";
import Image from "next/image";
import { MdOutlineCircle, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0166FF]">
        <div className="grid grid-cols-12  items-center p-10 items-baseline">
          {/* leftside */}
          <div className="col-span-12 order-2 sm:col-span-12 sm:order-2 md:col-span-12 md:order-2 lg:col-span-8 lg:order-1 grid grid-cols-12 justify-around ">
            {/* contact */}
            <div className="col-span-12 order-3 sm:col-span-4 sm:order-1 md:col-span-4 md:order-1 lg:col-span-4 lg:order-1 mt-5">
              <p className="text-white text-[20px] text-end">تماس با ما</p>
              <div className="flex items-center justify-start mt-5">
                <BsTelephoneFill color="white" />
                <p className="text-white mx-2 text-[12px]">
                  02128849563 - 09124236789
                </p>
              </div>
              <div className="flex items-center justify-start mt-5">
                <MdEmail color="white" />
                <p className="text-white mx-2 text-[12px]">email@support.com</p>
              </div>
              <div className="flex flex-wrap  mt-5">
                <div className="bg-[#287eff] m-1 rounded-[5px] p-4">
                  <IoLogoWhatsapp color="white" size={25} />
                </div>
                <div className="bg-[#287eff] m-1 rounded-[5px] p-4">
                  <IoLogoLinkedin color="white" size={25} />
                </div>
                <div className="bg-[#287eff] m-1 rounded-[5px] p-4">
                  <FaTelegramPlane color="white" size={25} />
                </div>
                <div className="bg-[#287eff] m-1 rounded-[5px] p-4">
                  <RiInstagramFill color="white" size={25} />
                </div>
              </div>
            </div>

            {/* access */}
            <div className="col-span-12 order-2 sm:col-span-4 sm:order-1 md:col-span-4 md:order-1 lg:col-span-4 lg:order-1 mt-5">
              <p className="text-white text-[20px] text-end">دسترسی سریع</p>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">دوره ها</p>
                <Image src={clapImg} alt="clapImg" />
              </div>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">فروشگاه</p>
                <Image src={clapImg} alt="clapImg" />
              </div>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">ثبت نام استاد</p>
                <Image src={clapImg} alt="clapImg" />
              </div>
            </div>

            {/* service */}
            <div className="col-span-12 order-1 sm:col-span-4 sm:order-1 md:col-span-4 md:order-1 lg:col-span-4 lg:order-1 mt-5">
              <p className="text-white text-[20px] text-end">خدمات</p>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">پرسسش های متداول</p>
                <MdOutlineCircle color="white" />
              </div>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">قوانین و مقررات</p>
                <MdOutlineCircle color="white" />
              </div>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">پرسسش های متداول</p>
                <MdOutlineCircle color="white" />
              </div>
              <div className="flex items-center justify-end mt-5 ">
                <p className="text-white mx-2 text-[12px]">پرسسش های متداول</p>
                <MdOutlineCircle color="white" />
              </div>
            </div>
          </div>

          {/* rightside */}
          <div className="col-span-12 order-1 sm:col-span-12 sm:order-1 md:col-span-12 md:order-1 lg:col-span-4 lg:order-2 mt-5">
            <div
              className="flex flex-col mt-5"
              style={{ alignItems: "flex-end" }}
            >
              <div className="flex items-center justify-end">
                <p className="text-white mx-5 text-[20px]">پویندگان دانش</p>
                <Image
                  src={logoImg}
                  alt="footerImg"
                  className="rounded-lg object-contain"
                />
              </div>
              <p
                className="text-white mt-5 text-end text-[12px] lg:w-3/4 "
                style={{ lineHeight: "30px" }}
              >
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
                در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
                نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
                کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان
                جامعه و متخصصان را می طلبد.
              </p>
            </div>
          </div>

          <div className="col-span-12  order-3 bg-[#287eff] rounded-[10px] p-4 my-5">
            <p className="text-white text-center">
              تمامی حقوق برای شرکت <strong>پویندگان دانش</strong> می باشد
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
