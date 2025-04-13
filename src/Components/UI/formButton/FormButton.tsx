import React, { MouseEventHandler, ReactNode } from 'react';
import classes from './FormButton.module.scss'

interface IMyButton {
  children?:React.ReactNode,
  disabled?:boolean,
  onClick?:MouseEventHandler<HTMLButtonElement>
}

const MyButton = ({children, disabled, onClick}:IMyButton) => {
  return (
    <button  disabled={disabled} onClick={onClick}  className={classes.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;