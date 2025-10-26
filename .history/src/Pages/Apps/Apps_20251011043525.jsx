import React, { useEffect, useState } from 'react';

const App = ({ data }) => {
  console.log(data);
  return (
    <div>
      <h1>SingleApp</h1>
    </div>
  );
};

const Apps = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('/appsData.json')
      .then(res => res.json())
      .then(fetchedData => {
        setData(fetchedData);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className="text-3xl text-center">Apps</h1>
      {data.map((singleApp) => (
        <App key={singleApp.id} data={singleApp} />
      ))}
    </div>
  );
};

export default Apps;