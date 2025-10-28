import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import appMockup from '../../assets/hero.png'; 

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6 max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          At <span className="font-semibold">IGNITE TECH</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              <FaGooglePlay /> Google Play
            </button>
          </a>
          <a
            href="https://apps.apple.com/app/idYOUR_APP_ID"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              <FaApple /> App Store
            </button>
          </a>
        </div>

        <div className="flex justify-center">
          <img
            src={appMockup}
            alt="App showcase"
            className="w-full max-w-4xl h-auto shadow-2xl rounded-xl object-contain"
          />
        </div>
      </section>

      {/* Stats Section (Full Width) */}


      {/* Footer Space */}
      <div className="py-10" />
    </div>
  );
};

export default HomePage;
