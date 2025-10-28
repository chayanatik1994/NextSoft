import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import ratingIcon from "../../assets/icon-ratings.png";
import downloadIcon from "../../assets/icon-downloads.png";

const TrendingApps = () => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching apps data:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center py-12">Loading apps...</p>;

  const appsToShow = showAll ? apps : apps.slice(0, 8);

  return (
    <section className="py-12 px-6 text-center">
      <h1 className="text-3xl font-bold mb-2">Trending Apps</h1>
      <p className="text-gray-600 mb-6">Explore the top apps in the market</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {appsToShow.map((app) => (
          <div
            key={app.id}
            className="bg-white shadow-lg rounded-xl p-3 cursor-pointer"
          onClick={() => navigate(`/apps/${app.id}`)}

          >
            <div className="w-full h-60 bg-gray-200 rounded-lg overflow-hidden mb-2">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-bold">{app.title}</p>
            <div className="flex justify-between text-xs text-gray-700 mt-1">
              <div className="flex items-center gap-1">
                <img src={downloadIcon} alt="Downloads" className="w-4 h-4" />
                <span>{app.downloads.toLocaleString()}</span>
              </div>
              <div className="flex items-center gap-1">
                <img src={ratingIcon} alt="Rating" className="w-4 h-4" />
                <span>{app.ratingAvg.toFixed(1)}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {apps.length > 8 && (
        <button
          onClick={() => setShowAll(!showAll)}
          className="mt-6 px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      )}
    </section>
  );
};

export default TrendingApps;
