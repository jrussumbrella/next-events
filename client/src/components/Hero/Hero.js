import React from 'react';
import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const Hero = ({ title }) => (
  <>
    <div className={styles.hero}>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div className={styles.title}>{title}</div>
      </motion.div>
    </div>
  </>
);

export default Hero;
