import React from 'react';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

const Toast = () => {
  const { alert } = useSelector(state => state.alert);

  return (
    <>
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: alert.active ? 0 : -60, opacity: alert.active ? 1 : 0 }}
        style={{
          position: 'fixed',
          top: alert.active ? '60px' : 0,
          right: 0,
          left: 0,
          zIndex: 1000,
          width: '100%',
          padding: '1rem'
        }}
      >
        <div className={`alert ${alert.type}`}>{alert.text}</div>
      </motion.div>

      <style jsx>{`
        .alert {
          border-radius: 3px;
          padding: 2rem 1.5rem;
          font-size: 1.7rem;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
            0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .success {
          background-color: #8bc34a;
          color: #fff;
        }

        .error {
          background-color: #fbe1e3;
          color: #c00;
        }
      `}</style>
    </>
  );
};

export default Toast;
