import React from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login/Login.jsx';
import Conta from './components/Conta.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login/*" element={<Login />} />
        <Route path="/conta" element={<Conta />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
