import React from 'react'

const Hero = () => {
  return (
    <>
          {/* Background Blurs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-[#00C9A7] opacity-20 rounded-full filter blur-3xl z-0"></div>
      <div className="absolute top-60 right-10 w-72 h-72 bg-[#00C9A7] opacity-20 rounded-full filter blur-3xl z-0"></div>

      {/* Top Banner */}
      {/* <div className="bg-[#1A1A1A] text-center text-sm py-2 text-white border-b border-gray-700 relative z-10">
        <span className="mr-1">✨</span>
        Get your 10% discount on Pro+ plans • Expiring in
        <span className="ml-1 text-[#8B5CF6] font-semibold">14h : 58m : 57s</span>
        <button className="ml-4 px-4 py-1 bg-white text-black rounded-full font-semibold hover:bg-[#E5E7EB] transition">
          Claim Now
        </button>
      </div> */}
       <div className='mt-4'></div>
      {/* Navbar */}
      <nav className="w-4/5 mx-auto flex items-center justify-between px-6 py-4 border-b border-gray-700 relative z-10">
        <div className="flex items-center gap-2">
          <img
            src="https://assets-global.website-files.com/65673f72dd0b8d4bcbde0a0e/656a384340bbd44b3739e98a_Frame%20559538.svg"
            alt="OverlapsAi Logo"
            className="w-6 h-6"
          />
          <span className="font-semibold text-xl">OverlapsAi</span>
        </div>
        <ul className="hidden md:flex gap-6 text-sm text-[#E5E7EB]">
          <li className="hover:text-white cursor-pointer">Features</li>
          <li className="hover:text-white cursor-pointer">Pro</li>
          <li className="hover:text-white cursor-pointer">Updates</li>
          <li className="hover:text-white cursor-pointer">Blog</li>
          <li className="hover:text-white cursor-pointer">Community ↗</li>
          <li className="hover:text-white cursor-pointer">Your Account ↗</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="text-center px-4 py-20 relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Let AI Agents Chat Smarter <br /> for Every Industry
        </h1>

        {/* Action Buttons */}
        <div className="mt-8 mb-6 flex justify-center gap-4">
          <button className="px-6 py-3 rounded-full text-black font-semibold bg-white shadow-lg hover:bg-[#E5E7EB] transition">
            Get Started
          </button>
          <button className="px-6 py-3 rounded-full text-white font-semibold bg-[#374151] hover:bg-[#4B5563] transition">
            Learn More
          </button>
        </div>

        {/* Subtext */}
        <p className="text-[#D1D5DB] text-lg max-w-2xl mx-auto">
          OverlapsAi offers powerful chatbot solutions for customer support, sales, and automation. Launch agents that adapt and evolve with your needs.
        </p>
      </section>
    </>
  )
}

export default Hero
