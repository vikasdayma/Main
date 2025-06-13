'use client';
import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0B0B0F] text-white py-12 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand & Description */}
        <div>
          <h2 className="text-2xl font-bold mb-2">Voice Overflow</h2>
          <p className="text-gray-400 text-sm">Empowering conversations with AI through smart, adaptive chatbots that enhance your user experience.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="#" className="hover:text-white transition-all duration-300">Home</a></li>
            <li><a href="#aboutus" className="hover:text-white transition-all duration-300">About Us</a></li>
            <li><a href="#services" className="hover:text-white transition-all duration-300">Services</a></li>
            <li><a href="#contact" className="hover:text-white transition-all duration-300">Contact</a></li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex gap-4 text-gray-400 text-xl">
            <a href="#" className="hover:text-blue-400 transition-all duration-300"><FaTwitter /></a>
            <a href="#" className="hover:text-blue-500 transition-all duration-300"><FaLinkedin /></a>
            <a href="#" className="hover:text-gray-300 transition-all duration-300"><FaGithub /></a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-gray-400 text-sm mb-3">Subscribe to our newsletter to get the latest updates on AI & chatbot solutions.</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-[#111] text-sm text-white px-3 py-2 rounded-l-md focus:outline-none border border-gray-700 w-full"
            />
            <button className="bg-white text-black px-4 py-2 text-sm rounded-r-md hover:bg-gray-300 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-xs">
        © {new Date().getFullYear()} Voice Overflow. All rights reserved.
      </div>
    </footer>
  );
}
