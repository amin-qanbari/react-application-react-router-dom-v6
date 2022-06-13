import React from 'react'
import './HmeStyles.css'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Pricing from '../Pricing/Pricing'
import Testimonials from '../Testimonials/Testimonials'
import Faq from '../Faq/Faq'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const Home = () => {
  return (
    <div>
       <Navbar/>
       <Hero/>
       <Pricing/>
       <Testimonials/>
       <Faq/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default Home