'use client';

import Image from 'next/image';
import { FaLeaf, FaHandHoldingHeart } from 'react-icons/fa';

export default function About() {
  return (
    <section className="bg-white py-10 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Image */}
        <div className="relative flex justify-center items-center">
          {/* Background swirl */}
          <div className="absolute flex justify-center items-center -z-10 w-full h-full max-w-[400px] sm:max-w-[500px] opacity-30">
            <Image
              src="/background/about-bg.png"
              alt="Decor"
              width={500}
              height={500}
              className="object-contain rotate-[240deg] w-full h-auto"
              priority
            />
          </div>

          {/* Main Circle Image */}
          <div className="relative rounded-full overflow-hidden border-4 border-[#4d7c0f] w-[70%] max-w-[380px] aspect-square">
            <Image
              src="/background/about.jpg"
              alt="Organic plants"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-[#4d7c0f] italic mb-2 text-lg sm:text-xl font-medium">
            ~ About us ~
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We believe in working with
            <br className="hidden sm:block" /> accredited farmers
          </h2>
          <p className="text-gray-700 mt-4 font-medium text-base sm:text-lg">
            Organic Foods and Café is a family-run company founded in 2004 that runs organic supermarkets.
          </p>
          <p className="text-gray-600 text-sm mt-3">
            Organic means growing our food without chemical aids during the growing process—no fertilizers, pesticides, fungicides, herbicides, or larvicides.
          </p>

          {/* Feature points */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex items-start space-x-3">
              <FaLeaf className="text-green-700 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Why Organic?</h4>
                <p className="text-sm text-gray-600">We’re making room for self-care today with a plan.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <FaHandHoldingHeart className="text-yellow-600 text-xl mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-gray-800">Speciality Produce</h4>
                <p className="text-sm text-gray-600">We’re making room for self-care today with a plan.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
