import React from 'react';

const Provide = () => {
  return (
    <div className='relative w-full md:h-[100vh] 2xl:h-[80vh] bg-[#fbf4e4]'>
      {/* Background Image */}
      <img 
        src="/background/mask-services.png" 
        alt="Services background"  
        className='w-full md:h-[100vh] 2xl:h-[80vh] object-cover opacity-25'
      />

      {/* Overlay Content */}
      <div className='absolute top-0 left-0 w-full h-full z-10 flex flex-col justify-center items-center'>
        <h1 className='text-[40px] text-[#000] font-bold'>Our Services</h1>
        <div className='max-w-6xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* Card 1 */}
          <div className="h-[400px] w-full bg-white rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center text-center py-4 px-6">
          <div className='bg-[#e8f5e9] rounded-full flex justify-center items-center p-4'>
              <img src="/images/plant.png" alt="" className='h-12'/>
          </div>
            <p className="text-[#000] text-[20px] font-semibold">Microgreen Kit</p>
            <p className="text-[#474747] text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cum reprehenderit distinctio aliquid laudantium, voluptates quia eveniet odit nihil magni!</p>
            <button className='py-3 px-10 mt-4 rounded-full border border-[#29622b] bg-[#29622b] hover:bg-transparent text-[#fff] hover:text-[#29622b]'>Enquire Now</button>
          </div>

          {/* Card 2 */}
         <div className="h-[400px] w-full bg-white rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center text-center py-4 px-6">
          <div className='bg-[#e8f5e9] rounded-full flex justify-center items-center p-4'>
              <img src="/images/plant.png" alt="" className='h-12'/>
          </div>
            <p className="text-[#000] text-[20px] font-semibold">Microgreen Class</p>
            <p className="text-[#474747] text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cum reprehenderit distinctio aliquid laudantium, voluptates quia eveniet odit nihil magni!</p>
           <button className='py-3 px-10 mt-4 rounded-full border border-[#29622b] bg-[#29622b] hover:bg-transparent text-[#fff] hover:text-[#29622b]'>Enquire Now</button>
          </div>

          {/* Card 3 */}
        <div className="h-[400px] w-full bg-white rounded-lg shadow-lg flex flex-col gap-3 items-center justify-center text-center py-4 px-6">
          <div className='bg-[#e8f5e9] rounded-full flex justify-center items-center p-4'>
              <img src="/images/plant.png" alt="" className='h-12'/>
          </div>
            <p className="text-[#000] text-[20px] font-semibold">Microgreen Product</p>
            <p className="text-[#474747] text-[16px]">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae cum reprehenderit distinctio aliquid laudantium, voluptates quia eveniet odit nihil magni!</p>
            <button className='py-3 px-10 mt-4 rounded-full border border-[#29622b] bg-[#29622b] hover:bg-transparent text-[#fff] hover:text-[#29622b]'>Enquire Now</button>
          </div>

          {/* Additional cards can go here */}
        </div>
      </div>
    </div>
  );
};

export default Provide;
