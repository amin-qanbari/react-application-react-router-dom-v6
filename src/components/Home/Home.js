import React from 'react'
import './HmeStyles.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Pricing/>
    </div>
  )
}

export default Home