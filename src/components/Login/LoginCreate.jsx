import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useUserForm from "../../Hooks/useUserForm";
import { USER_POST } from "../../api";
import Error from "../Helper/Error";
import styles from "./Login.module.css";
import { UserContext } from "../../UserContext";

const LoginCreate = () => {
  const username = useUserForm();
  const email = useUserForm("email");
  const password = useUserForm();
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);


  const {userLogin} = React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      try {
        setError(null);
        setLoading(true);
        const { url, options } = USER_POST({
          username: username.value,
          email: email.value,
          password: password.value,
        });
        const response = await fetch(url, options);
        if (!response.ok)userLogin(username.value, password.value);
        
        if (!response.ok) {
          const json = await response.json();
          throw new Error(json.message || "Erro ao cadastrar");
        }
        
        // Sucesso - redirecionar ou limpar formulário
        console.log("Cadastro realizado com sucesso!");
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
  }

  return (
    <section className="animeLeft">
      <h1 className="title">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Email" type="email" name="email" {...email} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastrar</Button>
        )}
        <Error error={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
