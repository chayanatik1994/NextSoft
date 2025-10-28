import React, { useState, useEffect } from "react";
import { toast } from "react-toastify"; // For toast notifications
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toast notifications

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(false);
  const [sortOrder, setSortOrder] = useState("High-Low"); // Default: High-Low

  // Fetch installed apps from localStorage on initial render
  useEffect(() => {
    setLoading(true);
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
    setLoading(false);
  }, []);

  // Handle uninstalling an app
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);

    // Show toast notification
    toast.success("App uninstalled successfully!", {
      position: toast.POSITION.TOP_RIGHT,
      autoClose: 3000,
    });
  };

  // Handle sorting the apps by download count
  const handleSort = (order) => {
    setSortOrder(order);
    const sortedApps = [...installedApps];
    if (order === "High-Low") {
      sortedApps.sort((a, b) => b.downloads - a.downloads);
    } else {
      sortedApps.sort((a, b) => a.downloads - b.downloads);
    }
    setInstalledApps(sortedApps);
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>

      {/* Sorting Dropdown */}
      <div className="mb-4 flex justify-end">
        <select
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 border rounded-lg"
        >
          <option value="High-Low">Sort by Downloads: High to Low</option>
          <option value="Low-High">Sort by Downloads: Low to High</option>
        </select>
      </div>

      {/* Loading Spinner */}
      {loading && (
        <div className="flex justify-center items-center">
          <div className="w-8 h-8 border-4 border-blue-500 border-solid border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Display Installed Apps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {installedApps.length === 0 ? (
          <p className="text-center col-span-full text-lg text-gray-600">No apps installed.</p>
        ) : (
          installedApps.map((app) => (
            <div key={app.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
              <img
                src={app.image || "/default-app-image.jpg"} // Fallback image
                alt={app.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold">{app.title}</h2>
              <p className="text-gray-500">{app.description}</p>
              <div className="mt-4 mb-2">
                <p className="font-semibold">{app.downloads.toLocaleString()} Downloads</p>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="mt-4 px-8 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MyInstallations;
