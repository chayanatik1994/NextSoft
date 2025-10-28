import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify"; // Import Toast Container
import "react-toastify/dist/ReactToastify.css"; // Import Toast CSS

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortedApps, setSortedApps] = useState([]);
  const [sortOrder, setSortOrder] = useState("High-Low"); // Default sorting order

  // Fetch installed apps from localStorage
  useEffect(() => {
    setLoading(true); // Show loading animation when fetching data
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
    setSortedApps(storedApps); // Initialize with unsorted apps
    setLoading(false); // Stop loading after data is fetched
  }, []);

  // Handle uninstall operation
  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    setSortedApps(updatedApps); // Update sortedApps too
    toast.success("App uninstalled successfully!"); // Show success toast
  };

  // Handle sorting by download count
  const handleSort = (order) => {
    setSortOrder(order);
    let sorted = [...installedApps];
    if (order === "High-Low") {
      sorted.sort((a, b) => b.downloads - a.downloads); // Sort by downloads descending
    } else {
      sorted.sort((a, b) => a.downloads - b.downloads); // Sort by downloads ascending
    }
    setSortedApps(sorted);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin border-t-4 border-blue-500 w-16 h-16 border-solid rounded-full"></div> {/* Loading spinner */}
      </div>
    );
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>

      {/* Sorting Dropdown */}
      <div className="mb-4">
        <label htmlFor="sort" className="mr-2">Sort by Downloads: </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => handleSort(e.target.value)}
          className="px-4 py-2 bg-gray-200 rounded-lg"
        >
          <option value="High-Low">High-Low</option>
          <option value="Low-High">Low-High</option>
        </select>
      </div>

      {/* Display installed apps */}
      <div className="grid grid-cols-3 gap-6">
        {sortedApps.length === 0 ? (
          <p>No apps installed.</p>
        ) : (
          sortedApps.map((app) => (
            <div
              key={app.id}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center"
            >
              {/* App Image */}
              <img
                src={app.image || "/default-app-image.jpg"} // Fallback image
                alt={app.title}
                className="w-40 h-40 object-cover rounded-lg mb-4"
              />

              {/* App Title and Downloads */}
              <h2 className="text-xl font-semibold">{app.title}</h2>
              <p className="text-gray-600 text-sm">{app.description}</p>
              <p className="mt-2 text-gray-500">Downloads: {app.downloads}</p>

              {/* Uninstall Button */}
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

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
    </div>
  );
};

export default MyInstallations;
