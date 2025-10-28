import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './Pages/Home/Home';
import AllAppsPage from './Pages/Apps/AllAppsPage';
import AppDetails from './Pages/Apps/AppDetails';
import ErrorPage from './Pages/NotFoundPage/ErrorPage';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AllAppsPage />} />
        <Route path="/app/:id" element={<AppDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
