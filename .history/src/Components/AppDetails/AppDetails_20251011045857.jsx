import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppDetails = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    fetch('/appData.json')
      .then(res => res.json())
      .then(data => {
        const found = data.find(a => a.id === parseInt(id));
        setApp(found);
        // Check if installed
        const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalled(installedApps.includes(found.id));
      });
  }, [id]);

  if (!app) return <div>Loading app details...</div>;

  const handleInstall = () => {
    setInstalling(true);
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    if (!installedApps.includes(app.id)) {
      installedApps.push(app.id);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(true);
      toast.success('App installed successfully!');
    }
    setInstalling(false);
  };

  const handleUninstall = () => {
    const installedApps = JSON.parse(localStorage.getItem('installedApps')) || [];
    const index = installedApps.indexOf(app.id);
    if (index > -1) {
      installedApps.splice(index, 1);
      localStorage.setItem('installedApps', JSON.stringify(installedApps));
      setInstalled(false);
      toast.info('App uninstalled');
    }
  };

  // Prepare review data for chart
  const reviewData = app.ratings.map(r => ({ name: r.name, count: r.count }));

  return (
    <div style={{ padding: '20px' }}>
      <ToastContainer />
      <div style={{ display: 'flex', gap: '20px' }}>
        <img src={app.image} alt={app.title} style={{ width: '300px' }} />
        <div>
          <h2>{app.title}</h2>
          <p>Rating: {app.ratingAvg} ⭐</p>
          <p>Downloads: {app.downloads.toLocaleString()}</p>
          <p>Reviews: {app.reviews.toLocaleString()}</p>
          <button
            disabled={installed}
            onClick={handleInstall}
            style={{ padding: '10px', marginRight: '10px' }}
          >
            {installed ? 'Installed' : 'Install'}
          </button>
          {installed && (
            <button onClick={handleUninstall} style={{ padding: '10px' }}>Uninstall</button>
          )}
        </div>
      </div>

      {/* Review Chart */}
      <div style={{ marginTop: '40px', width: '100%', height: '300px' }}>
        <h3>Reviews</h3>
        <ResponsiveContainer>
          <BarChart data={reviewData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Description */}
      <div style={{ marginTop: '40px' }}>
        <h3>Description</h3>
        <p>{app.description}</p>
      </div>
    </div>
  );
};

export default AppDetails;