import React, { MouseEventHandler } from 'react';

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