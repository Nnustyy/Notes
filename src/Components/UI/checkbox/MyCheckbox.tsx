
import React from 'react';
import classes from './MyCheckbox.module.scss';

interface IMyCheckbox {
  id:number
}

const MyCheckbox = ({id}:IMyCheckbox) => {
  return (
    <div className={classes.checkboxContainer}>
      <input type="checkbox" id={`checkbox-${id}`} />
      <label htmlFor={`checkbox-${id}`} className={classes.checkmark}></label>
    </div>
  );
};

export default MyCheckbox;