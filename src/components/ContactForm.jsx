'use client'
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    industry: "",
    problem: "",
    day: "",
    time: "",
    source: "",
    phone: "",
    demoType: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const requiredFields = ["name", "email", "company", "industry", "problem", "day", "time", "source", "demoType"];
    for (const field of requiredFields) {
      if (!formData[field]) {
        toast.error(`Please fill out the ${field} field.`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const res = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        toast.success("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          industry: "",
          problem: "",
          day: "",
          time: "",
          source: "",
          phone: "",
          demoType: "",
          message: "",
        });
      } else {
        toast.error(result.error || "❌ Failed to send message.");
      }
    } catch (error) {
      toast.error("❌ Server error: " + error.message);
    }
  };

  return (
    <div className="bg-black text-white min-h-[40rem] flex justify-center items-center px-4 py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl bg-zinc-900 p-6 rounded-lg shadow-xl">
        <ToastContainer position="top-right" theme="dark" />

        <h2 className="text-3xl font-bold mb-6 text-center text-white">Book a Meeting</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className="bg-black text-white p-3 border border-zinc-700 rounded" />
          <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Email Address" className="bg-black text-white p-3 border border-zinc-700 rounded" />
          <input name="company" value={formData.company} onChange={handleChange} placeholder="Company Name" className="bg-black text-white p-3 border border-zinc-700 rounded" />
          <select name="industry" value={formData.industry} onChange={handleChange} className="bg-black text-white p-3 border border-zinc-700 rounded">
            <option value="">Select Industry</option>
            <option>Tech</option>
            <option>Finance</option>
            <option>Education</option>
            <option>Healthcare</option>
            <option>Other</option>
          </select>
          <select name="day" value={formData.day} onChange={handleChange} className="bg-black text-white p-3 border border-zinc-700 rounded">
            <option value="">Preferred Day</option>
            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((d) => (
              <option key={d}>{d}</option>
            ))}
          </select>
          <input name="time" type="time" value={formData.time} onChange={handleChange} className="bg-black text-white p-3 border border-zinc-700 rounded" />
          <input name="source" value={formData.source} onChange={handleChange} placeholder="How did you hear about us?" className="bg-black text-white p-3 border border-zinc-700 rounded" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number (optional)" className="bg-black text-white p-3 border border-zinc-700 rounded" />
        </div>

        <textarea name="problem" value={formData.problem} onChange={handleChange} placeholder="What problem are you trying to solve?" className="bg-black text-white p-3 border border-zinc-700 rounded w-full mt-4" rows="3" />

        <div className="mt-4">
          <label className="block mb-2 font-medium">Interested in:</label>
          <div className="flex gap-4">
            <label>
              <input type="radio" name="demoType" value="Demo" checked={formData.demoType === "Demo"} onChange={handleChange} className="mr-2" />
              Demo
            </label>
            <label>
              <input type="radio" name="demoType" value="Consultation" checked={formData.demoType === "Consultation"} onChange={handleChange} className="mr-2" />
              Consultation
            </label>
          </div>
        </div>

        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any additional message?" className="bg-black text-white p-3 border border-zinc-700 rounded w-full mt-4" rows="3" />

        <button type="submit" className="mt-6 w-full py-3 bg-white text-black font-semibold rounded hover:bg-gray-300 transition">
          Send
        </button>
      </form>
    </div>
  );
}
