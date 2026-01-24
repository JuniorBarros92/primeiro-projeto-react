import React from 'react';
import './app.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import Login from './components/Login/Login.jsx';
 function App() {
  return (
    <div>
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/login" element={<Login />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;