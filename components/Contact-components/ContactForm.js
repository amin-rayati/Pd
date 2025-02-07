import React from "react";

const ContactForm = () => {
  return (
    <div className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 h-[800px] order-2 sm:order-2 md:order-1 lg:order-1">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative z-10 bg-[#ffffff] p-8 rounded-[20px] shadow-lg w-[90%] lg:w-[70%]">
          {/* Form */}
          <form className="space-y-6">
            <div className="flex flex-col items-right">
              <label
                htmlFor="email"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                نام و نام خانوادگی
              </label>
              <input
                type="text"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-5"
              />
            </div>
            <div className="flex flex-col items-right">
              <label
                htmlFor="email"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                آدرس ایمیل
              </label>
              <input
                type="email"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-5"
              />
            </div>
            <div className="flex flex-col items-right">
              <label
                htmlFor="email"
                className="text-[17px] text-right font-medium text-gray-700"
              >
                متن پیام
              </label>
              <textarea
                rows={5}
                type="text"
                className="p-4 text-black text-right border border-gray-300 rounded-[20px] bg-[#ffffff00] focus:outline-none mt-5"
              />
            </div>

            <button className="bg-[#F5C362] rounded-[15px] py-3 px-10 border-[2px] border-[#F5C362]">
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
