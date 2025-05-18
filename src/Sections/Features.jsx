import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Features = () => {
  const containerOneRef = useRef(null);
  const containerTwoRef = useRef(null);

  const { contextSafe } = useGSAP();
  
  const onMouseEnterHandle = contextSafe(({currentTarget}) => {
    gsap.to(currentTarget, {
      rotation: "+=720",
      duration: 2,
    });
  });

  useEffect(() => {
    gsap.set(containerOneRef.current, {x: -300});
    gsap.to(containerOneRef.current, {
      x: 0,
      scrollTrigger: {
        trigger: containerOneRef.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });

    gsap.set(containerTwoRef.current, {x: 300});
    gsap.to(containerTwoRef.current, {
      x: 0,
      scrollTrigger: {
        trigger: containerTwoRef.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });
  }, []);
  return (
    <section id='features' className='overflow-x-hidden overflow-y-hidden'>
      <div>
        <div className='flex items-center justify-around max-lg:flex-col max-lg:p-5'>
          <div className=' flexCenter w-[40%] max-lg:mb-5 max-lg:w-full' ref={containerOneRef}>
            <img src='car6.png' className='h-auto max-w-full w-[500px] absolute' alt='car6' />
            <img src='Shape7.svg' alt='bg' className='h-auto max-w-full w-[300px]' />
          </div>
          <div className='featuresContainer g5' ref={containerTwoRef}>
            <div className='feature g4'>
              <img src='Shape2.svg' className='featureShape' />
              <p>Modern Designs</p>
            </div>
            <div className='feature g4'>
              <img src='Shape2.svg' className='featureShape' />
              <p>All Types</p>
            </div>
            <div className='feature g4'>
              <img src='Shape2.svg' className='featureShape' />
              <p>Many Payment Methods</p>
            </div>
          </div>
        </div>
        <div className='flexCenter border-2 border-blue-950 m-10 g6 border-b-0 rounded-t-4xl max-lg:flex-col'>
          <div className='flexCenter'>
            <img src='wheel.png' className='featureWheel' onMouseEnter={onMouseEnterHandle} />
            <div className='g7 featureBox'>
              Next Lvl <br /> <br/>
              Cars will make you feel like you're driving in the future.
            </div>
          </div>
          <div className='flexCenter'>
            <img src='wheel.png' className='featureWheel' onMouseEnter={onMouseEnterHandle} />
            <div className='g7 featureBox'>
              Next Lvl <br /> <br/>
              Cars will make you feel like you're driving in the future.
            </div>
          </div>
          <div className='flexCenter'>
            <img src='wheel.png' className='featureWheel' onMouseEnter={onMouseEnterHandle} />
            <div className='g7 featureBox'>
              Next Lvl <br /> <br/>
              Cars will make you feel like you're driving in the future.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features