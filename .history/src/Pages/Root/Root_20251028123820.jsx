import React from 'react';
import Header from '../../Components/Header/Footer/Header';
import Footer from '../../Components/Header/Footer/Footer';
import { Outlet } from 'react-router';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Full-width Header */}
      <Header />

      {/* Main content container */}
      <main>
        <Outlet />
      </main>

      {/* Full-width Footer */}
      <Footer />
    </div>
  );
};

export default Root;
