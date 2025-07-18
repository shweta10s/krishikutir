import React from 'react'

const Footer = () => {
  return (
    <>
        <div className='max-w-7xl mx-auto border-t-2 border-[#8b4e25] py-6 grid grid-cols-3'>
            <div>
                <img src="/logo/kk-logo.png" alt="" className='h-16' />
            </div>
            <div>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div>Address</div>
        </div>
    </>
  )
}

export default Footer