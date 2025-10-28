import React, { useEffect, useState } from 'react';
import ratingIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [visible, setVisible] = useState(4); // initially show 4 cards

  useEffect(() => {
    fetch('/appsData.json')
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error('Error fetching apps data:', err));
  }, []);

  const showMore = () => {
    setVisible((prev) => prev + 4); // show 4 more each time
  };

  return (
    <section className="py-12 px-6 text-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore all trending apps on the market developed by us</p>
      </div>

      {/* App Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
        {apps.slice(0, visible).map((app) => (
          <div key={app.id} className="bg-white shadow-lg rounded-xl w-60 p-4 flex flex-col items-center">
            <img src={app.image} alt={app.title} className="w-32 h-32 object-contain mb-4" />
            <div className="flex justify-between w-full mb-2">
              <div className="flex items-center gap-2">
                <img src={ratingIcon} alt="Rating" className="w-5 h-5" />
                <span className="font-semibold">{app.rating}</span>
              </div>
              <div className="flex items-center gap-2">
                <img src={downloadIcon} alt="Download" className="w-5 h-5" />
              </div>
            </div>
            <p className="font-medium mb-4">{app.title}</p>
            <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500 transition">
              Download
            </button>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      {visible < apps.length && (
        <button
          onClick={showMore}
          className="mt-8 px-6 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
        >
          Show More
        </button>
      )}
    </section>
  );
};

export default TrendingApps;
