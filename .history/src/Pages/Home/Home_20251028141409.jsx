import React from 'react';
import appsData from '../../appsData.json'; // your JSON file

const TrendingApps = () => {
  return (
    <section className="w-full py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-10">Trending Apps</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {appsData.map((app) => (
            <div key={app.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
              <img src={app.image} alt={app.title} className="w-32 h-32 object-cover rounded-lg mb-4" />
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">{app.title}</h3>
                {app.dialogueTitle && (
                  <span className="text-green-500 font-medium">{app.dialogueTitle}</span>
                )}
              </div>
              <p className="text-gray-600 text-sm mb-2">{app.description}</p>
              <p className="text-gray-500 text-xs">Size: {app.size}MB | Downloads: {app.downloads}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingApps;
