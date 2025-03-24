'use client'
import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import { FiCopy } from "react-icons/fi";

const GetInTouch = () => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard!");
  };
  
  return (
    <div>
      <section className="bg-[#121212] text-white py-16 px-5 text-center">
      <h2 className="text-3xl md:text-4xl font-bold">Get in Touch</h2>
      <p className="text-gray-400 mt-2 text-lg">
        What's next? Feel free to reach out to me if you're looking for a developer, 
        have a query, or simply want to connect.
      </p>

      {/* Contact Info */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-center gap-3 text-lg">
          <FaEnvelope />
          <span className="font-semibold">bivekkarki@gmail.com</span>
          <FiCopy
            className="cursor-pointer hover:text-gray-400"
            onClick={() => copyToClipboard("bivekkarki@gmail.com")}
          />
        </div>

        <div className="flex items-center justify-center gap-3 text-lg">
          <FaPhone />
          <span className="font-semibold">+977 980500565</span>
          <FiCopy
            className="cursor-pointer hover:text-gray-400"
            onClick={() => copyToClipboard("+977 980500565")}
          />
        </div>
      </div>

      {/* Social Links */}
      <p className="mt-6 text-gray-400">You may also find me on these platforms!</p>
      <div className="mt-3 flex justify-center gap-5 text-2xl">
        <FaTwitter className="cursor-pointer hover:text-blue-500" />
        <FaGithub className="cursor-pointer hover:text-gray-400" />
        <FaLinkedin className="cursor-pointer hover:text-blue-700" />
      </div>
    </section>
    </div>
  )
}

export default GetInTouch
