import Image from 'next/image';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Microgreens Products',
      description: 'High-quality, organic microgreens freshly harvested for your health.',
      image: '/background/microgreens.png',
      bgColor: 'bg-yellow-100',
    },
    {
      title: 'Microgreens Kit',
      description: 'Start growing your own microgreens at home with our easy-to-use kit.',
      image: '/background/microgreens.png',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Microgreens Training',
      description: 'Join our training sessions and learn how to grow microgreens professionally.',
      image: '/background/microgreens.png',
      bgColor: 'bg-orange-100',
    },
  ];

  return (
    <main className="bg-white min-h-screen pt-10 ">
      {/* Header */}
      <section className="text-center mb-10">
        <p className="text-[#4d7c0f] italic mb-2 text-[20px] sm:text-[24px] font-[400]">
          ~ Our Service ~
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          All of our products are organic<br />& fresh.
        </h2>
      </section>

      {/* Service Cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            className={`${service.bgColor} rounded-xl p-6 flex flex-col justify-between shadow-md h-full`}
          >
            {/* Content + Image */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6">
              {/* Text */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>

              {/* Image */}
              <div className="md:w-1/2 flex justify-center md:justify-end">
                <Image
                  src={service.image}
                  alt={service.title}
                  width={180}
                  height={180}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Button */}
            <div className="flex justify-center md:justify-start">
              <Link href="/contact">
                <button className="bg-[#4d7c0f] text-white px-5 py-2 rounded hover:bg-[#3f670d] transition cursor-pointer text-sm sm:text-base">
                  Enquire Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
