import { CiUser } from "react-icons/ci";

const Comments = () => {
  return (
    <div className="text-center lg:w-[65%] my-20 lg:mx-auto">
      <p className="text-[#0166FF] text-[17px] text-center font-bold">نظرات</p>
      <div className="bg-white rounded-[20px] p-10 my-5">
        {/* comment */}
        <div>
          <div className="flex flex-col justify-end items-center Mxs:flex-row Mxs:justify-between Mxs:items-center text-right Mxs:text-left">
            {/* Date */}
            <p className="text-gray-700 text-[13px] my-2 order-2 Mxs:order-1 w-full Mxs:w-auto">
              1402/07/15 - 14:31
            </p>

            {/* User Info */}
            <div className="flex items-center gap-2 my-2 order-1 Mxs:order-2 w-full Mxs:w-auto justify-end Mxs:justify-start">
              <p className="text-black">مرتضی شیرین زاده</p>
              <div className="bg-transparent rounded-full w-[40px] h-[40px] flex items-center justify-center border-[#0166ff] border-[2px]">
                <CiUser color="#0166ff" size={25} />
              </div>
            </div>
          </div>

          <p className="my-5 text-gray-700 text-[13px] text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
          <div className="h-[1px] w-full bg-[#6b728069] mt-5"></div>
        </div>

        {/* comment */}
        <div>
          <div className="flex flex-col justify-end items-center Mxs:flex-row Mxs:justify-between Mxs:items-center text-right Mxs:text-left">
            {/* Date */}
            <p className="text-gray-700 text-[13px] my-2 order-2 Mxs:order-1 w-full Mxs:w-auto">
              1402/07/15 - 14:31
            </p>

            {/* User Info */}
            <div className="flex items-center gap-2 my-2 order-1 Mxs:order-2 w-full Mxs:w-auto justify-end Mxs:justify-start">
              <p className="text-black">مرتضی شیرین زاده</p>
              <div className="bg-transparent rounded-full w-[40px] h-[40px] flex items-center justify-center border-[#0166ff] border-[2px]">
                <CiUser color="#0166ff" size={25} />
              </div>
            </div>
          </div>

          <p className="my-5 text-gray-700 text-[13px] text-right">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است.
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-wrap items-center my-5 ">
          <button className="bg-[#0166FF] text-white rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] w-[160px] my-1 mr-3">
            ثبت نظر
          </button>
          <button className="bg-[#ffffff] text-[#0166FF] rounded-[10px] py-2 px-4 border-[2px] border-[#0166FF] w-[160px] my-1 mr-3">
            سایر نظرات
          </button>
        </div>
      </div>
    </div>
  );
};

export default Comments;
