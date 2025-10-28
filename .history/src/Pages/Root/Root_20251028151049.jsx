import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

import Home from './pages/Home';
import Apps from './pages/Apps';
import Installation from './pages/Installation';
import AppDetails from './pages/AppDetails';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Header /> {/* Navbar always visible */}

      <main className="min-h-[80vh]"> {/* Content area */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/app/:id" element={<AppDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer /> {/* Footer always visible */}
    </Router>
  );
}

export default App;
