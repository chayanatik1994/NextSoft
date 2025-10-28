import React from 'react';
import { useNavigate } from 'react-router';
import appNotFound from '../../assets/App-Error.png';

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="text-center py-20">
      <img src={appNotFound} alt="Page not found" className="mx-auto mb-6"/>
        <h1 className="text-4xl font-bold mb-4">Oops, page not found!</h1>
          <p className="mb-6">The page you are looking for is not available.</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
         onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ErrorPage;
