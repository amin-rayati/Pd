import Image from "next/image";
import bac from "@/public/img/Login/bacImg.png";
const LoginInfo = () => {
  return (
    <div className="relative col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 h-[1000px] hidden sm:hidden md:block lg:block md:order-1 lg:order-1">
      <Image
        src={bac}
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
    </div>
  );
};

export default LoginInfo;
