'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiCloseLine } from "react-icons/ri";


const images = [
   '/gallery/IMG_8110.JPG',
  '/gallery/IMG_8490.JPG',
  '/gallery/IMG_8981.JPG',
  '/gallery/IMG_8364.jpg',
   '/gallery/IMG_8110.JPG',
  '/gallery/IMG_8490.JPG',
  '/gallery/IMG_8981.JPG',
  '/gallery/IMG_8364.jpg',
  '/gallery/IMG_8110.JPG',
  '/gallery/IMG_8490.JPG',
  '/gallery/IMG_8981.JPG',
  '/gallery/IMG_8364.jpg',
];

const Gallery = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const goToNext = () => {
    setPhotoIndex((photoIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setPhotoIndex((photoIndex - 1 + images.length) % images.length);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="gallery h-[100vh] py-6 mt-16">
        {/* Row 1 */}
        <div className="line1 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          {images.slice(0, 4).map((ele, i) => (
            <div
              key={i}
              className="relative photo1 h-full w-[25%] cursor-pointer"
              onClick={() => {
                setPhotoIndex(i);
                setIsOpen(true);
              }}
            >
              <Image fill className="object-cover object-center" src={ele} alt={`Gallery image ${i + 1}`} />
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="line2 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          {images.slice(4, 9).map((ele, i) => (
            <div
              key={i + 4}
              className="relative photo1 h-full w-[20%] cursor-pointer"
              onClick={() => {
                setPhotoIndex(i + 4);
                setIsOpen(true);
              }}
            >
              <Image fill className="object-cover object-center" src={ele} alt={`Gallery image ${i + 5}`} />
            </div>
          ))}
        </div>

        {/* Row 3 */}
        <div className="line3 h-[32%] flex md:gap-2 max-md:gap-1 md:py-1 max-md:py-[2px]">
          {images.slice(9, 12).map((ele, i) => (
            <div
              key={i + 9}
              className="relative photo1 h-full w-[33.33%] cursor-pointer"
              onClick={() => {
                setPhotoIndex(i + 9);
                setIsOpen(true);
              }}
            >
              <Image fill className="object-cover object-center" src={ele} alt={`Gallery image ${i + 10}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="relative">
            <img
              className="max-w-[90vw] max-h-[80vh] h-[80vw] w-[60vw] object-cover rounded"
              src={images[photoIndex]}
              alt={`Large view ${photoIndex + 1}`}
            />

            {/* Prev */}
            <button
              className="absolute top-1/2 left-2 transform -translate-y-1/2 text-xl h-10 w-10 bg-[#fff] rounded-full flex justify-center items-center"
              onClick={goToPrev}
            >
                <IoIosArrowBack className=' text-[#000] '/>
            </button>

            {/* Next */}
            <button
              className="absolute top-1/2 right-2 transform -translate-y-1/2 text-xl h-10 w-10 bg-[#fff] rounded-full flex justify-center items-center"
              onClick={goToNext}
            >
                <IoIosArrowForward className='text-[#000] '/>
            </button>

            {/* Close */}
            <button
              className="absolute top-4 right-4  text-3xl px-3 py-1 rounded-full"
              onClick={closeModal}
            >
                <RiCloseLine />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;

