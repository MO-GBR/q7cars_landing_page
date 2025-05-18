import React, {useEffect, useRef} from 'react'
import { Button1 } from '../Components/Button'
import btnIcon from "/Shape.svg"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const box1 = useRef(null);
  const box2 = useRef(null);
  const box3 = useRef(null);
  const box4 = useRef(null);

  useEffect(() => {
    gsap.set(box1.current, {x: -300});
    gsap.to(box1.current, {
      x: 0,
      scrollTrigger: {
        trigger: box1.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });
    gsap.set(box2.current, {x: -300});
    gsap.to(box2.current, {
      x: 0,
      scrollTrigger: {
        trigger: box2.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });
    gsap.set(box3.current, {x: 300});
    gsap.to(box3.current, {
      x: 0,
      scrollTrigger: {
        trigger: box3.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });
    gsap.set(box4.current, {x: 300});
    gsap.to(box4.current, {
      x: 0,
      scrollTrigger: {
        trigger: box4.current,
        toggleActions: "play none none reverse"
      },
      duration: 1,
    });
  }, []);
  return (
    <section id='about' className='flexCenter flex-col p-5 overflow-x-hidden'>
        <div>
            <Button1 title="Show All Cars" icon={btnIcon} />
        </div>
        <div className='flexCenter max-lg:flex-col'>
          <div className='flexCenter flex-col'>
            <div className='aboutBox g2' ref = {box1}>
              <img src='car2.png' alt="car" className='miniCarImg' />
              <p>Start your journey with us <br/> Stand out with the most modern design</p>
            </div>
            <div className='aboutBox g2' ref = {box2}>
              <img src='car3.png' alt="car" className='miniCarImg' />
              <p>Next LVL ! Need for speed? <br /> We Got You</p>
            </div>
          </div>
          <img src='/car1.png' alt='Car' className='h-auto max-w-full w-2xl' />
          <div className='flexCenter flex-col'>
            <div className='aboutBox g2' ref = {box3}>
              <img src='car4.png' alt="car" className='miniCarImg' />
              <p>Easy to Deal with <br /> We have electric cars using the most modern tech</p>
            </div>
            <div className='aboutBox g2' ref = {box4}>
              <img src='car5.png' alt="car" className='miniCarImg' />
              <p>Find your type <br /> We got all colors and types so feel free to choose what fits you</p>
            </div>
          </div>
        </div>
    </section>
  )
}

export default AboutUs