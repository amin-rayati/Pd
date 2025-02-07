import Image from "next/image";
import bac from "@/public/img/ContactUs/bacImg.png";
import { BsTelephone } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { CiMail } from "react-icons/ci";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp, IoLogoLinkedin } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
const ContactInfo = () => {
  return (
    <div className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 h-[800px] order-1 sm:order-1 md:order-2 lg:order-2">
      <Image
        src={bac}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 bg-[#ffffffc4] p-8 rounded-[20px] shadow-lg  w-[90%] lg:w-[70%]">
          <h1 className="font-bold text-[30px] text-right">تماس با ما</h1>

          <div className="flex space-x-2 items-center justify-end my-5">
            <div className="h-[7px] w-5 bg-[#F5C362]"></div>
            <div className="h-[7px] w-40 bg-[#F5C362]"></div>
          </div>

          <div className="flex   items-center justify-end space-x-5 mt-5">
            <p className="text-right  ">021 3354 6621 - 021 2336 5669</p>
            <div className="bg-[#287eff3d] m-1 rounded-[5px] p-4 ">
              <BsTelephone color="#287eff" size={20} />
            </div>
          </div>
          <div className="flex   items-center justify-end space-x-5 mt-5">
            <p className="text-right ">
              تهران، خیابان بهشتی، بلوار حسینی راد، کوچه سوم غربی ساختمان
              آرمیتاژ، واحد دو تهران، خیابان بهشتی، بلوار حسینی راد، کوچه سوم
              غربی ساختمان آرمیتاژ، واحد دو تهران، خیابان بهشتی، بلوار حسینی
              راد، کوچه سوم غربی ساختمان آرمیتاژ، واحد دو
            </p>
            <div className="bg-[#287eff3d] m-1 rounded-[5px] p-4">
              <SlLocationPin color="#287eff" size={20} />
            </div>
          </div>
          <div className="flex items-center justify-end space-x-5 mt-5">
            <p className="text-right " style={{ lineBreak: "anywhere" }}>
              email@support.com
            </p>
            <div className="bg-[#287eff3d] m-1 rounded-[5px] p-4 ">
              <CiMail color="#287eff" size={20} />
            </div>
          </div>

          <div className="flex flex-wrap justify-center mt-5">
            <div className="bg-[#287eff] m-1 rounded-[10px] p-2">
              <IoLogoWhatsapp color="white" size={20} />
            </div>
            <div className="bg-[#287eff] m-1 rounded-[10px] p-2">
              <IoLogoLinkedin color="white" size={20} />
            </div>
            <div className="bg-[#287eff] m-1 rounded-[10px] p-2">
              <FaTelegramPlane color="white" size={20} />
            </div>
            <div className="bg-[#287eff] m-1 rounded-[10px] p-2">
              <RiInstagramFill color="white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
