import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  // Helper function to format numbers (e.g., 8000000 to "8M", 54000 to "54K")
  const formatStat = (num) => {
    if (num >= 1000000) {
      // Use toFixed(1) for millions to be more precise, or toFixed(0) for a cleaner look.
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  useEffect(() => {
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        // Ensure your JSON data has: id, title, developer, downloads, ratingAvg, totalReviews, installSize
        const selectedApp = data.find((item) => item.id === Number(id));
        setApp(selectedApp);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading app data:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading details...</p>;
  if (!app)
    return (
      <div className="text-center mt-10">
        <p className="text-lg text-gray-600 mb-4">App not found.</p>
        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
        >
          Go Back
        </button>
      </div>
    );

  return (
    <div className="p-6 max-w-xl mx-auto">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-100">
        {/* === START: Layout for Small Icon Left & Details Right (Matches Screenshot) === */}
        <div className="flex items-start mb-6">
          
          {/* 1. App Icon (Left Side) */}
          <div className="w-20 h-20 mr-4 flex-shrink-0">
            {/* Using a placeholder div to represent the icon from the image */}
            <div className="w-full h-full border border-blue-400 rounded-xl flex items-center justify-center bg-blue-50">
              {/* SVG Placeholder for the Clock/Checkmark icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-12 w-12 text-blue-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM9 12l2 2 4-4" />
              </svg>
            </div>
            {/* If you have the icon URL in your data, use: 
            <img 
              src={app.iconUrl} 
              alt={`${app.title} icon`} 
              className="w-full h-full rounded-xl object-cover" 
            /> 
            */}
          </div>

          {/* 2. App Info (Right Side) */}
          <div className="flex-grow">
            <h1 className="text-xl font-bold mb-1">
              {app.title || "SmPlan:ToDo List With Reminder"}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Developed by <span className="text-purple-600 font-medium">{app.developer || "productive.io"}</span>
            </p>

            {/* Stats Section */}
            <div className="flex justify-between text-center pt-2">
              {/* Downloads */}
              <div className="flex flex-col items-center">
                <p className="text-lg font-extrabold text-gray-800 leading-none">{formatStat(app.downloads || 8000000)}</p>
                <p className="text-xs text-gray-500">Downloads</p>
              </div>

              {/* Average Ratings */}
              <div className="flex flex-col items-center border-l border-r border-gray-200 px-4">
                <p className="text-lg font-extrabold text-gray-800 leading-none">{app.ratingAvg ? app.ratingAvg.toFixed(1) : 4.9}</p>
                <p className="text-xs text-gray-500">Average Ratings</p>
              </div>

              {/* Total Reviews */}
              <div className="flex flex-col items-center">
                <p className="text-lg font-extrabold text-gray-800 leading-none">{formatStat(app.totalReviews || 54000)}</p>
                <p className="text-xs text-gray-500">Total Reviews</p>
              </div>
            </div>

          </div>
        </div>
        {/* === END: Layout for Small Icon Left & Details Right === */}

        {/* Install Button (Full Width) */}
        <div className="mt-4">
          <button className="w-full px-4 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors">
            Install Now ({app.installSize || "291 MB"})
          </button>
        </div>

        {/* Optional: Add a description section here if needed */}
        {/* <p className="text-gray-600 mt-6">{app.description}</p> */}
      </div>
    </div>
  );
};

export default AppDetails;