'use client';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Priya Verma',
    // title: 'Founder',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60',
    quote:
      '“Krishi Kutir microgreens have completely changed the way I eat! Fresh, crisp, and packed with flavor, they add such a healthy boost to my meals. I love knowing they’re pesticide-free and grown locally. Their delivery is always on time and the quality is unmatched. Highly recommended!”',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Sanjay Rathi',
    // title: 'Managing Director',
    image:
      'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=600&auto=format&fit=crop&q=60',
    quote:
      '“I started adding Krishi Kutir microgreens to my breakfast and salads, and I feel more energetic throughout the day. The freshness is incredible, and they last long in the fridge. Their customer service is also fantastic—they truly care about what they deliver. A must-try for every health lover!”',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Kavita Joshi',
    // title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&auto=format&fit=crop&q=60',
    quote:
      '“The sunflower and broccoli microgreens from Krishi Kutir are my absolute favorites! They taste amazing and make my dishes look so vibrant. Knowing they are grown organically without chemicals gives me peace of mind. Perfect for anyone wanting to eat clean and live healthy. 💚”',
    bgColor: 'bg-orange-100',
  },
];

export default function Testimonial() {
  return (
    <section className="max-w-7xl mx-auto mt-20 text-center">
      {/* Header */}
      <p className="text-[#4d7c0f] italic mb-2 text-[20px] sm:text-[24px] font-medium">~ Testimonials ~</p>
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
        Our Client Review
      </h2>
      <p className="text-gray-600 text-sm sm:text-base max-w-xl mx-auto">
       Discover what our happy customers say! Real stories, real experiences, and real results from enjoying our fresh, premium-quality microgreens every day.
      </p>

      {/* Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {testimonials.map((t, idx) => (
          <div key={idx} className="relative flex flex-col items-center">
            {/* Profile Image */}
            <div className="absolute -top-12 sm:-top-14">
              <img
                src={t.image}
                alt={t.name}
                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full border-4 border-white object-cover shadow-lg"
              />
            </div>

            {/* Card */}
            <div className={`${t.bgColor} pt-16 sm:pt-20 pb-6 px-6 rounded-md shadow-md w-full`}>
              <p className="text-sm text-gray-800 italic mb-4 min-h-[90px]">{t.quote}</p>
              <h4 className="font-semibold text-lg text-black">{t.name}</h4>
              {/* <p className="text-gray-500 text-sm">{t.title}</p> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
