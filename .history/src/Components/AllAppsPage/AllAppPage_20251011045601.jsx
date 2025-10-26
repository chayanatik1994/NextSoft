import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AllAppsPage = () => {
  const [apps, setApps] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredApps, setFilteredApps] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    fetch('/appData.json')
      .then(res => res.json())
      .then(data => {
        setApps(data);
        setFilteredApps(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const filtered = apps.filter(app =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [searchTerm, apps]);

  if (loading) return <div>Loading...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>All Apps</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
        <div>Total Apps: {apps.length}</div>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {filteredApps.length === 0 ? (
        <p>No App Found</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
          {filteredApps.map(app => (
            <div
              key={app.id}
              style={{ border: '1px solid #ccc', padding: '10px', cursor: 'pointer' }}
              onClick={() => navigate(`/app/${app.id}`)}
            >
              <img src={app.image} alt={app.title} style={{ width: '100%' }} />
              <h3>{app.title}</h3>
              <p>Downloads: {app.downloads}</p>
              <p>Rating: {app.ratingAvg}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllAppsPage;