import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[80vh] mt-[90px] overflow-hidden">
      {/* Background Image */}
      <img
        src="/hero-image/hero-bg.jpg"
        alt="Hero Background"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full px-4 md:px-8 lg:px-12 flex flex-col lg:flex-row items-center lg:items-stretch">
        
        {/* Left Side */}
        <div className="relative flex flex-col justify-center gap-6 w-full lg:w-1/2 text-white py-10 lg:py-0">
          <img
            src="/background/bg-1.png"
            alt="Decorative"
            className="absolute top-0 left-0 h-[150px] opacity-20"
          />
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold leading-tight lg:leading-[85px]">
            Fresh, Nutritious Microgreens Grown Just for You
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:w-[90%]">
            Boost your health with our premium, pesticide-free microgreens – harvested fresh and delivered straight to your doorstep. Taste the green revolution today!
          </p>
          <Link href="/contact" className="w-fit">
            <button className="bg-white text-[#4d7c0f] border-2 border-white px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-transparent hover:text-white transition duration-300">
              Enquire Now
            </button>
          </Link>
        </div>

        {/* Right Side */}
        <div className="relative w-full lg:w-1/2 flex justify-center items-end mt-8 lg:mt-0">
          <img
            src="/hero-image/hero-img.png"
            alt="Hero Image"
            className="w-full max-w-[500px] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
