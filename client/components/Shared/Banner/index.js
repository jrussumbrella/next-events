import React from 'react';
import { motion } from 'framer-motion';

const Banner = () => {
  return (
    <>
      <div className="banner">
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <div className="title"> Find your next events.</div>
        </motion.div>
      </div>
      <style jsx>{`
        .banner {
          height: 20rem;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          background-color: var(--color-primary);
        }

        .title {
          font-size: 3rem;
          font-weight: 600;
          color: #ffff;
        }
      `}</style>
    </>
  );
};

export default Banner;
