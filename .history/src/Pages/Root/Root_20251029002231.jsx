import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Footer/Header';
import Footer from '../../Components/Header/Footer/Footer';
import { Outlet } from 'react-router';
import SpinnerLoading from '../../Components/SpinnerLoading';  // Import SpinnerLoading

const Root = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading for demonstration (replace with actual data fetching)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);  // After data is loaded, stop the loading state
    }, 2000);  // Simulate a 2-second loading period
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
            <SpinnerLoading /> {/* Show spinner while loading */}
          </div>
        ) : (
          <Outlet /> // Once loading is complete, display the main content
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
