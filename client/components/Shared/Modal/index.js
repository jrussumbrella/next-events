import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setModal } from '../../../store/modal/modalAction';
import { IoMdClose } from 'react-icons/io';

const Modal = ({ children, title }) => {
  const dispatch = useDispatch();
  const { open } = useSelector(state => state.modal);
  const modalRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleCloseModal);
      return () => document.removeEventListener('click', handleCloseModal);
    }
  }, [open]);

  const handleCloseModal = e => {
    try {
      if (modalRef.current && modalRef.current.contains(e.target)) return;
      dispatch(setModal(false));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {open ? (
        ReactDOM.createPortal(
          <>
            <div className="modal">
              <div className="modal-body" ref={modalRef}>
                <div className="header">
                  <div className="title">{title}</div>
                  <button
                    className="close"
                    onClick={() => dispatch(setModal(false))}
                  >
                    <IoMdClose />
                  </button>
                </div>
                {children}
              </div>
            </div>
            <style jsx>{`
              .modal {
                background-color: rgba(0, 0, 0, 0.5);
                width: 100%;
                height: 100%;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 999;
                display: flex;
                align-items: center;
                justify-content: center;
              }

              .header {
                padding-bottom: 2rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
              }

              .title {
                font-size: 1.8rem;
                font-weight: 600;
              }

              .close {
                font-size: 2rem;
                font-weight: 700;
                background-color: transparent;
                border: 1px solid transparent;
                cursor: pointer;
                width: 3rem;
                color: var(--color-primary);
              }

              .modal-body {
                background-color: #fff;
                padding: 1.5rem;
                border-radius: 6px;
                width: 80%;
              }
            `}</style>
          </>,
          document.body
        )
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Modal;
