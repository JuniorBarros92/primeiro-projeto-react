import React from 'react';
import { UserContext } from '../UserContext';

const Conta = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <div>
      <h1>Bem-vindo, {data?.username}!</h1>
      <button onClick={userLogout}>Sair</button>
    </div>
  );
};

export default Conta;
