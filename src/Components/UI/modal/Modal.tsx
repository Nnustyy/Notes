import classes from './Modal.module.scss'
import React from 'react';

interface ModalProps {
  active:boolean,
  setActive:(value:boolean) => void,
  children:React.ReactNode,
}

const Modal = ({active, setActive,children}:ModalProps) => {
  if(!active) return null
  return (
    <div className={classes.modal} onClick={() => setActive(false)}  >
      <div className={classes.modalContent}  onClick={(e) => e.stopPropagation()} >
      {children}
      </div>
    </div>
  );
};

export default Modal;
