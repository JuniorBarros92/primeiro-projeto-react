import React from "react";
import styles from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";
import useForm from "../../Hooks/useUserForm";
import userFetch from "../../Hooks/userFetch";
import { PHOTO_POST } from "../../api";

const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});
  const { data, error, loading, request } = userFetch();

  React.useEffect(() => {
    if (data) {
      nome.setValue('');
      peso.setValue('');
      idade.setValue('');
      setImg({});
      alert('Foto postada com sucesso!');
    }
  }, [data, nome, peso, idade]);

  function handleSubmit(event) {
    event.preventDefault();
    
    // Validação de imagem
    if (!img.raw) {
      alert('Selecione uma imagem');
      return;
    }
    
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    if (target.files && target.files[0]) {
      setImg({
        preview: URL.createObjectURL(target.files[0]),
        raw: target.files[0],
      });
    }
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button disabled={loading}>{loading ? 'Enviando...' : 'Enviar'}</Button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </section>
  );
};

export default UserPhotoPost;
