import React, { useEffect, useState } from 'react';

// Assuming these icons are available at the specified paths
import ratingIcon from '../../assets/icon-ratings.png';
import downloadIcon from '../../assets/icon-downloads.png';

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [visible, setVisible] = useState(8); 
  const [showAllClicked, setShowAllClicked] = useState(false);

  // Data fetching logic restored
  useEffect(() => {
    fetch('/appsData.json')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        return res.json();
      })
      .then((data) => setApps(data))
      .catch((err) => console.error('Error fetching apps data:', err));
  }, []);

  const showAll = () => {
    setVisible(apps.length);
    setShowAllClicked(true);
  };

  const appsToShow = showAllClicked ? apps : apps.slice(0, visible);

  return (
    <section className="py-12 px-6 text-center">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
        <p className="text-gray-600">Explore All Trending Apps on the Market developed by us</p>
      </div>

      {/* App Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {appsToShow.map((app) => (
          <div key={app.id} className="bg-white rounded-lg p-3 flex flex-col items-center">
            {/* Placeholder for the App Image/Icon Area */}
            {/* Use app.image for the actual icon/image source */}
            <div className="w-full h-40 bg-gray-200 rounded-lg mb-2">
               {app.image && <img src={app.image} alt={app.title} className="w-full h-full object-cover rounded-lg" />}
            </div>
            
            {/* App Title */}
            <p className="font-semibold text-sm mt-1">{app.title}</p>

            {/* Downloads and Rating */}
            <div className="flex justify-start w-full text-xs text-gray-700 mt-1">
              {/* Downloads */}
              <div className="flex items-center mr-4">
                <img src={downloadIcon} alt="Downloads" className="w-3 h-3 mr-1" />
                <span>{app.downloads}</span>
              </div>
              
              {/* Rating */}
              <div className="flex items-center">
                <img src={ratingIcon} alt="Rating" className="w-3 h-3 mr-1" />
                <span>{app.rating}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Show All Button - only show if not all apps are visible */}
      {apps.length > visible && !showAllClicked && (
        <button
          onClick={showAll}
          className="mt-10 px-10 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition"
        >
          Show All
        </button>
      )}
    </section>
  );
};

export default TrendingApps;