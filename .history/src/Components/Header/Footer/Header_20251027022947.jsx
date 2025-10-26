import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#282c34', color: 'white' }}>
    <div style={{ cursor: 'pointer' }} onClick={() => window.location.href='/'}>
      <img src={/>
      <h2>Ignite Tech</h2>
    </div>
    <nav>
      <NavLink to="/" style={{ margin: '0 10px' }} end activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
      <NavLink to="/apps" style={{ margin: '0 10px' }}>Apps</NavLink>
      <NavLink to="/installation" style={{ margin: '0 10px' }}>Installation</NavLink>
    </nav>
    <div>
     <a
       href="https://github.com/chayanatik1994/modern-dark-ui-landing"
        target="_blank"
       >
  <button className="flex items-center gap-2 bg-purple-800 text-white px-4 py-1 rounded-md hover:bg-purple-700 transition">
    <FaGithub className="text-xl" />
    Contribute
  </button>
</a>

    </div>
  </header>
);

export default Header;