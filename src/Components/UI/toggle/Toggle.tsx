import React from 'react';
import classes from './Toggle.module.scss'

interface IToggle {
  handleChange:() => void,
  isChecked:boolean
}

const Toggle = ({handleChange}:IToggle) => {
  return (
    <div className={classes.toggleContainer} >
      <input 
      type="checkbox"
      id='check'
      className={classes.toggle}
      onChange={handleChange}
      />
    </div>
  );
};

export default Toggle;