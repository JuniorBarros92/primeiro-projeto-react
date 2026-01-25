import React from 'react';
import {Rautes, Route, Routes} from 'react-router-dom';
import LoginForm from './loginForm';

const Login = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/criar" element={<LoginCreate />} />
      <Route path="/perdeu" element={<LoginPasswordLost />} />
      <Route path="/resetar" element={<LoginPasswordReset />} />

    </Routes>
  );
};

export default Login;