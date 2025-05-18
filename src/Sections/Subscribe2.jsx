import React from 'react'
import { Button2 } from '../Components/Button'
import shape from "/Shape5.svg"
import icon from "/Shape6.svg"

const Subscribe2 = () => {
  return (
    <div className='h-screen w-screen flexCenter max-lg:flex-col max-lg:p-10'>
        <div className='flex items-end justify-center w-full'>
            <img src='car9.png' className='absolute h-auto max-w-full w-[500px]'/>
            <img src="Shape4.svg" className='h-auto max-w-full w-[400px]' />
        </div>
        <div className='w-full mr-10 p-10 border border-blue-950 g6 border-b-0 rounded-t-3xl max-lg:mt-10 max-lg:mr-3'>
            <div className='flex justify-around items-center'>
                <img src={shape} className='h-auto max-w-full w-[30px]'/>
                <input type='email' placeholder='youremail@example.com' className='w-full my-5 p-5 border-0 outline-0' />
                <Button2 title="Submit" icon={icon} />
            </div>
        </div>
    </div>
  )
}

export default Subscribe2