import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dogs from '../Assets/dogs.svg';


const Header = () => {
  return (
    <div className={styles.header}>
      <nav className='container'>
        <Link to="/"><img src={Dogs} alt="Dogs" /></Link>
        <Link to="/login">Login / Criar</Link>
      </nav>
    </div>
  );
};

export default Header;