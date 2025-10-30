import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import appMockup from '../../assets/hero.png';
import TrendingApps from '../../Components/TrendingApps/TrendingApps';



const HomePage = () => (
  <div className="bg-white text-gray-800 w-full">

    {/* Hero Section */}
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-6 text-center py-16">
           <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <br /> <span className="text-purple-600">Productive</span> Apps
        </h1>
          <p className="text-gray-600 mb-6">
            At <span className="font-semibold">NextSoft Tech</span>, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a href="https://play.google.com/store/apps?hl=en" target="_blank" rel="noopener noreferrer">
         <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
           <FaGooglePlay /> Google Play
         </button>
      </a>

      
        </div>
      </div>

      <div className="w-full flex justify-center">
        <img
          src={appMockup}
          alt="App showcase"
          className="w-full max-w-4xl h-auto shadow-2xl rounded-xl object-contain"
        />
      </div>
    </section>

    {/* Stats Section */}
    <section className="w-full bg-gradient-to-r from-purple-700 to-purple-500 text-white text-center py-16">
      <h2 className="text-2xl md:text-3xl font-semibold mb-10">Trusted By Millions, Built For You</h2>
      <div className="flex flex-col md:flex-row justify-around items-center w-full px-6 gap-8">
        <div>
           <p className="text-4xl md:text-5xl font-bold">29.6M</p>
            <p className="text-sm md:text-base">Total Downloads</p>
          <p className="text-xs md:text-sm opacity-80">21% More Than Last Month</p>
          </div>
        <div>
            <p className="text-4xl md:text-5xl font-bold">906K</p>
          <p className="text-sm md:text-base">Total Reviews</p>
          <p className="text-xs md:text-sm opacity-80">46% More Than Last Month</p>
        </div>
        <div>
            <p className="text-4xl md:text-5xl font-bold">132+</p>
          <p className="text-sm md:text-base">Active Apps</p>
          <p className="text-xs md:text-sm opacity-80">31 More Will Launch</p>
        </div>
      </div>
    </section>

    {/* Trending Apps Section */}
    <TrendingApps/>

  </div>
);

export default HomePage;
