import React from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';  // Import icons
import heroimage from '../../assets/hero.png';

const Banner = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center h-screen p-8 bg-purple-50">
      <h1 className="text-4xl font-extrabold">
        We Build <br/>
        <span className="text-purple  px-2 py-1 rounded-xl">Productive</span> Apps
      </h1>
      <p className="mt-4 text-lg max-w-2xl">
        At SoftNext, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
      <div className="flex space-x-4 mt-6">
        <button className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
          <FaGooglePlay className="mr-2" />
          Google Play
        </button>
        <button className="flex items-center px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
          <FaAppStore className="mr-2" />
          App Store
        </button>
      </div>
      <div className="mt-8">
        <img src={heroimage} alt="Hero" className="max-w-full h-auto rounded-lg shadow-lg" />
      </div>
    </div>
  );
};

export default Banner;
