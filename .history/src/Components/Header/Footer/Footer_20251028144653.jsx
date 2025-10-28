import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => (
  <footer className="w-full bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white py-10">
    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      
      {/* Logo & Name */}
      <div className="flex items-center gap-3">
        <img
          src={logo}
          alt="Logo"
          className="w-12 h-12 rounded-full shadow-lg object-cover"
        />
        <h2 className="text-xl md:text-2xl font-bold tracking-wide text-purple-300">
          Ignite Tech
        </h2>
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-4">
        {[FaFacebook, FaInstagram, FaTwitter, FaLinkedin].map((Icon, idx) => (
          <div
            key={idx}
            className="w-10 h-10 flex items-center justify-center bg-gray-800 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-md cursor-pointer"
          >
            <Icon />
          </div>
        ))}
      </div>
    </div>

  
    <div className="text-center text-gray-400 text-sm mt-6">
      © {new Date().getFullYear()} Ignite Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
