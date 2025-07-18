import React from 'react';

const HeroSection = () => {
  return (
    <div className='relative w-full h-[100vh]'>
      {/* Background Image */}
      {/* <img 
        src="/hero-image/bg-mg.webp" 
        alt="Hero background"  
        className='h-full w-full object-cover rounded-xl opacity-25' 
      /> */}

      {/* Glassmorphism Overlay */}
      <div className='absolute top-0 left-0 h-full w-full flex justify-center items-center 
                      z-10 shadow-lg rounded-xl'>
     <div className='flex flex-col justify-center items-center'>
         <h1 className='text-[120px] text-[#29622b] font-bold mb-4'><span className='text-[#f5b00e]'>Micro</span>greens</h1>
        <p className='text-lg'>Experience the future of design with glassmorphism.</p>
     </div>
     {/* <div className='w-1/3 flex justify-center items-center'>
      <img src="/background/microgreens.png" alt="" />
     </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
