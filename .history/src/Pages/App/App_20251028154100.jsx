import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './Pages/Home/Home';
import AllAppsPage from './Pages/Apps/AllAppsPage';
import AppDetails from './Pages/Apps/AppDetails';
import NotFoundPage from './Pages/NotFoundPage/ErrorPage';

function App() {
  return (
    <Router>
      {/* Navbar */}
      <Header />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AllAppsPage />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </Router>
  );
}

export default App;
