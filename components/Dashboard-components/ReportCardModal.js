import { IoMdClose } from "react-icons/io";

const NummberModal = ({ isModalReportOpen, closeModalReport }) => {
  const courseInfo = [
    { title: "آموزش زبان انگلیسی مقدماتی", label: "اسم دوره" },
    { title: "استاد حسین علی خانی", label: "اسم استاد" },
    { title: "1402/05/20 - 1402/07/25", label: "تاریخ دوره" },
    { title: "18", label: "نمره کلاسی" },
    { title: "17", label: "نمره میان ترم" },
    { title: "20", label: "نمره پایان ترم" },
  ];
  return (
    <div>
      {isModalReportOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModalReport}
        >
          <div
            className="bg-gray-100 p-6 rounded-[20px] w-[90%] max-w-md sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeModalReport}>
                <IoMdClose size={30} color="#6b728094" />
              </button>
            </div>

            <div className="text-center mb-5">
              <p className="text-black text-lg font-bold">کارنامه دوره</p>
            </div>

            {courseInfo.map((e, index) => {
              return (
                <div
                  key={index}
                  className="grid grid-cols-12 gap-2 sm:gap-5 my-5"
                >
                  <div className="col-span-12 order-2 sm:col-span-8 sm:order-1 md:col-span-8 md:order-1 lg:col-span-8 lg:order-1">
                    <div className="bg-white rounded-[10px] py-3 text-center">
                      <p className="text-black">{e.title}</p>
                    </div>
                  </div>
                  <div className="col-span-12 order-1 sm:col-span-4 sm:order-2 md:col-span-4 md:order-2 lg:col-span-4 lg:order-2">
                    <div className="bg-white rounded-[10px] py-4 text-center">
                      <p className="text-gray-500 text-[12px]">{e.label}</p>
                    </div>
                  </div>
                </div>
              );
            })}

            <button className="text-[#348334] font-bold">قبول شده</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default NummberModal;
