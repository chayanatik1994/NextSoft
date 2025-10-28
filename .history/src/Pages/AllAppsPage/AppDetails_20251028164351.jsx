import React from "react";
import { useParams } from "react-router";
import appsData from "appsData.json"; 

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find((a) => a.id.toString() === id);

  if (!app) {
    return <p className="text-red-500 text-center mt-10">App not found</p>;
  }

  return (
    <div className="mt-10 p-6 border rounded-lg shadow-md bg-white">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Image */}
        <div className="lg:w-1/3 w-full">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-60 object-cover rounded"
          />
        </div>

        {/* Info */}
        <div className="lg:w-2/3 w-full flex flex-col gap-3">
          <h2 className="text-3xl font-bold">{app.title}</h2>
          <p className="text-gray-600">Rating: {app.ratingAvg}</p>
          <p className="text-gray-600">Downloads: {app.downloads}</p>
          <p className="text-gray-600">Reviews: {app.reviews}</p>
          <p className="mt-4 text-gray-700">{app.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AppDetails;
