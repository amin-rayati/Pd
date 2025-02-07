const Statistic = () => {
  return (
    <div className="bg-[#0166FF] p-5">
      <div className="w-[100%] sm:w-[100%] md:w-[80%] lg:w-[80%] m-auto">
        <div className="flex justify-around ">
          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-[25px]">8200</p>
            <p className="text-white text-[20px] text-center mt-5">قسمت دوره</p>
          </div>

          <div className="flex items-center">
            <div className="h-32 border-l-2 border-gray-300"></div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-[25px]">12200</p>
            <p className="text-white text-[20px] text-center mt-5">
              استاد آموزشی
            </p>
          </div>

          <div className="flex items-center">
            <div className="h-32 border-l-2 border-gray-300"></div>
          </div>

          <div className="flex flex-col items-center">
            <p className="text-white font-bold text-[25px]">1200</p>
            <p className="text-white text-[20px] text-center mt-5">دانش آموز</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
