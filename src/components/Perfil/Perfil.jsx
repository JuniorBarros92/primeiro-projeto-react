import React from 'react';
import { useParams } from 'react-router-dom';

const Perfil = () => {
  const { author } = useParams();

  return (
    <section className='container mainContainer'>
      <h1 className='title'>Perfil de @{author}</h1>
      <p>Fotos de {author}</p>
    </section>
  );
};

export default Perfil;
