'use client';
import { useState } from 'react';
import Image from 'next/image';

export default function WhyChoose() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const features = [
    {
      title: '100% Organic Product',
      content:
        'Our microgreens are 100% organic, grown without chemicals or pesticides, ensuring pure, safe, and nutrient-rich greens for your health.',
    },
    {
      title: 'Modern Farm',
      content:
        'A modern farm blending sustainable practices with innovation, producing fresh, nutrient-rich microgreens that nourish health and support a greener future.',
    },
    {
      title: 'Always Fresh Product',
      content:
        'Our microgreens are harvested daily, ensuring you receive fresh, flavorful, and nutrient-rich produce straight from our farm to your plate.',
    },
  ];

  return (
    <main className="py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4">
        {/* Left: Accordion Content */}
        <div>
          <p className="text-[#4d7c0f] italic mb-2 text-lg md:text-xl font-medium">
            ~ Why Choose us ~
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-snug">
            We Believe in Freshness You Can Taste Every Day
          </h2>
          <p className="text-gray-600 mb-6 text-sm md:text-base">
           At Krishi Kutir, freshness isn’t just a promise — it’s our passion. Every microgreen is grown with care, harvested at peak nutrition, and delivered the same day. From farm to plate, we ensure you enjoy vibrant flavours, crisp textures, and the pure goodness nature intended.
          </p>

          {features.map((feature, index) => (
            <div
              key={index}
              className="border-b border-green-200 pb-4 mb-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex items-start gap-3">
                <span className="text-[#4d7c0f] text-xl font-bold">
                  {openIndex === index ? '−' : '+'}
                </span>
                <h3 className="text-gray-800 font-semibold text-base md:text-lg">
                  {feature.title}
                </h3>
              </div>
              {openIndex === index && (
                <p className="text-sm text-gray-600 mt-2 ml-7">
                  {feature.content}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Right: Responsive Image Section */}
      
<div className="relative w-full flex items-center justify-center">
  {/* Brush Background */}
  <div className="absolute inset-0 flex items-center justify-center">
    <Image
      src="/background/whychoose-bg.png"
      alt="Background Brush"
      fill
      className="object-contain opacity-40"
    />
  </div>

  {/* Image container */}
  <div className="relative flex flex-col sm:flex-row sm:gap-6 items-center justify-center z-10">

    {/* Top Rotated Image */}
    <div className="bg-white shadow-lg rotate-[10deg] p-2 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[230px] md:h-[230px]">
      <Image
        src="/background/whychoose-1.jpg"
        alt="Top Image"
        width={230}
        height={230}
        className="w-full h-full object-cover rounded-md"
      />
    </div>

    {/* Bottom Rotated Image */}
    <div className="bg-white shadow-lg rotate-[-10deg] p-2 w-[130px] h-[130px] sm:w-[180px] sm:h-[180px] md:w-[210px] md:h-[210px] mt-4 sm:mt-0">
      <Image
        src="/background/whychoose-2.jpg"
        alt="Bottom Image"
        width={210}
        height={210}
        className="w-full h-full object-cover rounded-md"
      />
    </div>

  </div>
</div>


      </div>
    </main>
  );
}
