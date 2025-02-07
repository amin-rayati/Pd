"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return (
    <>
      <header className="bg-white">
        <div className="flex items-center justify-end sm:justify-between md:justify-between lg:justify-between  p-4">
          <div
            className="hidden  sm:flex md:flex lg:flex items-center space-x-2"
            style={{ justifyContent: "space-between" }}
          >
            <Link href="/login">
              <button className="bg-[#F5C362] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362]">
                ورود / ثبت نام
              </button>
            </Link>
            <button className="bg-[#ffffff] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362]">
              استخدام استاد
            </button>
          </div>

          {/* Hamburger menu for small screens */}
          <button
            className="block lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <GiHamburgerMenu color="black" size="35" />
          </button>

          {/* Sidebar */}
          <div
            className={`fixed top-0 right-0 h-full w-3/4 bg-[#F5C362] transform ${
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            } transition-transform duration-300 ease-in-out z-50 block lg:hidden`}
          >
            <button
              className="text-white text-5xl p-4"
              onClick={() => setSidebarOpen(false)}
            >
              &times; {/* Close icon */}
            </button>
            <nav
              className="flex flex-col space-y-5 px-6"
              style={{ alignItems: "self-end" }}
            >
              <Link href="/">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">خانه</p>
                </div>
              </Link>
              <Link href="/departments">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">دپارتمان ها</p>
                </div>
              </Link>

              <Link href="/blog">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">مطالب آموزشی</p>
                </div>
              </Link>

              <Link href="/shop">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">فروشگاه</p>
                </div>
              </Link>

              <Link href="/aboutUs">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">درباره ما</p>
                </div>
              </Link>

              <Link href="/contactUs">
                <div className="flex  items-center p-2 hover:bg-[#b0063a] rounded-md transition duration-300">
                  <p className="text-white hover:text-white">تماس با ما</p>
                </div>
              </Link>

              <Link href="/login">
                <button className="block  sm:hidden md:hidden lg:hidden bg-[#ffffff] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362]">
                  ورود/ثبت نام
                </button>
              </Link>
              <button className="block  sm:hidden md:hidden lg:hidden bg-[#ffffff] rounded-[15px] py-2 px-4 border-[2px] border-[#F5C362]">
                استخدام استاد
              </button>
            </nav>
          </div>

          {/* Standard nav for larger screens */}
          <nav className="hidden lg:flex space-x-10">
            <Link href="/contactUs">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">تماس با ما</p>
              </div>
            </Link>

            <Link href="/aboutUs">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">درباره ما</p>
              </div>
            </Link>

            <Link href="/shop">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">فروشگاه</p>
              </div>
            </Link>

            <Link href="/blog">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">مطالب آموزشی</p>
              </div>
            </Link>

            <Link href="/departments">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">دپارتمان ها</p>
              </div>
            </Link>

            <Link href="/">
              <div className="flex  items-center p-2 cursor-pointer rounded-md transition duration-300">
                <p className="text-black hover:text-black">خانه</p>
              </div>
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
