import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ratingIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appsData.json")
      .then(res => res.json())
      .then(data => setApps(data))
      .catch(err => console.error("Error fetching apps:", err));
  }, []);

  const filteredApps = apps.filter(app =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-2 text-center">All Apps</h1>
      <p className="text-gray-500 text-center mb-6">Explore all apps available</p>

      <div className="flex justify-between items-center mb-6 gap-4">
        <p className="font-medium text-gray-700">Total Apps: {apps.length}</p>
        <input
          type="text"
          placeholder="Search apps"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-64"
        />
      </div>

      {filteredApps.length === 0 ? (
        <p className="text-center text-red-500 mt-4">No App Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map(app => (
            <div
              key={app.id}
              className="border rounded p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/apps/${app.id}`)}
            >
              <img src={app.image} alt={app.title} className="w-full h-40 object-cover rounded" />
              <h3 className="font-bold mt-2">{app.title}</h3>
              <div className="flex justify-between mt-1 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                  <span>{app.downloads.toLocaleString()}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                  <span>{app.ratingAvg.toFixed(1)} / 5</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;
