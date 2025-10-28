import React, { useEffect, useState } from 'react';
import ratingIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';

const TrendingApps = () => {
  const INITIAL_VISIBLE_COUNT = 8;
  const LOAD_MORE_COUNT = 4;
  const [apps, setApps] = useState([]);
  const [visible, setVisible] = useState(INITIAL_VISIBLE_COUNT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/appsData.json')
      .then(res => res.ok ? res.json() : Promise.reject('Network error'))
      .then(data => { setApps(data); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const toggleVisible = () => setVisible(prev => prev + LOAD_MORE_COUNT > apps.length ? INITIAL_VISIBLE_COUNT : prev + LOAD_MORE_COUNT);
  const formatDownloads = num => num >= 1e9 ? `${(num/1e9).toFixed(1)}B` : num >= 1e6 ? `${(num/1e6).toFixed(0)}M` : num;

  if (loading) return <section className="py-12 px-6 text-center">Loading Apps...</section>;

  return (
    <section className="py-12 px-6 text-center">
      <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
      <p className="text-gray-600 mb-8">Explore All Trending Apps on the Market developed by us</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {apps.slice(0, visible).map(app => (
          <div key={app.id} className="bg-white shadow-lg rounded-xl p-3 flex flex-col items-center">
            <img src={app.image} alt={app.title} className="w-full h-60 object-cover rounded-lg mb-2"/>
            <p className="font-semibold text-sm mt-2">{app.title}</p>
            <div className="flex justify-between w-full text-xs text-gray-700 mt-2 mb-2 px-2">
              <div className="flex items-center space-x-1">
                <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                <span>{formatDownloads(app.downloads)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                <span>{app.ratingAvg.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {apps.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-10">
          <button onClick={toggleVisible} className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition">
            {visible < apps.length ? 'Show More' : 'Show Less'}
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingApps;
