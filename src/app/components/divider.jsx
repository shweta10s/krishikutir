import Link from 'next/link';
import React from 'react';

const Divider = () => {
  return (
    <section className="w-full h-[50vh] relative mt-10">
      {/* Background Image */}
      <img
        src="/background/image-1.jpg"
        alt="Divider Background"
        className="h-full w-full object-cover absolute top-0 left-0 z-0"
      />

      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-50 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-white flex flex-col justify-center items-center md:grid md:grid-cols-3 gap-8">
        
        {/* Left Column - Heading */}
        <div className="flex justify-center items-center text-center md:text-left">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-semibold">
            Lorem ipsum dolor sit amet.
          </h2>
        </div>

        {/* Center Column - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/background/microgreens.png"
            alt="Microgreens"
            className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] object-contain"
          />
        </div>

        {/* Right Column - Text + Button */}
        <div className="flex flex-col justify-center items-center md:items-start gap-6 text-center md:text-left">
          <h3 className="text-base sm:text-lg md:text-xl max-w-[90%] md:max-w-[70%]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </h3>
          <Link href="/training" className="w-fit">
            <button className="bg-white text-[#4d7c0f] border-2 border-white px-6 py-3 rounded-full hover:bg-transparent hover:text-white transition duration-300">
              Enquire Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Divider;
