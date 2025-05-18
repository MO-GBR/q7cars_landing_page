import React, { useRef, useEffect } from 'react'
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Subscribe1 = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        gsap.set(titleRef.current, {x: -300});
        gsap.to(titleRef.current, {
            x: 0,
            scrollTrigger: {
                trigger: titleRef.current,
                toggleActions: "play none none reverse"
            },
            duration: 2,
        });
    }, []);

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#subscribe",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true
            }
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0
        })
    });
    return (
        <div className="h-dvh w-screen" id="subscribe">
            <h1 className='subscribeHeading' ref={titleRef}>Stay in Touch</h1>
            <div className='subscribeImage mask-clip-path'>
                <img
                    src="car8.jpg"
                    alt="Background"
                    className="absolute left-0 top-0 size-full object-cover"
                />
            </div>
        </div>
    )
}

export default Subscribe1