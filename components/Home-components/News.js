import Image from "next/image";
import course1 from "@/public/img/Home/course1.png";
import course2 from "@/public/img/Home/course2.png";
import course3 from "@/public/img/Home/course3.png";
import course4 from "@/public/img/Home/course4.png";
import { CiClock2 } from "react-icons/ci";

const News = ({ title }) => {
  return (
    <div className="my-20 text-center">
      <h1 className="font-bold text-[30px]">{title}</h1>

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

      <div className="grid grid-cols-12 text-center  lg:w-[95%] my-10 mx-5 lg:mx-auto">
        {/* item1 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 my-5">
          <div className="relative text-white gap-2 mx-3 mt-2">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course1}
                alt="course1"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                  آموزش و یادگیری
                </button>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>

        {/* item2 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 my-5">
          <div className="relative text-white gap-2 mx-3 mt-2">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course2}
                alt="course2"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                  آموزش و یادگیری
                </button>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>

        {/* item3 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 my-5">
          <div className="relative text-white gap-2 mx-3 mt-2">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course3}
                alt="course3"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                  آموزش و یادگیری
                </button>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>

        {/* item4 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 my-5">
          <div className="relative text-white gap-2 mx-3 mt-2">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course4}
                alt="course4"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <div className="flex  items-center justify-between ">
                <button className="mt-2 bg-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] text-[12px]">
                  آموزش و یادگیری
                </button>

                <div className="flex items-center justify-center mt-2">
                  <p className="text-[12px] mx-2 text-black leading-[15px]">
                    اردیبهشت 1403
                  </p>
                  <CiClock2 color="#0166FF" size={20} />
                </div>
              </div>

              <p
                className="font-bold text-[20px] text-black leading-[25px] mt-5 text-right"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
