'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { toast, Toaster } from 'react-hot-toast';

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { FaSquareXTwitter, FaLocationDot } from 'react-icons/fa6';
import { RiMailFill } from 'react-icons/ri';
import { IoCall } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }

    toast.success('Thank you for subscribing!');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#fef7e6] mt-20 pt-6 max-md:px-4">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="container max-w-7xl mx-auto flex flex-col gap-10">
        {/* Logo */}
        <div
          className="flex justify-center md:justify-between items-center flex-wrap gap-4"
          data-aos="fade-up"
        >
          <Link href="/" aria-label="Go to home">
            <div className="relative w-16 h-16 mx-auto md:mx-0">
              <Image
                src="/logo/kk-logo.png"
                alt="Logo"
                fill
                loading="lazy"
                className="object-contain"
              />
            </div>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Official Info */}
          <div
            className="flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] w-fit pb-1">
              Official Info
            </h4>
            <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base">
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaLocationDot className="w-4 h-4" />
                <span>Bhopal, Madhya Pradesh</span>
              </Link>
              <Link
                href="mailto:krishikutirbhopal@gmail.com"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <RiMailFill className="w-4 h-4" />
                <span>krishikutirbhopal@gmail.com</span>
              </Link>
              <Link
                href="tel:+918889305559"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <IoCall className="w-4 h-4" />
                <span>+91 8889305559</span>
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div
            className="flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] w-fit pb-1">
              Social Links
            </h4>
            <div className="flex flex-col gap-3 text-[#515151] text-sm md:text-base">
              <Link
                href="https://www.facebook.com/share/1C9eadexh8/"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaFacebookF className="w-4 h-4" />
                <span>Krishii Kutirr</span>
              </Link>
              <Link
                href="https://www.instagram.com/krishikutirbhopal?igsh=cHVwNm10bG5vbzR0"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaInstagram className="w-4 h-4" />
                <span>krishikutirbhopal</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/krishii-kutirr-bhopal-177b62374"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaLinkedinIn className="w-4 h-4" />
                <span>Krishii Kutirr Bhopal</span>
              </Link>
              <Link
                href="https://x.com/KrishiiKutirr"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaSquareXTwitter className="w-4 h-4" />
                <span>@KrishiiKutirr</span>
              </Link>
              <Link
                href="https://youtube.com/@krishiikutirr"
                className="flex items-center gap-3 hover:text-[#000]"
              >
                <FaYoutube className="w-4 h-4" />
                <span>KrishiiKutirr</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div
            className="flex flex-col gap-3"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <h4 className="text-[#78b943] font-bold text-lg md:text-xl mb-4 border-b-2 border-[#78b943] w-fit pb-1">
              Quick Links
            </h4>
            <div className="flex flex-col gap-2 text-[#515151] text-sm md:text-base">
              {['Home', 'About Us', 'Training'].map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#000] transition-colors"
                >
                  {link}
                </Link>
              ))}
              {/* Dropdown */}
              <div className="relative group">
                <div className="flex items-center hover:text-black cursor-pointer">
                  <Link
                    href="/shop"
                    className="flex items-center transition-colors"
                  >
                    Shop
                    <FaChevronDown className="ml-1 text-xs" />
                  </Link>
                </div>
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-200 shadow-lg rounded-md w-44 p-2 hidden group-hover:block z-50">
                  <Link
                    href="/shop/kit"
                    className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Kit
                  </Link>
                  <Link
                    href="/shop/product"
                    className="block px-3 py-1 text-gray-700 hover:bg-gray-100 rounded"
                  >
                    Product
                  </Link>
                </div>
              </div>
              {['Blog', 'Contact'].map((link, idx) => (
                <Link
                  key={idx}
                  href={`/${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="hover:text-[#000] transition-colors"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="max-w-7xl mx-auto mt-6 border-t-2 border-[#78b943] py-4">
        <p className="text-base sm:text-lg text-[#78b943] text-center">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="/" className="font-medium hover:underline transition-colors">
            Krishikutir
          </Link>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
