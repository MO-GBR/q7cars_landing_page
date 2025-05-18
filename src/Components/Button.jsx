import React from 'react'

export const Button1 = ({title, icon}) => {
  return (
    <button className='flexCenter w-[30rem] p-5 bg-blue-950 rounded-lg border border-[#10103f] hover:cursor-pointer hover:bg-blue-900 before:bg-amber-50 before:p-5 before:absolute before:w-[0%] hover:before:scale-x-[1185%] before:-z-1 before:h-[12%] before:rounded-[5px] hover:before:transition-[transform] duration-500 before:opacity-0 hover:before:opacity-100'>
        <img src={icon} width={30} height={30} />
        <p className='text-xl'>{title}</p>
    </button>
  )
}

export const Button2 = ({title, icon}) => {
  return (
    <button className='flex items-center justify-around w-[40%] z-2 g1 p-5 rounded-2xl cursor-pointer hover:bg-gradient-to-r hover:from-blue-900 hover:to-zinc-500 before:p-5 before:absolute before:w-0 before:h-[12%] hover:before:w-[10%] before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-500 before:border before:border-blue-500 before:border-x-0'>
        <img src={icon} width={30} height={30} />
        <p className='text-xl'>{title}</p>
    </button>
  )
}
