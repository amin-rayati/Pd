import Image from "next/image";
import course1 from "@/public/img/Home/course1.png";
import course2 from "@/public/img/Home/course2.png";
import course3 from "@/public/img/Home/course3.png";
import course4 from "@/public/img/Home/course4.png";
import user from "@/public/img/Home/user.png";
import price from "@/public/img/Home/price.png";

const Course = () => {
  return (
    <div className="my-20 text-center">
      <h1 className="font-bold text-[30px]">دوره های آموزشی</h1>

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
              <p
                className="font-bold text-[25px] text-black leading-[25px] text-center"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-center">
                  <div className="flex  mx-2">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className=" text-[15px]  text-black leading-[15px]">
                      1,200,000
                    </p>
                  </div>

                  <Image src={price} alt="user" />
                </div>
                <div className="flex items-center justify-center">
                  <p className=" text-[15px] mx-2 text-black leading-[15px]">
                    امین رعیتی
                  </p>
                  <Image src={user} alt="user" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>

              <div className="flex mt-5">
                <button className="text-[#0166FF] text-bold text-[20px]">
                  مشاهده دوره
                </button>
              </div>
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
              <p
                className="font-bold text-[25px] text-black leading-[25px] text-center"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-center">
                  <div className="flex  mx-2">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className=" text-[15px]  text-black leading-[15px]">
                      1,200,000
                    </p>
                  </div>

                  <Image src={price} alt="user" />
                </div>
                <div className="flex items-center justify-center">
                  <p className=" text-[15px] mx-2 text-black leading-[15px]">
                    امین رعیتی
                  </p>
                  <Image src={user} alt="user" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>

              <div className="flex mt-5">
                <button className="text-[#0166FF] text-bold text-[20px]">
                  مشاهده دوره
                </button>
              </div>
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
              <p
                className="font-bold text-[25px] text-black leading-[25px] text-center"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-center">
                  <div className="flex  mx-2">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className=" text-[15px]  text-black leading-[15px]">
                      1,200,000
                    </p>
                  </div>

                  <Image src={price} alt="user" />
                </div>
                <div className="flex items-center justify-center">
                  <p className=" text-[15px] mx-2 text-black leading-[15px]">
                    امین رعیتی
                  </p>
                  <Image src={user} alt="user" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>

              <div className="flex mt-5">
                <button className="text-[#0166FF] text-bold text-[20px]">
                  مشاهده دوره
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* item4 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-3 my-5">
          <div className="relative text-white gap-2 mx-3 mt-2">
            <div className="relative w-full h-64 overflow-hidden rounded-t-[20px]">
              <Image
                src={course4}
                alt="course2"
                layout="fill"
                objectFit="cover"
                priority={true}
                className="rounded-t-[20px]"
              />
            </div>

            <div className="bg-white px-4 pt-4 pb-2 -mt-4 z-10 relative rounded-b-[20px] shadow-lg">
              <p
                className="font-bold text-[25px] text-black leading-[25px] text-center"
                style={{ lineHeight: "30px" }}
              >
                دوره آموزش مکالمه انگلیسی
              </p>

              <div className="flex items-center justify-between mt-5">
                <div className="flex items-center justify-center">
                  <div className="flex  mx-2">
                    <p className="text-[15px] text-[#1e1e1ead] leading-[15px]">
                      تومان
                    </p>
                    <p className=" text-[15px]  text-black leading-[15px]">
                      1,200,000
                    </p>
                  </div>

                  <Image src={price} alt="user" />
                </div>
                <div className="flex items-center justify-center">
                  <p className=" text-[15px] mx-2 text-black leading-[15px]">
                    امین رعیتی
                  </p>
                  <Image src={user} alt="user" />
                </div>
              </div>

              <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>

              <p className="text-[#1e1e1ead] text-right text-[17px] mt-5">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </p>

              <div className="flex mt-5">
                <button className="text-[#0166FF] text-bold text-[20px]">
                  مشاهده دوره
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-10 justify-center">
        <button className="bg-[#F5C362] rounded-[10px] py-2 px-4 border-[2px] border-[#F5C362]">
          مطالعه بیشتر
        </button>
      </div>
    </div>
  );
};

export default Course;
