import React from 'react';
import './app.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login/Login.jsx';
import User from './components/User/User.jsx';
import ProtectedRoute from './components/Helper/ProtectedRoute.jsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
