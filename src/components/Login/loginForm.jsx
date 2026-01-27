import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';



const LoginForm = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit(event) {  
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      console.log(response);
      return response.json();
    }).then((json) => {
      console.log(json);
    });
  }

  return (
    <div>
      <h1>Login</h1>
      <form action="" onSubmit={handleSubmit}>
        <Input
          label="Usuário"
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button>Entrar</button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;