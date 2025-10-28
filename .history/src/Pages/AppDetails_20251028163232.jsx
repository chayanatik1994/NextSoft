import React, { useState } from "react";
import { useParams } from "react-router";
import appsData from "../../data/appsData.json";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import toast, { Toaster } from "react-hot-toast";

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((app) => app.id.toString() === id);
  const [installed, setInstalled] = useState(false);

  if (!app) return <p className="text-red-500 mt-4">App not found</p>;

  const handleInstall = () => {
    setInstalled(true);
    toast.success(`${app.title} Installed Successfully!`);
  };

  return (
    <div className="app-details max-w-7xl mx-auto p-6 mt-6 border rounded shadow-lg bg-white">
      <Toaster position="top-right" />
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-1/3 w-full">
          <img src={app.image} alt={app.title} className="w-full h-64 object-cover rounded" />
        </div>

        {/* Info */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600">Rating: {app.ratingAvg}</p>
          <p className="text-gray-600">Downloads: {app.downloads}</p>
          <p className="text-gray-600">Reviews: {app.reviews}</p>

          <button
            className={`px-4 py-2 rounded text-white ${
              installed ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
            }`}
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? "Installed" : "Install"}
          </button>

          {/* Review Chart */}
          <div className="mt-6 w-full h-64">
            <h2 className="text-xl font-semibold mb-2">App Reviews</h2>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={app.ratings}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{app.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
