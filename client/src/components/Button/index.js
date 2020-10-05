import React from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';
import styles from './styles.module.css';

const Button = ({
  type,
  title,
  style,
  onClick,
  classType,
  loading,
  href,
  icon,
  disabled,
}) => {
  return (
    <>
      {href ? (
        <Link
          to={href}
          className={`${styles.btn} ${classType || ''}`}
          style={style}
        >
          {title}
        </Link>
      ) : (
        <button
          type={type}
          className={`${styles.btn} ${classType || ''}`}
          style={style}
          onClick={onClick}
          disabled={loading || disabled}
        >
          {loading ? <Spinner size={3} color={`#fff`} /> : title}
          {icon && <span className="btn-icon">{icon}</span>}
        </button>
      )}
    </>
  );
};

export default Button;
