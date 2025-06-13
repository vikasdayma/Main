import React from 'react'
import Hero from "./Hero";
import PricingSection from "./PricingSection";
import HowItWorks from "./HowItWorks";
import Aboutus from './Aboutus'
import UseCase from "./UseCase";
import Footer from './Footer';
const Home = () => {
  return (
    <div>
    <Hero/>
    <HowItWorks/>
    <UseCase/>
    <PricingSection/>
    <Aboutus/>
    <Footer/>
  
    </div>
  )
}

export default Home
