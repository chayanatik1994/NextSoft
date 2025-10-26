import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { NavLink } from 'react-router';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '10px', background: '#282c34', color: 'white' }}>
    <div style={{ cursor: 'pointer' }} onClick={() => window.location.href='/'}>
      <h2>Logo</h2>
    </div>
    <nav>
      <NavLink to="/" style={{ margin: '0 10px' }} end activeStyle={{ fontWeight: 'bold' }}>Home</NavLink>
      <NavLink to="/apps" style={{ margin: '0 10px' }}>Apps</NavLink>
      <NavLink to="/installation" style={{ margin: '0 10px' }}>Installation</NavLink>
    </nav>
    <div className='flex items-center gap-2'>

      <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
       <FaGithub />
      <button className='bg-purple-800 px-4 py-1'>Contribute</button>
    </a>
    </div>
  </header>
);

export default Header;