import React from 'react'
import OtherHero from '../components/other-hero'
import About from '../components/about'
import Testimonial from '../components/testimonial'
import WhyChoose from '../components/why-choose'
import OurTeam from '../components/our-team'

const Page = () => {
  return (
    <>
      <OtherHero name="About Us" />

      <div className="mt-10">
        <About />
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 md:px-6 py-8">
        {[1, 2, 3, 4].map((_, i) => (
          <div
            key={i}
            className="py-10 shadow-lg rounded-md bg-[#679f1d] text-white flex flex-col justify-center items-center"
          >
            <h1 className="text-[30px]">40</h1>
            <p className="text-[18px]">Satisfied Client</p>
          </div>
        ))}
      </div>

      <div>
        <WhyChoose />
      </div>

      <div>
        <OurTeam />
      </div>

      <Testimonial />
    </>
  )
}

export default Page
    