import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white flex flex-col justify px-6 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-6">
      <div className="flex items-center gap-3">
        <img src={logo} alt="Ignite Tech Logo" className="w-10 h-10" />
        <h2 className="text-lg font-semibold tracking-wide">Ignite Tech</h2>
      </div>

      <div className="flex items-center gap-4 text-2xl text-gray-400">
        <h1 className="text-base text-gray-300 hidden md:block">Follow Us</h1>
        <a href="#" aria-label="Facebook" className="hover:text-purple-400 transition-colors"><FaFacebook /></a>
        <a href="#" aria-label="Instagram" className="hover:text-purple-400 transition-colors"><FaInstagram /></a>
        <a href="#" aria-label="Twitter" className="hover:text-purple-400 transition-colors"><FaTwitter /></a>
        <a href="#" aria-label="LinkedIn" className="hover:text-purple-400 transition-colors"><FaLinkedin /></a>
      </div>
    </div>

    <div className="text-center text-gray-400 text-sm mt-6">
      © {new Date().getFullYear()} Ignite Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
