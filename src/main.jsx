import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Audio from './pages/Audio';
import Videogames from './pages/Videogames';
import Smartphones from './pages/Smartphones';
import Computers from './pages/Computers';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/audio" element={<Audio />} />
          <Route path="/videogames" element={<Videogames />} />
          <Route path="/smartphones" element={<Smartphones />} />
          <Route path="/computers" element={<Computers />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
