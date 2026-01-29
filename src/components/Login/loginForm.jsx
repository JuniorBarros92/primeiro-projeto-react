import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useUserForm from '../../Hooks/useUserForm';
import { UserContext } from '../../UserContext';

const LoginForm = () => {  
  const { userLogin, error: contextError, loading: contextLoading } = React.useContext(UserContext);
  const username = useUserForm();
  const password = useUserForm();
  const [error, setError] = React.useState(null);

  async function handleSubmit(event) {  
    event.preventDefault();

    if (username.validate() && password.validate()) {
      setError(null);
      try {
        await userLogin(username.value, password.value);
      } catch(err) {
        setError('Erro na conexão: ' + err.message);
      }
    }
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
        {(error || contextError) && <p style={{color: 'red'}}>{error || contextError}</p>}
        <Button type="submit" disabled={contextLoading}>{contextLoading ? 'Carregando...' : 'Entrar'}</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;