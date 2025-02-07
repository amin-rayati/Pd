import Image from "next/image";
import profile from "@/public/img/Home/profile.png";
import monitor from "@/public/img/Home/monitor.png";
import clock from "@/public/img/Home/clock.png";
const Service = () => {
  return (
    <div className="my-20 text-center">
      <h1 className="font-bold text-[30px]">بهترین خدمات آموزشی</h1>

      <div className="flex space-x-4 items-center justify-center m-5">
        <div className="h-[7px] w-6 bg-[#F5C362]"></div>
        <div className="h-[7px] w-20 bg-[#F5C362]"></div>
        <div className="h-[7px] w-80 bg-[#F5C362]"></div>
        <div className="h-[7px] w-20 bg-[#F5C362]"></div>
        <div className="h-[7px] w-6 bg-[#F5C362]"></div>
      </div>

      <p className="text-[#1e1e1ead] text-[17px]">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>

      <div
        className="w-[100%] lg:w-[80%] text-center my-10 mx-auto"
        style={{ justifyContent: "space-around" }}
      >
        <div className="flex flex-col  sm:flex-col  md:flex-row  lg:flex-row  mx-5">
          <div className="flex order-1 sm:order-1 md:order-3 lg:order-3 flex-col bg-white p-10 rounded-[25px] items-end m-2">
            <div className="bg-[#F13B8E] rounded-[15px] p-4 w-fit ">
              <Image src={monitor} alt="monitor" />
            </div>
            <p className="text-[20px] font-bold text-right my-5">
              کلاس‌های متعدد
            </p>
            <p className="text-[#1e1e1ead] text-[17px] text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="flex order-2 sm:order-2 md:order-2 lg:order-2 flex-col bg-white p-10 rounded-[25px] items-end m-2">
            <div className="bg-[#99BE47] rounded-[15px] p-4 w-fit ">
              <Image src={clock} alt="clock" />
            </div>
            <p className="text-[20px] font-bold text-right my-5">
              پشتیبانی کامل
            </p>
            <p className="text-[#1e1e1ead] text-[17px] text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
          <div className="flex order-3 sm:order-3 md:order-1 lg:order-1 flex-col bg-white p-10 rounded-[25px] items-end m-2">
            <div className="bg-[#0166FF] rounded-[15px] p-4 w-fit ">
              <Image src={profile} alt="profile" />
            </div>
            <p className="text-[20px] font-bold text-right my-5">
              استادان خبره
            </p>
            <p className="text-[#1e1e1ead] text-[17px] text-right">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
