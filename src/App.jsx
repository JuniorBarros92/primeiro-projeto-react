import React from 'react';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
 function App() {
  return (
    <div>
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/*" element={<Home />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;