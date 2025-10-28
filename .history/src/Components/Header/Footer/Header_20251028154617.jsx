import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import logo from '../../../assets/logo.png';
import { FaBars, FaGithub, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.href = '/'}>
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-xl font-semibold">NextSoft Tech</h2>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Navigation Links */}
      <nav className={`md:flex ${menuOpen ? 'flex flex-col' : 'hidden'} gap-4 md:gap-6`}>
        <NavLink to="/" className={({ isActive }) => isActive ? 'text-purple-400 font-semibold' : ''}>Home</NavLink>
        <NavLink to="/apps" className={({ isActive }) => isActive ? 'text-purple-400 font-semibold' : ''}>Apps</NavLink>
        <NavLink to="/installation" className={({ isActive }) => isActive ? 'text-purple-400 font-semibold' : ''}>Installation</NavLink>
      </nav>

      {/* GitHub Contribute Button */}
      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer" className="hidden md:block">
        <button className="bg-purple-800 px-4 py-1 rounded-md hover:bg-purple-700 flex items-center gap-2">
          <FaGithub /> Contribute
        </button>
      </a>
    </header>
  );
};

export default Header;
