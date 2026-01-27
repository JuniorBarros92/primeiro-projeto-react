import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Forms/Input';
import Button from '../Forms/Button';
import useUserForm from '../../Hooks/useUserForm';
import { TOKEN_POST } from '../../Api';



const LoginForm = () => {  
  const username = useUserForm();
  const password = useUserForm();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function handleSubmit(event) {  
    event.preventDefault();

    if (username.validate() && password.validate()) {
      setLoading(true);
      setError(null);
      
      const { url, options} = TOKEN_POST({
        username: username.value,
        password: password.value
      });
      
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        
        if(json.token) {
          localStorage.setItem('token', json.token);
          navigate('/');
        } else if(json.code === 'rest_invalid_combo') {
          setError('Usuário ou senha inválidos');
        } else {
          setError(json.message || 'Erro ao fazer login');
        }
      } catch(err) {
        setError('Erro na conexão: ' + err.message);
      } finally {
        setLoading(false);
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
        {error && <p style={{color: 'red'}}>{error}</p>}
        <Button type="submit" disabled={loading}>{loading ? 'Carregando...' : 'Entrar'}</Button>
      </form>

      <Link to="/login/criar">Cadastro</Link>
    </div>
  );
};

export default LoginForm;