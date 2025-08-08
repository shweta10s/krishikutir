'use client';

import React, { useState } from 'react';
import OtherHero from '@/app/components/other-hero';
import Image from 'next/image';

const Page = () => {
  const [selectedSize, setSelectedSize] = useState('800 ml');
  const [showAll, setShowAll] = useState(false);

  const sizes = ['100 gm'];

  const products = new Array(8).fill({
    name: 'Sunflower',
    price: 160,
    image: '/background/blog-2.jpg',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum, nihil.',
  });

  const visibleProducts = showAll ? products : products.slice(0, 4);

  return (
    <div>
      <OtherHero name="Product" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 text-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {visibleProducts.map((product, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-md p-4 space-y-4">
              <div className="relative w-full h-64 sm:h-72 md:h-64 rounded-xl overflow-hidden min-h-[250px]">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              <div>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold text-lg">{product.name}</h2>
                  <h2 className="font-semibold text-lg">Rs. {product.price}</h2>
                </div>

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

                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <button className="bg-[#4d7c0f] text-white text-sm px-4 py-2 rounded-full hover:bg-green-700 transition">
                  Call Us
                </button>
                <button className="bg-orange-500 text-white text-sm px-4 py-2 rounded-full hover:bg-orange-600 transition">
                  Know More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm font-semibold text-orange-600 border border-orange-600 px-6 py-2 rounded-full hover:bg-orange-600 hover:text-white transition"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
