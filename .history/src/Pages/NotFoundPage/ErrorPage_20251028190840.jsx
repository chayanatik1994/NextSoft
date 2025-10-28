import React from 'react';
import pageNotFound from '../../assets/App-Error.png';

const ErrorPage = () => (
  <div className="text-center py-20">
    <img src={pageNoFound}/>
    <h1 className="text-4xl font-bold mb-4">Oops, page not found!</h1>
    <p>The page you are looking for is not available.</p>
    <button>Go Back</button>
  </div>
);

export default ErrorPage;
