import About from "@/components/about";
import Features from "@/components/features";
import HeroSection from "@/components/hero-section";
import Provide from "@/components/services";
import WhyChoose from "@/components/why-choose";


export default function Home() {
  return (
    <div className="">
      <HeroSection />
      {/* <Features /> */}
      <Provide />
    <About />
    <WhyChoose />
    {/* <HomeService /> */}
    {/* <HomeProject /> */}
    {/* <HomeContact /> */}
     
     {/* <Whatsapp /> */}
     
    </div>
  );
}