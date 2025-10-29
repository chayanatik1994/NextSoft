import React, { useState, useEffect } from 'react';
import Header from '../../Components/Header/Footer/Header';
import Footer from '../../Components/Header/Footer/Footer';
import { Outlet } from 'react-router';
import SpinnerLoading from '../../Components/SpinnerLoading';


const Root = () => {
   const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
        setLoading(false);  
    }, 2000);  
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
        <main>
        {loading ? (
          <div className="flex justify-center items-center w-full h-screen">
              <SpinnerLoading /> 
          </div>
        ) : (
          <Outlet /> 
        )}
        </main>
      <Footer />
    </div>
  );
};

export default Root;
