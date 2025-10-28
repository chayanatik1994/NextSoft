import React from "react";
import logo from "../../../assets/logo.png"; // adjust your logo path

const Footer = () => (
  <footer className="w-full bg-gray-900 text-white flex flex-col justify-center px-6 py-8">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4">
      {/* Left: Logo and name */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-lg font-semibold tracking-wide">Ignite Tech</h2>
      </div>

      {/* Right: Static Social Icons (no links) */}
      <div className="flex items-center gap-5 text-xl text-gray-400">
        <span>Facebook</span>
        <span>Instagram</span>
        <span>Twitter</span>
        <span>LinkedIn</span>
      </div>
    </div>

    {/* Bottom text */}
    <div className="text-center text-gray-400 text-sm mt-4">
      © {new Date().getFullYear()} Ignite Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
