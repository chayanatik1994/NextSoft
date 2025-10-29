import React, { useState } from 'react';
import { NavLink } from 'react-router';

import logo from '../../../assets/logo.png';
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
         <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-xl font-semibold">NextSoft Tech</h2>
      </div>

      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
     

      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hidden md:block">
        <button className="bg-purple-800 px-4 py-1 rounded-md hover:bg-purple-700 flex items-center gap-2">
            <FaGithub /> Contribute
        </button>
      </a>
    </header>
  );
};

export default Header;
