import MainBannerSlider from "@/components/Home-components/MainBannerSlider";
import Statistic from "@/components/Home-components/Statistic";
import Service from "@/components/Home-components/Service";
import About from "@/components/Home-components/About";
import Course from "@/components/Home-components/Course";
import News from "@/components/Home-components/News";

export default function Home() {
  return (
    <div>
      <MainBannerSlider />
      <Statistic />
      <Service />
      <About />
      <Course />
      <News title={"آخرین اخبار"} />
    </div>
  );
}
