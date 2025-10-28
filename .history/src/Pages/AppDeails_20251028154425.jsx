import React from 'react';
import { useParams } from 'react-router';
import appsData from '../appsData.json';

const AppDetails = () => {
  const { id } = useParams();
  const app = appsData.find(a => a.id === parseInt(id));

  if (!app) return <p>App Not Found</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold">{app.title}</h1>
      <img src={app.image} alt={app.title} className="w-full h-64 object-cover my-4" />
      <p>{app.description}</p>
      <p>Downloads: {app.downloads}</p>
      <p>Rating: {app.ratingAvg}</p>
    </div>
  );
};

export default AppDetails;
