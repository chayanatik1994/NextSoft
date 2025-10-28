import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';
import { NavLink } from 'react-router';
import logo from '../../../assets/logo.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => (window.location.href = '/')}
      >
        <img src={logo} alt="Logo" className="w-10 h-10" />
        <h2 className="text-xl font-semibold">Ignite Tech</h2>
      </div>
      <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav
        className={`${
          menuOpen ? 'flex' : 'hidden'
        } md:flex absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent flex-col md:flex-row items-center gap-4 md:gap-6 p-4 md:p-0`}
      >
        {['/', '/apps', '/installation'].map((path, index) => {
          const labels = ['Home', 'Apps', 'Installation'];
          return (
            <NavLink
              key={path}
               to={path}
              end={path === '/'}
              onClick={closeMenu}
              className={({ isActive }) =>
                `hover:text-purple-400 transition ${
                  isActive ? 'font-semibold text-purple-400' : ''
                }`
              }
            >
              {labels[index]}
            </NavLink>
          );
        })}
      </nav>

      
      <a
        href="https://github.com/chayanatik1994/modern-dark-ui-landing"
         target="_blank"
        rel="noopener noreferrer"
         className="hidden md:block"
      >
          <button className="flex items-center gap-2 bg-purple-800 px-4 py-1 rounded-md hover:bg-purple-700 transition">
            <FaGithub className="text-xl" /> Contribute
        </button>
      </a>
    </header>
  );
};

export default Header;
