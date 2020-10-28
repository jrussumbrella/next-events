import React from 'react';
import styles from './Spinner.module.css';

const Spinner = ({ color, size }) => (
  <>
    <div className={styles.loader} />
  </>
);

export default Spinner;
