import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import HomePage from './Pages/Home/Home';

import AppDetails from './Pages/Apps/AppDetails';
import NotFoundPage from './Pages/NotFoundPage/ErrorPage';
import AllAppsPage from '../AllAppsPage/AllAppsPage';

function App() {
  return (
    <Router>
      <Header />

      {/* Main Routes */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/apps" element={<AllAppsPage />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
