import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg';
import { UserContext } from '../UserContext';

const Header = () => {
  const { login, userLogout } = React.useContext(UserContext);

  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link className={styles.logo} to="/"><img src={Dogs} alt="Dogs" /></Link>
        {login ? (
          <button onClick={userLogout} className={styles.login}>Sair</button>
        ) : (
          <Link className={styles.login} to="/login">Login / Criar</Link>
        )}
      </nav>
    </header>
  );
};

export default Header;