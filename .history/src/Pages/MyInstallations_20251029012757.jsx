import React, { useEffect, useState } from "react";

const MyInstallations = () => {
  const [installedApps, setInstalledApps] = useState([]);

  useEffect(() => {
    const storedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(storedApps);
  }, []);

  const handleUninstall = (appId) => {
    const updatedApps = installedApps.filter((app) => app.id !== appId);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    setInstalledApps(updatedApps);
    alert("App uninstalled successfully!");
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1>1 App Found</h1>
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>

      {/* List of Installed Apps */}
      {installedApps.length === 0 ? (
        <p>No apps installed.</p>
      ) : (
        installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-md p-6 flex items-center gap-6 mb-6"
          >
            {/* App Image */}
            <div className="flex-shrink-0">
              <img
                src={app.image || "/default-app-image.jpg"} // Fallback image
                alt={app.title}
                className="w-16 h-16 object-cover rounded-lg"
              />
            </div>

            {/* App Title */}
            <div className="flex-1">
              <h2 className="text-xl font-semibold">{app.title}</h2>
            </div>

            {/* App Downloads and Size */}
            <div className="flex flex-col items-center text-center">
              {/* Download Icon and Count */}
              <div className="flex items-center mb-2">
                <img
                  src="/path-to-download-icon.png" // Add your download icon path here
                  alt="Download"
                  className="w-6 h-6 mr-2"
                />
                <p className="font-semibold">{app.downloads}</p>
              </div>

              {/* App Size */}
              <p className="font-semibold">{app.size} MB</p>
            </div>

            {/* Uninstall Button */}
            <button
              onClick={() => handleUninstall(app.id)}
              className="px-6 py-2 bg-green-600 text-white rounded-lg"
            >
              Uninstall
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default MyInstallations;
