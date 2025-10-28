import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-apps-page p-6">
      {/* Title Section */}
      <div className="title-section mb-6">
        <h1 className="text-3xl font-bold">All Apps</h1>
        <p className="text-gray-500">Explore all apps available</p>
      </div>

      {/* Search & State */}
      <div className="search-section flex justify-between items-center mb-4">
        <p>Total Apps: {apps.length}</p>
        <input
          type="text"
          placeholder="Search apps..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-64"
        />
      </div>

      {/* Apps Section */}
      {filteredApps.length === 0 ? (
        <p className="text-red-500 mt-4">No App Found</p>
      ) : (
        <div className="apps-grid grid grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="app-card border rounded p-4 cursor-pointer hover:shadow-lg transition"
              onClick={() => navigate(`/all-apps/${app.id}`)}
            >
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-bold mt-2">{app.title}</h3>
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
