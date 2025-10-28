import React from "react";
import { useParams } from "react-router";
import appsData from "../../data/appsData.json"; 

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((app) => app.id.toString() === id);

  if (!app) return <p className="text-red-500 mt-4">App not found</p>;

  return (
    <div className="app-details max-w-7xl mx-auto p-6 mt-6 border rounded shadow-lg bg-white">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-1/3 w-full">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-64 object-cover rounded"
          />
        </div>

        {/* App Info */}
        <div className="lg:w-2/3 w-full flex flex-col gap-4">
          <h1 className="text-3xl font-bold">{app.title}</h1>
          <p className="text-gray-600">Rating: {app.ratingAvg}</p>
          <p className="text-gray-600">Downloads: {app.downloads}</p>
          <p className="text-gray-600">Reviews: {app.reviews}</p>

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
