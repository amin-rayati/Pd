"use client";

import "./globals.css";
import { usePathname } from "next/navigation";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import LoginFooter from "@/components/Login-components/LoginFooter";

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isAuth =
    pathname === "/login" ||
    pathname === "/signup" ||
    pathname.includes("/dashboard");

  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-gray-100">
        <Header />
        <div className="flex-grow w-full 2xl:container 2xl:mx-auto 2xl:max-w-screen-2xl 2xl:px-4">
          <main className="flex-grow">{children}</main>
        </div>
        {/* Render appropriate footer based on the page */}
        {!isAuth && <Footer />}
        {isAuth && <LoginFooter />}
      </body>
    </html>
  );
}
