import Image from "next/image";
import about from "@/public/img/Home/about.png";
const About = () => {
  return (
    <div className="grid grid-cols-12 text-center  lg:w-[95%] my-20 mx-5 lg:mx-auto">
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 my-5">
        <h1 className="font-bold text-[30px] text-right">درباره ما</h1>

        <div className="flex space-x-2 items-center justify-end my-5">
          <div className="h-[7px] w-4 bg-[#F5C362]"></div>
          <div className="h-[7px] w-10 bg-[#F5C362]"></div>
          <div className="h-[7px] w-64 bg-[#F5C362]"></div>
        </div>

        <p className="text-[#1e1e1ead] text-[17px] text-right">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی
          در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می
          طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
          الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
          صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
          شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
          اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          قرار گیرد.
        </p>
        <div className="flex mt-5 justify-center  md:mt-20 md:justify-start lg:mt-20  lg:justify-start">
          <button className="bg-[#F5C362] rounded-[10px] py-2 px-4 border-[2px] border-[#F5C362]">
            مطالعه بیشتر
          </button>
        </div>
      </div>
      <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 my-5">
        <div className="flex justify-center">
          <Image
            src={about}
            alt="about"
            className="w-[100%] md:w-[90%] lg:w-[95%]"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
