import React from 'react'

const About = () => {
  return (
    <>
  <div className='relative w-full md:h-[100vh] 2xl:h-[80vh] bg-[#fff]'>
    <div className='max-w-6xl mx-auto h-full flex justify-center items-center gap-4'>
      <div className="left w-1/2 h-full flex justify-center items-center">
        
          <img src="/background/microgreens.png" alt="" className='w-full'/>
        
      </div>
      <div className="right w-1/2 h-full flex flex-col justify-center">
<h1 className='text-[20px] text-[#000] '>ABOUT US</h1>
<h2 className='text-[40px] text-[#29622b] font-bold mb-3 leading-[50px]'>The  Best Choice for your  Business.</h2>
<p className='text-[#474747] text-[16px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique nulla dolorum saepe vero vel hic nemo. Minima accusamus, quibusdam dolore alias animi inventore repellat nulla molestias doloribus. Blanditiis, itaque sunt!</p>
<div className='grid grid-cols-2 gap-4 mt-4'>
<div className='grid grid-rows-2  gap-4'>
  <div className=' px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
    <img src="/images/plant.png" alt="" className='h-10'/>
    <div>
      <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
    <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
    </div>
  </div>
  <div className=' px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
    <img src="/images/plant.png" alt="" className='h-10'/>
    <div>
      <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
    <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
    </div>
  </div>
</div>
<div className='grid grid-rows-2  gap-4'>
  <div className=' px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
    <img src="/images/plant.png" alt="" className='h-10'/>
    <div>
      <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
    <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
    </div>
  </div>
  <div className=' px-2 py-4 flex justify-center items-center gap-4 shadow-sm'>
    <img src="/images/plant.png" alt="" className='h-10'/>
    <div>
      <h1 className="text-[#29622b] text-[20px] font-semibold">100% Natural</h1>
    <p className="text-[#474747] text-[14px]">Lorem ipsum dolor sit amet. Lorem ipsum.</p>
    </div>
  </div>
</div>
</div>
      </div>
    </div>
</div>
    </>
  )
}

export default About