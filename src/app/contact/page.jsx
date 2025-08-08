'use client';

import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import OtherHero from '../components/other-hero';
import toast, { Toaster } from 'react-hot-toast';

const Page = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    e.target.reset();
  };

  return (
    <>
      <OtherHero name="Contact Us" />
      <Toaster position="top-right" reverseOrder={false} />

      {/* Contact Info Cards */}
      <div className="max-w-7xl mx-auto my-16 px-4 sm:px-6 lg:px-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Address */}
        <a
          href="https://www.google.com/maps?q=30+Commercial+Road+Fratton,+Australia"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#78b943] hover:bg-[#3f670d] text-white p-10 rounded-tl-[60px] rounded-br-[60px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#78b943] rounded-full p-4 mb-4">
              <FaMapMarkerAlt size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Address:</h3>
            <p>Bhopal, Madhya Pradesh</p>
          </div>
        </a>

        {/* Phone */}
        <a
          href="tel:+91 8889305559"
          className="bg-[#78b943] hover:bg-[#3f670d] text-white p-10 rounded-tl-[60px] rounded-br-[60px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#78b943] rounded-full p-4 mb-4">
              <FaPhoneAlt size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Phone Number:</h3>
            <p>+91 8889305559</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:krishikutirbhopal@gmail.com"
          className="bg-[#78b943] hover:bg-[#3f670d] text-white p-10 rounded-tl-[60px] rounded-br-[60px] transition duration-300"
        >
          <div className="flex flex-col items-center text-center">
            <div className="bg-white text-[#78b943] rounded-full p-4 mb-4">
              <FaEnvelope size={24} />
            </div>
            <h3 className="text-lg font-bold mb-2">Mail Address:</h3>
            <p>krishikutirbhopal@gmail.com</p>
          </div>
        </a>
      </div>

      {/* Contact Form Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <p className="text-[#4d7c0f] italic mb-2 text-xl sm:text-2xl font-[400]">~ Contact Us ~</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Feel free to contact with<br className="hidden sm:block" /> us any time.
          </h2>
        </div>

        <form className="space-y-6 mt-10" onSubmit={handleSubmit}>
          {/* First and Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">First Name</label>
              <input
                type="text"
                placeholder="Enter your first name"
                className="p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                placeholder="Enter your last name"
                className="p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">E-Mail address</label>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-2 font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="9876543210"
                className="p-4 bg-gray-100 text-gray-700 rounded focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col">
            <label className="mb-2 font-medium text-gray-700">Type your message</label>
            <textarea
              rows="4"
              placeholder="Message..."
              className="p-4 bg-gray-100 text-gray-700 rounded resize-none focus:outline-none"
              required
            />
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-6 bg-orange-500 text-white font-semibold px-10 py-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Send your message
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Page;
