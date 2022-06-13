import React from 'react'
import './HmeStyles.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'
import Testimonials from '../Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Pricing/>
       <Testimonials/>
    </div>
  )
}

export default Home