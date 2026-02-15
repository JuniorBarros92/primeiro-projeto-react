import React from "react";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useUserForm from "../../Hooks/useUserForm";
import { USER_POST } from "../../Api";
import Error from "../Helper/Error";
import { UserContext } from "../../UserContext";
import userFetch from "../../Hooks/userFetch";

const LoginCreate = () => {
  const username = useUserForm();
  const email = useUserForm("email");
  const password = useUserForm();

  const { userLogin } = React.useContext(UserContext);
  const { loading, error, request } = userFetch();
  
  async function handleSubmit(event) {
    event.preventDefault();

    if (username.validate() && email.validate() && password.validate()) {
      try {
        const { url, options } = USER_POST({
          username: username.value,
          email: email.value,
          password: password.value,
        });
        const { response, json } = await request(url, options);
        if (response && response.ok) {
          userLogin(username.value, password.value);
          console.log("Cadastro realizado com sucesso!");
        } else {
          console.error(json || "Erro ao cadastrar");
        }
      } catch (err) {
        console.error(err);
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
