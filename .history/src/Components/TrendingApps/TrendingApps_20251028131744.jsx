import React, { useEffect, useState } from 'react';
import ratingIcon from '../../assets/';
import downloadIcon from '../../assets/download.png';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);

  useEffect(() => {
    fetch('/appsData.json') // path to JSON file
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error('Error fetching apps data:', err));
  }, []);

  return (
    <section className="py-12 px-6 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore all trending apps on the market developed by us</p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {apps.map((app) => (
          <div key={app.id} className="bg-white shadow-lg rounded-xl w-60 p-4 flex flex-col items-center">
            <img src={app.image} alt={app.title} className="w-32 h-32 object-contain mb-4" />
            <div className="flex items-center gap-2 mb-2">
              <img src={ratingIcon} alt="Rating" className="w-5 h-5" />
              <span className="font-semibold">{app.rating}</span>
            </div>
            <p className="font-medium mb-4">{app.title}</p>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition">
              <img src={downloadIcon} alt="Download" className="w-5 h-5" /> Download
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingApps;
