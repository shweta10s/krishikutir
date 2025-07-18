import { HiWrenchScrewdriver } from "react-icons/hi2";


export default function MaintenancePage() {
  return (
    <div>
      <div className="max-w-6xl  mx-auto md:flex-row items-center justify-center h-screen p-6 overflow-hidden">
        <img src="/maintenance/mg.png" alt="" className="absolute -top-50 -left-30 opacity-25 rotate-[295deg]" />
        {/* <img src="/maintenance/mg2.png" alt="" className="absolute bottom-20 right-0 opacity-25 rotate-[90deg]" /> */}

        
        {/* Left / Image */}
    <div className="flex justify-center items-center">
          <div className=" h-[320px] w-[320px] flex items-center justify-center mb-8 md:mb-0 bg-[#336d2462] rounded-full ">
          <HiWrenchScrewdriver className="text-[250px] text-[#fff]"/>
        </div>
    </div>
        
        {/* Right / Text */}
        <div className="w-full text-center flex flex-col justify-center items-center gap-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold text-black">
            We're under maintenance
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-gray-500">Our website is down for maintenance. We will be back shortly.</p>
          <a
            href="tel:8889305559"
            className="inline-block text-white hover:text-[#0d3f00] bg-[#0d3f00] font-medium border border-[#0d3f00] hover:bg-transparent py-3 px-5 md:py-4 md:px-6 rounded-xl transition"
          >
            Contact: +91 8889305559
          </a>
        </div>
      </div>
    </div>
  );
}
