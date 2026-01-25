import React from 'react';
import styles from './Button.module.css';

const Button = ({ type, onClick, disabled }) => {
  return (
    <button className={styles.button} type={type} onClick={onClick} disabled={disabled}></button>);
}

export default Button;