import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import appsData from 'app'; 

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setApps(appsData); 
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">All Apps</h1>
      <p className="text-gray-600 mb-4">Browse all apps available in our collection</p>

      <div className="flex justify-between mb-6">
        <span>Total Apps: {filteredApps.length}</span>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-1"
        />
      </div>

      {filteredApps.length === 0 ? (
        <p>No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <div
              key={app.id}
              className="bg-white shadow-lg rounded-xl p-4 cursor-pointer"
              onClick={() => navigate(`/app/${app.id}`)}
            >
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded" />
              <h2 className="font-semibold mt-2">{app.title}</h2>
              <p className="text-sm text-gray-600">Downloads: {app.downloads}</p>
              <p className="text-sm text-gray-600">Rating: {app.ratingAvg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;
