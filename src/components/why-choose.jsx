import React from 'react';

const WhyChoose = () => {
  return (
    <div className='relative h-[100vh] my-4'>
      {/* Background layout with split width */}
      <div className='flex h-full'>
        {/* Left empty space */}
        <div className='w-[30%]' />

        {/* Image on the right side */}
        <img
          src="/background/mg-background.png"
          alt="Why Choose Background"
          className='w-[70%] h-full object-cover rotate-180'
        />
      </div>

      {/* Overlay Layer */}
 <div className='absolute top-0 left-0 w-full h-full z-10 flex justify-start items-center'>
     <div className='max-w-7xl mx-auto h-full grid grid-cols-2 items-center'>
        <div className="left h-[90%] flex flex-col justify-center items-start px-4 bg-black/10 backdrop-blur-md rounded-lg">
                  <h1 className='text-[20px] text-[#000]'>Why Choose Us</h1>
                  <p className='text-[40px] text-[#29622b] font-bold mb-3 leading-[50px]'>Lorem ipsum dolor sit amet consectetur.</p>
                  <div className='grid grid-cols-2 gap-4 mt-4'>
  <div className='grid grid-rows-2 gap-4'>
    <div className='h-[180px] px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
      <img src="/images/plant.png" alt="" className='h-10'/>
      <div>
        <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
      <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
      </div>
    </div>
    <div className='h-[180px] px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
      <img src="/images/plant.png" alt="" className='h-10'/>
      <div>
        <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
      <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
      </div>
    </div>
  </div>
  <div className='grid grid-rows-2  gap-4'>
    <div className='h-[180px] px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
      <img src="/images/plant.png" alt="" className='h-10'/>
      <div>
        <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
      <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
      </div>
    </div>
    <div className='h-[180px] px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
      <img src="/images/plant.png" alt="" className='h-10'/>
      <div>
        <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
      <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
      </div>
    </div>
  </div>
  </div>
              </div>
              <div className="right h-[90%]">
              </div>
         </div>
      </div>
    </div>
  );
};

export default WhyChoose;
