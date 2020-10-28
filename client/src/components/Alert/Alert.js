import React from 'react';
import styles from './Alert.module.css';

const Alert = ({ type, message }) => {
  const alertStyle = `${styles.alert} ${styles[type]}`;

  return <div className={alertStyle}>{message}</div>;
};

export default Alert;
