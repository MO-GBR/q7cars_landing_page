import React from 'react'
import { testimonials } from '../Constants'

const Testimonials = () => {
  return (
    <section id='testimonials' className='flex justify-center items-start max-lg:flex-col-reverse max-lg:items-center'>
        <div className='testimonialsGrid'>
            {
                testimonials.map((testimonial, index) => (
                    <div className='testimonial' key={index}>
                        <img src={testimonial.avatarUrl} alt='testimonial' />
                        <p className='testimonialName'>{testimonial.name}</p>
                        <p>{testimonial.comment}</p>
                    </div>
                ))
            }
        </div>
        <div className='flexCenter'>
            <img src='car7.png' className='testimonialsImg'/>
            <img src="Shape3.svg" className='testimonialsImgBg' />
        </div>
    </section>
  )
}

export default Testimonials