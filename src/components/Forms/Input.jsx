import React from 'react';
import styles from './Input.module.css';

const Input = ({ label, type = 'text', name, value, onChange, error, ...props }) => {
  console.log('Input rendering:', { label, type, name, value });
  return (
    <div className={styles.inputWrapper}>
      {label && <label htmlFor={name} className={styles.label}>{label}</label>}
      <input
        className={styles.input}
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        {...props}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default Input;