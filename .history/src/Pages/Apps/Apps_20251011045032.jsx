import React, { useEffect, useState } from 'react';

const Apps = () => {
  const [allApps, setAllApps] = useState([]);

  useEffect(() => {
    fetch('appData.json') // Correct fetch syntax
      .then(res => res.json())
      .then(data => {
        setAllApps(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Hello ami Books</h1>
      {/* Optional: Render the data */}
      {/* {allApps.map(app => <div key={app.id}>{app.name}</div>)} */}
    </div>
  );
};

export default Apps;