import { IoMdClose } from "react-icons/io";

const NummberModal = ({ isModalOpen, closeModal }) => {
  return (
    <div>
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-gray-100 p-6 rounded-[20px] w-[90%] max-w-md sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button onClick={closeModal}>
                <IoMdClose size={30} color="#6b728094" />
              </button>
            </div>

            <div className="text-center mb-5">
              <p className="text-black text-lg font-bold">وارد کردن نمره</p>
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-500 text-right">
                نمره میان ترم دانش آموز
              </label>
              <input
                type="text"
                className="p-3 border-none rounded-lg focus:outline-none my-3 text-right"
              />
            </div>

            <div className="flex justify-center mt-10">
              <button className="bg-[#0166ff] text-white px-4 py-3 rounded-[15px] w-full">
                تایید نمره
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NummberModal;
