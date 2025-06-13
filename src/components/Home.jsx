import React from 'react'
import Hero from "./Hero";
import PricingSection from "./PricingSection";
import HowItWorks from "./HowItWorks";
import AboutUs from './Aboutus';
import UseCase from "./UseCase";
import Footer from './Footer';
const Home = () => {
  return (
    <div>
    <Hero/>
    <HowItWorks/>
    <UseCase/>
    <PricingSection/>
    <AboutUs/>
    <Footer/>
  
    </div>
  )
}

export default Home
