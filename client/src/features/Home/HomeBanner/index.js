import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles.module.css';

const Banner = () => (
  <>
    <div className={styles.banner}>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.title}> Find your next events.</div>
      </motion.div>
    </div>
  </>
);

export default Banner;
