import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Toast from "react-toastify"; // For notifications
import { Link } from "react-router"; // Optional: For navigation to app details page

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchInstalledApps = async () => {
      try {
        // Fetch the installed apps from localStorage
        const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
        setInstalledApps(storedApps);
        setLoading(false);
      } catch (e) {
        console.error("Error fetching installed apps:", e);
        setError("Failed to load installed apps.");
        setLoading(false);
      }
    };

    fetchInstalledApps();
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    setInstalledApps(updatedApps);

    // Update localStorage
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));

    // Show a toast for feedback
    Toast.success("App uninstalled successfully!");

    // Optionally navigate to a different page
    // navigate('/someOtherPage');
  };

  const renderStars = (rating) => (
    <span className="flex items-center text-yellow-500">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 fill-current mr-1"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.721c-.783-.57-.381-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      {rating}
    </span>
  );

  if (loading) {
    return <div className="p-6 max-w-4xl mx-auto text-center text-gray-500">Loading installed apps...</div>;
  }

  if (error) {
    return <div className="p-6 max-w-4xl mx-auto text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto font-sans">
      <div className="border-b border-dashed border-blue-400 pb-4 mb-4 pt-4 text-center">
        <h1 className="text-2xl font-extrabold mb-1 text-blue-900">Your Installed Apps</h1>
        <p className="text-gray-600 text-sm">Explore all the apps you've installed.</p>
      </div>

      {/* App Count and Sort Section */}
      <div className="flex justify-between items-center pb-2 border-b border-gray-200">
        <h2 className="text-base font-normal text-gray-700">
          <span className="font-bold">{installedApps.length}</span> Apps Found
        </h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <span>Sort By</span>
          <select id="sort" className="border-none focus:outline-none bg-transparent font-semibold cursor-pointer">
            <option>Size</option>
          </select>
          <span className="text-gray-500">▼</span>
        </div>
      </div>

      {/* List of Installed Apps */}
      {installedApps.length === 0 ? (
        <p className="text-center text-gray-500 mt-10">No apps installed.</p>
      ) : (
        <div className="space-y-0 divide-y divide-gray-100">
          {installedApps.map((app) => (
            <div key={app.id} className="bg-white py-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                {/* Placeholder for app icon */}
                <div className="w-10 h-10 bg-gray-200 rounded-lg flex-shrink-0"></div>

                {/* App Info */}
                <div>
                  <p className="font-medium text-base text-gray-800">{app.title}</p>
                  <div className="flex items-center space-x-3 text-sm text-gray-500">
                    <span className="flex items-center">{app.downloads}</span>
                    {renderStars(app.rating)}
                    <span>{app.size}</span>
                  </div>
                </div>
              </div>

              {/* Uninstall Button */}
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-4 py-1 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 font-medium transition duration-150 flex-shrink-0"
              >
                Uninstall
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyInstallations;
