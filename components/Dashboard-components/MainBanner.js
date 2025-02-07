import Image from "next/image";
import banner from "@/public/img/Dashboard/dashboardBanner.png";

function MainBanner() {
  return (
    <div>
      <Image
        src={banner}
        alt="Banner1"
        className="w-full h-auto object-contain"
      />
    </div>
  );
}

export default MainBanner;
