import React from 'react'
import { navLinks } from '../Constants/index'

const Footer = () => {
  return (
    <div className='w-full h-[200px] flexCenter flex-col border-t-2 border-t-blue-900 rounded-t-3xl m-4 g6 max-lg:h-[280px]'>
        <img src='logo.png' className='h-auto max-w-full w-[200px]' />
        <div className='flex justify-around mb-5 w-full max-lg:flex-col max-lg:justify-center max-lg:items-center'>
            {
                navLinks.map((link, index) => (
                    <a key={index} href={link.href} className='font-semibold decoration-0 hover:text-blue-400'>{link.link}</a>
                ))
            }
        </div>
    </div>
  )
}

export default Footer