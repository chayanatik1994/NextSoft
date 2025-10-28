import React from 'react';
import { useParams } from 'react-router-dom';
import appsData from '../../data/appsData.json';

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));

  if (!app) return <p>App not found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{app.title}</h1>
      <img src={app.image} alt={app.title} className="w-full h-64 object-cover rounded mb-4" />
      <p><strong>Downloads:</strong> {app.downloads}</p>
      <p><strong>Rating:</strong> {app.ratingAvg}</p>
      <p className="mt-4">{app.description}</p>
    </div>
  );
};

export default AppDetails;
