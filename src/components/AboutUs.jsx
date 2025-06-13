'use client'
import React from 'react'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-[#0B0B0F] text-white px-11 " id='aboutus'>
      <h1 className="text-center text-5xl text-white ">About Us</h1>

      <div className="flex flex-col md:flex-row items-center justify-between px-4 gap-6 p-4">
        
        <div className="md:w-1/3 w-full">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://videos.openai.com/vg-assets/assets%2Ftask_01jxkx3e30eh1t5fc3x1k3hhxj%2F1749793555_img_2.webp?st=2025-06-13T04%3A17%3A49Z&se=2025-06-19T05%3A17%3A49Z&sks=b&skt=2025-06-13T04%3A17%3A49Z&ske=2025-06-19T05%3A17%3A49Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=aa5ddad1-c91a-4f0a-9aca-e20682cc8969&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=QoID2SXbun2a1d3HEQlPU3Pz5pTm%2FoSDjzth71u0kh4%3D&az=oaivgprodscus"
            alt="AI Visual"
          />
        </div>

        
        <div className="md:w-1/2 w-full space-y-6">
          <div>
            <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
            <p className="text-gray-300 text-lg">
              At Voice Overflow, we’re a passionate team of AI experts, designers, and innovators committed to transforming how businesses interact with their customers. Our intelligent chatbot solutions bring automation, personalization, and 24/7 support to your digital front door.
            </p>
          </div>

          <div className="bg-#[11161D] p-6 rounded-lg shadow-md border border-gray-700">
            <h3 className="text-xl font-semibold mb-2">👨‍💼 Founder's Note</h3>
            <p className="text-gray-300 italic">
              “As the founder, I believe AI is not just about automation—it's about enabling human potential. Let’s build something remarkable together.”
            </p>
            <p className="mt-4 text-right font-medium text-white">— Ankesh Rai, AI Expert</p>
          </div>
        </div>
      </div>
    </div>
  )
}
