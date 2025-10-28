import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";

const AppDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating the fetch call to get app data
    fetch("/appsData.json")
      .then((res) => res.json())
      .then((data) => {
        // Assuming your JSON structure includes all necessary fields:
        // id, title, developer, downloads, ratingAvg, totalReviews, installSize
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

  // Helper function to format numbers (e.g., 8000000 to "8M", 54000 to "54K")
  const formatStat = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M';
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
  };

  // The main rendering logic for the app details, matching the screenshot pattern.
  return (
    <div className="p-4 max-w-xl mx-auto">
      {/* Container matching the overall structure of the screenshot */}
      <div className="border border-dashed border-blue-300 p-4 rounded-xl">
        <div className="flex items-start">
          {/* App Icon (Left Side) - Simulating the clock/checklist image */}
          {/* We'll use a placeholder icon since the actual image URL is not available */}
          <div className="w-24 h-24 mr-4 flex-shrink-0">
            {/* The image in the screenshot is a custom icon, but we'll use a placeholder div or a simple image tag if a URL is available */}
            {/* Replace this div with a proper <img src={app.iconUrl} /> if you have it in your data */}
            <div className="w-full h-full border-2 border-blue-500 rounded-lg flex items-center justify-center bg-blue-50">
              {/* This is a simple SVG placeholder for the clock/checklist icon */}
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-16 w-16 text-blue-600" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={1}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0zM9 12l2 2 4-4" />
              </svg>
            </div>
          </div>

          {/* App Info (Right Side) */}
          <div className="flex-grow">
            {/* Title and Developer */}
            <h1 className="text-xl font-semibold mb-1">
              {app.title || "SmPlan:ToDo List With Reminder"}
            </h1>
            <p className="text-sm text-gray-500 mb-4">
              Developed by <span className="text-purple-600 font-medium">{app.developer || "productive.io"}</span>
            </p>

            {/* Stats - Downloads, Rating, Reviews */}
            <div className="flex justify-between items-center text-center py-2">
              
              {/* Downloads */}
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L10 11.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v7a1 1 0 11-2 0V3a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-bold text-gray-800 leading-none mt-1">{formatStat(app.downloads || 8000000)}</p>
                <p className="text-xs text-gray-500">Downloads</p>
              </div>

              {/* Average Ratings */}
              <div className="flex flex-col items-center border-l border-r border-gray-200 px-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-orange-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.637-.921 1.937 0l1.272 3.924a1 1 0 00.95.691h4.128c.969 0 1.371 1.243.588 1.81l-3.332 2.42a1 1 0 00-.363 1.118l1.272 3.924c.3.921-.755 1.688-1.54 1.118l-3.332-2.42a1 1 0 00-1.175 0l-3.332 2.42c-.784.57-1.84-.197-1.54-1.118l1.272-3.924a1 1 0 00-.363-1.118l-3.332-2.42c-.783-.567-.381-1.81.588-1.81h4.128a1 1 0 00.95-.691l1.272-3.924z" />
                </svg>
                <p className="text-lg font-bold text-gray-800 leading-none mt-1">{app.ratingAvg ? app.ratingAvg.toFixed(1) : 4.9}</p>
                <p className="text-xs text-gray-500">Average Ratings</p>
              </div>

              {/* Total Reviews */}
              <div className="flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-600" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-lg font-bold text-gray-800 leading-none mt-1">{formatStat(app.totalReviews || 54000)}</p>
                <p className="text-xs text-gray-500">Total Reviews</p>
              </div>
            </div>

            {/* Install Button */}
            <button className="w-full mt-4 px-4 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-colors">
              Install Now ({app.installSize || "291 MB"})
            </button>
          </div>
        </div>
      </div>
      
      {/* The original bottom part of the component can be appended here */}
      {/* <div className="bg-white rounded-2xl shadow-md p-6 mt-6">
         <h2 className="text-xl font-bold mb-2">Description</h2>
         <p className="text-gray-600 mb-3">{app.description}</p>
      </div>
      */}

    </div>
  );
};

export default AppDetails;