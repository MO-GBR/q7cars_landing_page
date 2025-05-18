import React, {useEffect, useRef} from 'react'
import CarCanva from '../canvas/Car'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Hero = () => {
  const { contextSafe } = useGSAP();
  const messageOne = useRef(null);
  const messageTwo = useRef(null);

  useEffect(() => {
    gsap.to(messageOne.current, {
      top: "37vh",
      opacity: 1,
      duration: 1
    });
    gsap.to(messageTwo.current, {
      top: "70vh",
      opacity: 1,
      duration: 1
    });
  }, []);
  const onMouseEnterHandle = contextSafe(({currentTarget}) => {
    gsap.to(currentTarget, {
      width: "+=62vw",
      duration: 1,
    });
  });
  const onMouseLeaveHandle = contextSafe(({currentTarget}) => {
    gsap.to(currentTarget, {
      width: "18vw",
      duration: 1,
      repeat: 0
    });
  });
  return (
    <div className='heroContainer flexCenter'>
        <video
            src='BG.mp4'
            loop
            autoPlay
            muted
            className='heroBg'
        />
        <div
          className='heroMsg left-[20px] top-0'
          onMouseEnter={onMouseEnterHandle}
          onMouseLeave={onMouseLeaveHandle}
          ref={messageOne}
        >
          <p className='msg text-xl w-full'>Make your life easier</p>
        </div>
        <div
          className='heroMsg right-[20px] bottom-0'
          onMouseEnter={onMouseEnterHandle}
          onMouseLeave={onMouseLeaveHandle}
          ref={messageTwo}
        >
          <p className='msg text-xl w-full text-right'>Make your life easier</p>
        </div>
        <h1 className="heading heroTitle">Q7 Cars</h1>
        <div className='h-full w-full flexCenter'>
          <CarCanva />
        </div>
    </div>
  )
}

export default Hero