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
        if (!res.ok) throw new Error('Network response was not ok');
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

  const toggleVisible = () => {
    if (visible < apps.length) {
      setVisible((prev) => prev + LOAD_MORE_COUNT);
    } else {
      setVisible(INITIAL_VISIBLE_COUNT);
    }
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {appsToShow.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-lg rounded-xl w-full max-w-xs mx-auto p-3 flex flex-col items-center"
          >
            <div className="w-full h-60 bg-gray-200 rounded-lg mb-2 overflow-hidden">
              {app.image && (
                <img
                  src={app.image}
                  alt className=""{app.title}
                  className="w-full h-full object-cover rounded-lg text-yellow"
                />
              )}
            </div>

            <p className="font-semibold text-sm mt-2">{app.title}</p>

            {/* Downloads & Rating */}
            <div className="flex justify-between w-full text-xs text-gray-700 mt-2 mb-2 px-2">
              <div className="flex items-center space-x-1">
                <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                <span>{app.downloads}</span>
              </div>

              <div className="flex items-center space-x-1">
                <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                <p className='orange
                '>5</p>
                <span>{app.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {apps.length > INITIAL_VISIBLE_COUNT && (
        <div className="mt-10">
          <button
            onClick={toggleVisible}
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            {visible < apps.length ? 'Show More' : 'Show Less'}
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingApps;
