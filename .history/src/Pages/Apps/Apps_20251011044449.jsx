import React, { Suspense } from 'react';

const Apps = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl text-center">Apps</h1>
      <Suspense fallback={<span>Loading...</span>}>
        {data.map((singleApp) => (
          <App key={singleApp.id} singleApp={singleApp} />
        ))}
      </Suspense>
    </div>
  );
};

export default Apps;