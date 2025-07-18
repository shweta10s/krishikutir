import React from 'react'

const Navbar = () => {
  return (
    <>
       <nav className='absolute top-0 left-0 h-full w-full z-20'>
         <div className='max-w-7xl mx-auto flex justify-between items-center py-4 '>
            <img src="/logo/kk-logo.png" alt=""  className='h-16'/>
            <ul className='w-[50%] flex justify-between items-center text-[#8b4e25]'>
                <li>Home</li>
                <li>About</li>
                <li>Products</li>
                <li>Services</li>
                <li>Contact</li>
            </ul>
        </div> 
       </nav>
    </>
  )
}

export default Navbar