import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login/Login';
import User from './components/User/User';
import ProtectedRoute from './Components/Helper/ProtectedRoute';
import Photo from './components/Photo/Photo';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login/*" element={<Login />} />
        <Route
          path="conta/*"
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          }
        />
        <Route path="foto/:id" element={<Photo />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
