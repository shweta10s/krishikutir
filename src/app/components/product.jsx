'use client';

import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';

const Product = () => {
  const [selectedSize, setSelectedSize] = useState('100 gm');
  const sizes = ['100 gm'];

  return (
    <div className="max-w-7xl mx-auto min-h-screen py-10 text-black">
      {/* Header */}
      <header className="w-full flex flex-col justify-center items-center text-center mb-10">
        <p className="text-[#4d7c0f] italic mb-2 text-[20px] sm:text-[24px] font-[400]">~ Our Products ~</p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Meet the founders driving <br /> our mission and shaping the future
        </h2>
      </header>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="bg-white rounded-2xl shadow-md p-4 space-y-4">
            {/* Image */}
            <div className="relative w-full h-64 rounded-xl overflow-hidden">
              <Image
                src="/background/blog-2.jpg"
                alt="Product Image"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Details */}
            <div>
              <div className="flex justify-between items-center">
                <h2 className="font-semibold text-lg">Sunflower</h2>
                <h2 className="font-semibold text-lg">Rs. 160</h2>
              </div>

              {/* Size Options */}
              <div className="flex flex-wrap gap-2 mt-2">
                {sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-xs px-3 py-1 rounded-full border ${
                      selectedSize === size
                        ? 'bg-orange-500 text-white border-orange-500'
                        : 'border-gray-300 text-gray-600'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nihil.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="tel:+918889305559"
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
              >
                Call Us
              </Link>
              <Link
                href="/shop/product"
                className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 flex justify-center items-center"
              >
                Know More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
