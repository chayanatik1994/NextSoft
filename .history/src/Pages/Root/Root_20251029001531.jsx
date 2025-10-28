import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Footer/Header';
import Footer from '../../Components/Header/Footer/Footer';
import { Outlet } from 'react-router';
import LoadingSpinner from '../../Components/LoadingSpinner'; 

const Root = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false); 
    }, 3000);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main>
        {loading ? (
          <LoadingSpinner /> 
        ) : (
          <Outlet /> 
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Root;
