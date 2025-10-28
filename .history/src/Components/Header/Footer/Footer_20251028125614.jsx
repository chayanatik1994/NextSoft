import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Footer = () => (
  <footer className="h-[250px] w-full bg-gray-900 text-white flex flex-col justify-center">
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto w-full gap-4">
      <div className="flex items-center gap-3">
          <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-lg font-semibold tracking-wide">Ignite Tech</h2>
      </div>
      <div className="flex items-center gap-5 text-xl text-gray-400">
        <FaFacebook className="hover:text-purple-400 transition" />
          <FaInstagram className="hover:text-purple-400 transition" />
        <FaTwitter className="hover:text-purple-400 transition" />
 <FaLinkedin className="hover:text-purple-400 transition" />
      </div>
    </div>
    <div className="text-center text-gray-400 text-sm mt-4">
       © {new Date().getFullYear()} Ignite Tech. All rights reserved.
    </div>
  </footer>
);

export default Footer;
