import React from "react";
import logoImg from "@/public/img/footer/footer.png";
import Image from "next/image";
import Link from "next/link";
const LoginFooter = () => {
  return (
    <>
      <footer className="bg-[#0166FF]">
        <div className="items-center p-10 items-baseline">
          <div className="flex items-center justify-center">
            <p className="text-white mx-5 text-[20px]">پویندگان دانش</p>
            <Image
              src={logoImg}
              alt="footerImg"
              className="rounded-lg object-contain"
            />
          </div>

          <nav className="flex flex-wrap justify-end sm:justify-center space-x-10 my-10">
            <Link href="/contactUs">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">تماس با ما</p>
              </div>
            </Link>

            <Link href="/aboutUs">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">درباره ما</p>
              </div>
            </Link>

            <Link href="/shop">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">فروشگاه</p>
              </div>
            </Link>

            <Link href="/blog">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">مطالب آموزشی</p>
              </div>
            </Link>

            <Link href="/departments">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">دپارتمان ها</p>
              </div>
            </Link>

            <Link href="/">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-white hover:text-white">خانه</p>
              </div>
            </Link>
          </nav>

          <div className="col-span-12  order-3 bg-[#287eff] rounded-[10px] p-4 my-5">
            <p className="text-white text-center">
              تمامی حقوق برای شرکت <strong>پویندگان دانش</strong> می باشد
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LoginFooter;
