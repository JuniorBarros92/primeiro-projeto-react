import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../Hooks/useFetch';
import { PHOTO_GET } from '../../api';
import Loading from '../Helper/Loading';
import Error from '../Helper/Error';
import PhotoContent from '../Photo/PhotoContent';

const Foto = () => {
  const { id } = useParams();
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [id, request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data) return (
    <section className='container mainContainer'>
      <PhotoContent data={data} />
    </section>
  );
  return null;
};

export default Foto;
