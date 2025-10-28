import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { FaGooglePlay, FaApple } from 'react-icons/fa';
import appMockup from '../../assets/hero.png';
import ratingIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';

const HomePage = () => {
  const navigate = useNavigate();
  const [apps, setApps] = useState([]);
  const INITIAL_VISIBLE = 8;

  useEffect(() => {
    fetch('/appsData.json')
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error('Error fetching apps data:', err));
  }, []);

  const handleAppClick = (appId) => {
    navigate(`/apps/${appId}`);
  };

  return (
    <div className="bg-white text-gray-800 w-full">

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We Build <span className="text-purple-600">Productive</span> Apps
        </h1>
        <p className="text-gray-600 mb-6">
          At <span className="font-semibold">IGNITE TECH</span>, we craft innovative apps to make life simpler, smarter, and more exciting.
        </p>

        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              <FaGooglePlay /> Play Store
            </button>
          </a>
          <a href="https://apps.apple.com/app/idYOUR_APP_ID" target="_blank" rel="noopener noreferrer">
            <button className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition">
              <FaApple /> App Store
            </button>
          </a>
        </div>

        <div className="flex justify-center">
          <img src={appMockup} alt="App showcase" className="w-full max-w-4xl h-auto shadow-2xl rounded-xl object-contain" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-purple-700 to-purple-500 text-white py-16 text-center">
        <div className="flex flex-col md:flex-row justify-around items-center max-w-6xl mx-auto gap-8">
          <div>
            <p className="text-4xl md:text-5xl font-bold">29.6M</p>
            <p>Total Downloads</p>
            <p className="text-xs opacity-80">21% More Than Last Month</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">906K</p>
            <p>Total Reviews</p>
            <p className="text-xs opacity-80">46% More Than Last Month</p>
          </div>
          <div>
            <p className="text-4xl md:text-5xl font-bold">132+</p>
            <p>Active Apps</p>
            <p className="text-xs opacity-80">31 More Will Launch</p>
          </div>
        </div>
      </section>

      {/* Top Apps Section */}
      <section className="py-12 px-6 text-center">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Top Apps</h2>
          <p className="text-gray-600">Explore the most popular apps developed by us</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {apps.slice(0, INITIAL_VISIBLE).map((app) => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-xl w-full max-w-xs mx-auto p-3 flex flex-col items-center cursor-pointer hover:shadow-2xl transition"
              onClick={() => handleAppClick(app.id)}
            >
              <div className="w-full h-60 bg-gray-200 rounded-lg mb-2">
                {app.image && <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />}
              </div>

              <p className="font-semibold text-sm mt-2">{app.title}</p>

              <div className="flex justify-start w-full text-xs text-gray-700 mt-1 mb-2">
                <div className="flex items-center mr-4">
                  <img src={downloadIcon} alt="Downloads" className="w-3 h-3 mr-1" />
                  <span>{app.downloads}</span>
                </div>

                <div className="flex items-center">
                  <img src={ratingIcon} alt="Rating" className="w-3 h-3 mr-1" />
                  <span>{app.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <button
            onClick={() => navigate('/apps')}
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            Show All
          </button>
        </div>
      </section>

    </div>
  );
};

export default HomePage;
