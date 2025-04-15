import React, { MouseEventHandler, ReactNode } from 'react';
import classes from './FormButton.module.scss'

interface IMyButton {
  children?:React.ReactNode,
  disabled?:boolean,
  onClick?:MouseEventHandler<HTMLButtonElement>,
  className?:string
}

const MyButton = ({children, disabled, onClick, className}:IMyButton) => {
  return (
    <button  disabled={disabled} onClick={onClick}  className={className}>
      {children}
    </button>
  );
};

export default MyButton;