import React from 'react';
import { Link } from 'react-router-dom';

const User = () => {
  return (
    <div>
      <h2>Usuário</h2>
      <p>Bem-vindo à sua conta!</p>
      <Link to="/login/criar">Convidar amigos</Link>
    </div>
  );
};  

export default User;