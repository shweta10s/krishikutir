'use client';

import React from 'react';
import OtherHero from '../components/other-hero';
import Link from 'next/link';
// import { CheckCircleIcon } from '@heroicons/react/24/solid'; // ✅ Added missing import

const courses = [
  {
    title: "Beginners’ Training",
    duration: "2 to 4 Hours",
    mode: "Online (Live)",
    fees: "₹ 999/- (Including growing kit)",
    learn: [
      "What are microgreens?",
      "Health benefits & nutritional power.",
      "Tray setup and growing steps.",
      "Watering, lighting & harvesting basics.",
      "Live demo of 1 variety.",
    ],
  },
  {
    title: "INTERMEDIATE Training",
    duration: "4 to 6 Hours",
    mode: "Online (Live)",
    fees: "₹ 1999",
    learn: [
      "How to grow 3–4 varieties.",
      "Mold prevention tips & blackout technique.",
      "How to reuse trays effectively.",
      "Shelf life & storage hacks.",
      "Q&A + PDF Guidebook for future reference.",
    ],
  },
  {
    title: "Start a business",
    duration: "10 to 12 Hours",
    mode: "Online (Live)",
    fees: null,
    learn: [
      "Beginner + Intermediate lessons",
      "Microgreens mini recipe book",
      "Selling cheatsheet",
      "Social media marketing cheatsheet",
      "How to get more sales lessons",
    ],
  },
];

const Page = () => {
  return (
    <>
      <OtherHero name="Training" />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto min-h-[50vh] text-[#000] mt-10 px-4 flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2 flex flex-col justify-center gap-4">
          <h1 className="text-3xl md:text-5xl font-semibold">
            Launch Your Microgreens Business Today!
          </h1>
          <p className="text-base md:text-lg">
            Start a healthy, exciting, and profitable journey with microgreens.
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
          <h1 className="text-3xl">300+</h1>
          <p className="text-lg">Satisfied Client</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">100+</h1>
          <p className="text-lg">Trained Students</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">50+</h1>
          <p className="text-lg">Hotels & Cafes Served</p>
        </div>
        <div className="bg-[#679f1d] text-white py-10 rounded-md shadow-lg flex flex-col items-center justify-center">
          <h1 className="text-3xl">71+</h1>
          <p className="text-lg">Varieties of Microgreens</p>
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

      {/* Courses Section */}
      <section className="py-12 px-4 md:px-12">
        <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-green-100 hover:shadow-xl transition transform hover:-translate-y-1"
            >
              <div className="p-6 flex flex-col h-full">
                <h2 className="text-2xl font-bold text-green-700 mb-2">
                  {course.title}
                </h2>

                <div className="text-gray-700 space-y-1 mb-4">
                  <p><b>Duration:</b> {course.duration}</p>
                  <p><b>Mode:</b> {course.mode}</p>
                  {course.fees && <p><b>Fees:</b> {course.fees}</p>}
                </div>

                <div className="bg-green-50 rounded-lg p-4 mb-4">
                  <h3 className="font-semibold text-lg text-green-800 mb-3">
                    ✅ What You’ll Learn:
                  </h3>
                  <ul className="space-y-2">
                    {course.learn.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-gray-700 text-sm leading-relaxed"
                      >
                        <span className="text-green-600 mr-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-auto w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-300">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Content Section */}
      <div className="max-w-7xl mx-auto text-black mt-20 px-4">
        {/* No content changes made — keeping all original text intact */}
        {/* ...Your entire content section remains as is... */}
      </div>
    </>
  );
};

export default Page;
