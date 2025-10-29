import React, { useState } from "react";
import { NavLink } from "react-router";
import { FaBars, FaTimes, FaGithub } from "react-icons/fa";
import logo from "../../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
      { path: "/apps", label: "Apps" },
    { path: "/installation", label: "Installation" },
  ];

  return (
    <header className="bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
        {/* Logo */}
      <div
          className="flex items-center gap-2 cursor-pointer"
        onClick={() => (window.location.href = "/")}
      >
          <img src={logo} alt="Logo" className="w-10 h-10" />
          <h2 className="text-xl font-semibold">NextSoft Tech</h2>
      </div>

      {/* Menu Icon */}
         <button className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
      </button>

      {/* Nav Links */}
      <nav
          className={`${
          open ? "flex" : "hidden"
        } flex-col md:flex md:flex-row gap-4 md:gap-6 absolute md:static top-14 left-0 w-full md:w-auto bg-gray-900 md:bg-transparent p-4 md:p-0`}
      >
        {links.map(({ path, label }) => (
          <NavLink
            key={path}
              to={path}
              className={({ isActive }) =>
              isActive ? "text-purple-400 font-semibold" : "hover:text-purple-400"
            }
            onClick={() => setOpen(false)}
          >
            {label}
            </NavLink>
        ))}
      </nav>
      <a
        href="https://github.com/"
          target="_blank"
        rel="noopener noreferrer"
        className="hidden md:block"
      >
        <button className="bg-purple-700 px-4 py-1 rounded-md hover:bg-purple-600 flex items-center gap-2">
          <FaGithub /> Contribute
        </button>
      </a>
    </header>
  );
};

export default Header;
