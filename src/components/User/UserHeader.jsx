import React from 'react';
import { useLocation } from 'react-router-dom';
import UserHeaderNav from './UserHeaderNav';
import styles from './UserHeader.module.css';


const UserHeader = () => {

const [title, setTitle] = React.useState('');
const location = useLocation();
React.useEffect(() => {
 
    const { pathname } = location;
    switch (pathname) {
        case '/conta/postar':
            setTitle('Postar sua Foto');
            break;
        case '/conta/estatisticas':
            setTitle('Estatísticas');
            break;
        default:
            setTitle('Minhas Fotos');
    }
  }, [location]);

  return (
   
    <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <UserHeaderNav />
    </header>
  );
}  

export default UserHeader;