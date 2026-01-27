import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useUserForm from '../../Hooks/useUserForm';



const LoginForm = () => {
  const username = useUserForm('email');
  const password = useUserForm();

  function handleSubmit(event) {  
    event.preventDefault();
    fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      }),
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
          {...username}
        />
        <Input
          label="Senha"
          type="password"
          name="password"
          {...password}
        />
        <Button>Entrar</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;