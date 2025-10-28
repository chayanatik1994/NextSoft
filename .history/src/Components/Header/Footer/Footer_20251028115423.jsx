import React from 'react';

const Footer = () => (
  <footer className="h-[183px] w-full bg-gray-900 text-white flex flex-col justify-center items-center text-center mt-8">
    <div className="w-full max-w-6xl px-4">
      <h3 className="text-lg font-semibold mb-2 tracking-wide">IGNITE TECH</h3>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Ignite Tech. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
