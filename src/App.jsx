import React from "react";
import Hero from "./components/Hero";
import PricingSection from "./components/PricingSection";
import HowItWorks from "./components/HowItWorks";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white font-sans overflow-hidden">
    <Hero/>
    <HowItWorks/>
    <PricingSection/>
   <ContactForm/>
   <ContactList/>
   <div>
    Hello its a Dashboard
   </div>
    </div>
  );
};

export default App;

