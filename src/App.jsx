import React from "react";
import ContactForm from "./components/ContactForm";
import { Route,Routes } from "react-router";
import Home from "./components/Home";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0B0B0F] text-white font-sans overflow-hidden">
   
    <Routes>
      <Route path="/form" element={<ContactForm/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
   
    



    
    
   </div>

  
      


  );
};

export default App;

