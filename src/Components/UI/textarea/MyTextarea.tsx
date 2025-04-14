import React, { ChangeEventHandler } from 'react';
import classes from './MyTextarea.module.scss'

interface IMyTextarea {
  placeholder:string,
  onChange?:ChangeEventHandler<HTMLTextAreaElement>,
  value?:string
}

const MyTextarea = ({placeholder, value, onChange}:IMyTextarea) => {
  return (
    <textarea className={classes.myTextarea} placeholder={placeholder} value={value} onChange={onChange} >

    </textarea>
  );
};

export default MyTextarea;