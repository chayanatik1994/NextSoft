import React, { useEffect, useState } from "react";
import downloadIcon from "../assets/icon-downloads.png";

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
        <h1></h1>
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>

      {installedApps.length === 0 ? (
        <p>No apps installed.</p>
      ) : (
        installedApps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-2xl shadow-md p-4 flex items-center justify-between mb-4"
          >
            {/* Center: App Image + Title + Downloads */}
            <div className="flex-1 flex flex-col items-start gap-2 px-4">
              <div className="flex items-center gap-4">
                <img
                  src={app.image || "/default-app-image.jpg"}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded-lg"
                />
                <h2 className="text-xl font-semibold">{app.title}</h2>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img
                  src={downloadIcon}
                  alt="Downloads"
                  className="w-5 h-5"
                />
                <p className="text-gray-600 font-semibold">{app.downloads?.toLocaleString() || 0}</p>
              </div>
            </div>

            {/* Right: Size + Uninstall */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <div className="text-center">
                <p className="font-semibold">{app.size} MB</p>
              </div>
              <button
                onClick={() => handleUninstall(app.id)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Uninstall
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default MyInstallations;
