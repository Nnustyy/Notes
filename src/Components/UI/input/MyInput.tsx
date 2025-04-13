import React, { ChangeEventHandler } from 'react';
import classes from './MyInput.module.scss'

interface IMyInput {
  onChange?:ChangeEventHandler<HTMLInputElement>,
  type:string, 
  placeholder:string,
  value?:string
}

const MyInput = ({type,placeholder,value}:IMyInput) => {
  return (
    <input  className={classes.myInput} type={type} placeholder={placeholder}  value={value}/>
  );
};

export default MyInput;