import React from 'react';
import './app.css';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import LoginForm from './components/Login/loginForm.jsx';
 function App() {
  console.log('App rendering');
  return (
    <div>
      <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginForm />} />
      </Routes>
    <Footer />
    </BrowserRouter>
    </div>
  );
}

export default App;