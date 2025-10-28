import React, { useEffect, useState } from 'react';
import ratingIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false); 

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

  if (loading) {
    return <section className="py-12 px-6 text-center">Loading Apps...</section>;
  }

  const appsToShow = showAll ? apps : apps.slice(0, 8);  

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
                  alt={app.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              )}
            </div>

            <div className="w-full text-left mt-2">
              <p className="font-bold text-sm">{app.title}</p>
            
            </div>

            <div className="flex justify-between w-full text-xs text-gray-700 mt-2 mb-2 px-2">
              <div className="flex items-center space-x-1">
                  <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                <span>{app.downloads}</span>
              </div>

              <div className="flex items-center space-x-1">
                <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                <span>{app.ratingAvg}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {apps.length > 8 && (
        <div className="mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 transition"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </section>
  );
};

export default TrendingApps;
