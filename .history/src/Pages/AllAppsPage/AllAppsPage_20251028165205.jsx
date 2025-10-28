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
       .then((res) => res.json())
      .then((data) => setApps(data))
      .catch((err) => console.error("Error fetching apps:", err));
  }, []);

  const filteredApps = apps.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="all-apps-page p-6 max-w-7xl mx-auto">
      {/* Title Section */}
      <div className="title-section mb-6 text-center">
        <h1 className="text-3xl font-bold">All Apps</h1>
          <p className="text-gray-500">Explore all apps available</p>
      </div>

      {/* Search Section */}
      <div className="search-section flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <p className="text-gray-700 font-medium">Total Apps: {apps.length}</p>
        <input
          type="text"
            placeholder="Search apps"
            value={searchTerm}
           onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-2 rounded w-full sm:w-64"
        />
      </div>

      {/* Apps Grid */}
      {filteredApps.length === 0 ? (
        <p className="text-red-500 mt-4 text-center">No App Found</p>
      ) : (
        <div className="apps-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              className="app-card w-full border rounded p-4 cursor-pointer hover:shadow-lg transition"
                 onClick={() => navigate(`/apps/${app.id}`)}
            >
              <img
                src={app.image}
                  alt={app.title}
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="font-bold mt-2">{app.title}</h3>

              {/* Downloads */}
           <div className="flex justify-between  ">
               <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                <p>{app.downloads}+</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
                  <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                <p>{app.ratingAvg} / 5</p>
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
