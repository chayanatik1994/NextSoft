import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png"; // adjust your logo path

const Footer = () => (
  <footer className="h-[183px] w-full bg-gray-900 text-white flex flex-col justify-center px-6">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4">
      {/* Left: Logo and name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-lg font-semibold tracking-wide">Ignite Tech</h2>
      </div>

      {/* Right: Social Links */}
      <div className="flex items-center gap-5 text-xl">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>

    {/* Bottom text */}
    <div className="text-center text-gray-400 text-sm mt-4">
      © {new Date().getFullYear()} Ignite Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
