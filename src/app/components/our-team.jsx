'use client';

import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa6';
import Link from 'next/link';
import Image from 'next/image';

export default function OurTeam() {
  const teamMembers = [
    {
      image: '/images/Rachna.jpeg',
      name: 'Rachna Alok Sharma',
      title: 'Founder',
      description:
        'At Krishi Kutir, we specialize in growing fresh, premium-quality microgreens in Bhopal. Founded by Rachna Alok Sharma, our farm is committed to sustainable and organic growing practices that prioritize freshness, health, and flavor.',
    },
    {
      image: '/images/Sonal.jpeg',
      name: 'Sonal Rajan',
      title: 'Co-Founder',
      description:
        'At Krishi Kutir, we specialize in growing fresh, premium-quality microgreens in Bhopal. Founded by Rachna Alok Sharma, our farm is committed to sustainable and organic growing practices that prioritize freshness, health, and flavor.',
    },
  ];

  return (
    <section className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <header className="w-full flex flex-col justify-center items-center text-center">
          <p className="text-[#4d7c0f] italic mb-2 text-xl md:text-2xl font-medium">
            ~ Our team ~
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Meet the founders driving <br /> our mission and shaping the future
          </h2>
        </header>

        {/* Team Members */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {teamMembers.map((person, idx) => (
            <article
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 150}
              className="flex flex-col md:flex-row rounded-[30px] border border-white/20 shadow-md overflow-hidden"
            >
              {/* Image */}
              <div className="md:w-[40%] w-full h-[280px] md:h-auto">
                <Image
                  src={person.image}
                  alt={`${person.name}'s photo`}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full md:rounded-l-[30px] max-md:rounded-t-[30px]"
                  priority
                />
              </div>

              {/* Content */}
              <div className="md:w-[60%] w-full flex flex-col justify-between p-5 sm:p-6 md:p-8 bg-white">
                <div>
                  <h4 className="text-black text-xl sm:text-2xl md:text-3xl font-semibold">
                    {person.name}
                  </h4>
                  <p className="text-[#4d7c0f] text-sm sm:text-base md:text-lg mt-1">
                    {person.title}
                  </p>
                  <hr className="my-3 border-white/20" />
                  <p className="text-[#5c5c5c] text-sm sm:text-base leading-relaxed">
                    {person.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
