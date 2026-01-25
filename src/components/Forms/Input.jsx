import React from 'react';
import styles from './Input.module.css';

const Input = ({ type, onClick, disabled }) => {
  return (
    <input className={styles.input} type={type} onClick={onClick} disabled={disabled} />);
}

export default Input;