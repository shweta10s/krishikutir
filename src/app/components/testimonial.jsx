'use client';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Sherri Horton',
    title: 'Founder',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=60',
    quote:
      '“I have always been an active member of the community but always felt like I could do so much more.”',
    bgColor: 'bg-yellow-100',
  },
  {
    name: 'Eiliyah Gould',
    title: 'Managing Director',
    image:
      'https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?w=600&auto=format&fit=crop&q=60',
    quote:
      '“I have been using the Organic Grocer for over a year now and I find the staff friendly and helpful with a good.”',
    bgColor: 'bg-green-100',
  },
  {
    name: 'Kevin Colin',
    title: 'Farmer',
    image:
      'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=600&auto=format&fit=crop&q=60',
    quote:
      '“My family has been eating organic fruit, veges and meat from The Organic Grocer since they started.”',
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
        We value the experimentation, the reformation of the message, and the smart incentives.
        We offer a variety of services and solutions Worldwide.
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
              <p className="text-gray-500 text-sm">{t.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
