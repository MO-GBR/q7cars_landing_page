import React from 'react'
import Header from './Components/Header'
import Hero from './Sections/Hero'
import AboutUs from './Sections/AboutUs'
import Features from './Sections/Features'
import Testimonials from './Sections/Testimonials'
import Subscribe1 from './Sections/Subscribe1'
import Subscribe2 from './Sections/Subscribe2'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Features />
      <Testimonials />
      <Subscribe1 />
      <Subscribe2 />
      <Footer />
    </div>
  )
}

export default App