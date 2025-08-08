'use client';

import React from 'react';
import OtherHero from '../components/other-hero';
import Link from 'next/link';

const Page = () => {
  return (
    <>
      <OtherHero name="Training" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto min-h-[50vh] mt-10 px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Launch your Microgreens Business Today!
          </h1>
          <p className="text-base md:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptate.
          </p>
          <Link href="/contact">
            <button className="mt-2 px-5 py-2 text-lg text-white bg-[#4d7c0f] rounded hover:bg-[#3f670d] transition w-fit">
              Enquire Now
            </button>
          </Link>
        </div>

        <div className="w-full md:w-1/2 h-64 md:h-auto rounded-xl overflow-hidden bg-green-400">
          <img
            src="https://scontent-pnq1-2.xx.fbcdn.net/v/t39.30808-6/480372883_122210791916220555_3817455031184115277_n.jpg"
            alt="Microgreens Training"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 py-20">
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">40</h1>
          <p className="text-lg">Satisfied Client</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">40</h1>
          <p className="text-lg">Satisfied Client</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">40</h1>
          <p className="text-lg">Satisfied Client</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">40</h1>
          <p className="text-lg">Satisfied Client</p>
        </div>
      </div>

      {/* YouTube Video */}
      <div className="max-w-5xl mx-auto h-[40vh] sm:h-[50vh] md:h-[60vh] px-4">
        <iframe
          className="w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/TIDvflrxh8s"
          title="Microgreens Training Bangalore"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto text-black mt-20 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-[#4d7c0f]">
          How to Start a Microgreens Business
        </h1>

        <p className="mt-4 text-base md:text-lg">
          Have you considered going into business for yourself but thought it would be impossible?
          I’m here to tell you about an awesome business idea that requires little investment and
          only a small amount of space.
        </p>
        <p className="mt-4 text-base md:text-lg">
          When I started out with my business, I was not an expert grower. I had never even sold
          anything before. In fact, I had no idea what I was doing. But I had a desire to succeed.
          And because of that, I found the resources and confidence to make my business a reality.
        </p>
        <p className="mt-4 text-base md:text-lg">
          While growing microgreens might seem difficult, it is pretty simple once you get the
          hang of it.
        </p>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">What Are Microgreens?</h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Alias
          consequatur pariatur deleniti placeat officia architecto laborum ex sed.
        </p>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">
          You Can Become a Microgreens Farmer
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Alias
          consequatur pariatur deleniti placeat officia architecto laborum ex sed.
        </p>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">
          How to Start Selling Microgreens
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Alias
          consequatur pariatur deleniti placeat officia architecto laborum ex sed.
        </p>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">
          Is a Microgreens Business Right for You?
        </h2>
        <ul className="list-disc ml-6 mt-4 space-y-2 text-base md:text-lg">
          <li>You must be willing to learn and follow directions from experienced growers.</li>
          <li>You must have a little time to devote to growing and selling microgreens.</li>
          <li>You must be willing to seek out selling opportunities in your area.</li>
          <li>You must have a small amount of money to invest in seeds and supplies.</li>
        </ul>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">
          How to Start a Microgreen Business
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Alias
          consequatur pariatur deleniti placeat officia architecto laborum ex sed.
        </p>

        <h2 className="mt-10 text-2xl md:text-[34px] font-semibold">
          Get Started on Growing Your Business from Home
        </h2>
        <p className="mt-4 text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, deserunt. Alias
          consequatur pariatur deleniti placeat officia architecto laborum ex sed.
        </p>
      </div>
    </>
  );
};

export default Page;
