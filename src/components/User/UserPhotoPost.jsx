import React from "react";
import styels from "./UserPhotoPost.module.css";
import Input from "../Forms/Input";
import Button from "../Forms/Button";

const UsePhotoPost = () => {
  function handleSubmit(event) {
    event.preventDefault();
  }

  function handleImgChange() {
    // handle image change
  }

  return (
    <section className={`${styels.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" />
        <Input label="Peso" type="text" name="peso" />
        <Input label="Idade" type="text" name="idade" />
        <input type="file" name="img" id="img" onChange={handleImgChange} />
        <Button>Enviar</Button>
      </form>
    </section>
  );
};

export default UsePhotoPost;
