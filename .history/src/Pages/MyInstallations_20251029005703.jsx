import React, { useEffect, useState } from "react";
import MyInstallations from "";

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
      <h1 className="text-3xl font-bold mb-6">My Installed Apps</h1>
      <div className="grid grid-cols-3 gap-6">
        {installedApps.length === 0 ? (
          <p>No apps installed.</p>
        ) : (
          installedApps.map((app) => (
            <div key={app.id} className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center">
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-40 object-cover rounded-xl mb-4"
              />
              <h2 className="text-xl font-semibold">{app.title}</h2>
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
