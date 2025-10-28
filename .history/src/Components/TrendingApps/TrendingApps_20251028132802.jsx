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
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching apps data:', err);
        setLoading(false);
      });
  }, []);

  const showMore = () => {
    setVisible((prev) => prev + LOAD_MORE_COUNT);
  };

  const showLess = () => {
    setVisible(INITIAL_VISIBLE_COUNT);
  };

  const appsToShow = apps.slice(0, visible);

  if (loading) {
    return <section className="py-12 px-6 text-center">Loading Apps...</section>;
  }

  return (
    <section className="py-12 px-6 text-center">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {appsToShow.map((app) => (
          <div key={app.id} className="bg-white shadow-lg rounded-xl w-full max-w-xs mx-auto p-3 flex flex-col items-center">
            
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
        {visible < apps.length && (
          <button
            onClick={showMore}
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition mr-4"
          >
            Show More
          </button>
        )}

        {visible > INITIAL_VISIBLE_COUNT && (
          <button
            onClick={showLess}
            className="px-6 py-2 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 transition"
          >
            Show Less
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingApps;