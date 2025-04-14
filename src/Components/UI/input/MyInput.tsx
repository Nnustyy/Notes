import React, { ChangeEventHandler } from 'react';
import classes from './MyInput.module.scss'

interface IMyInput {
  onChange?:ChangeEventHandler<HTMLInputElement>,
  type:string, 
  placeholder:string,
  value?:string
}

const MyInput = ({type,placeholder,value, onChange}:IMyInput) => {
  return (
    <input  className={classes.myInput} type={type} placeholder={placeholder} value={value} onChange={onChange} />
  );
};

export default MyInput;