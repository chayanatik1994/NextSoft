import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import appMockup from '../../assets/hero.png'; 

const HomePage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br/> <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto mb-6">
          At <span className="font-semibold">IGNITE TECH</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-10">
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
            className="w-[1600px] h-[410px] shadow-2xl rounded-xl object-cover"
          />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center mx-auto w-[1600px] h-[410px] py-10 flex flex-col justify-center">
        <h2 className="text-2xl font-semibold mb-6">Trusted By Millions, Built For You</h2>
        <div className="flex flex-col md:flex-row justify-center gap-8">
          <div>
            <p className="text-4xl font-bold">29.6M</p>
            <p className="text-sm">Total Downloads</p>
            <p className="text-xs opacity-80">21% More Than Last Month</p>
          </div>
          <div>
            <p className="text-4xl font-bold">906K</p>
            <p className="text-sm">Total Reviews</p>
            <p className="text-xs opacity-80">46% More Than Last Month</p>
          </div>
          <div>
            <p className="text-4xl font-bold">132+</p>
            <p className="text-sm">Active Apps</p>
            <p className="text-xs opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* Footer Space */}
      <div className="py-10" />
    </div>
  );
};

export default HomePage;
