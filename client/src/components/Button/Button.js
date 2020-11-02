import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import styles from './Button.module.css';

const Button = ({
  type,
  title,
  style,
  onClick,
  loading,
  href,
  icon,
  disabled,
  variant,
  className = '',
}) => (
  <>
    {href ? (
      <Link
        to={href}
        className={`${styles.btn} ${styles[variant] || ''}`}
        style={style}
      >
        {title}
      </Link>
    ) : (
      <button
        type={type}
        className={`${styles.btn} ${styles[variant] || ''} ${className}`}
        style={style}
        onClick={onClick}
        disabled={loading || disabled}
      >
        {loading ? <Spinner size={3} color="#fff" /> : title}
        {icon && <span className={styles.icon}>{icon}</span>}
      </button>
    )}
  </>
);

export default Button;
