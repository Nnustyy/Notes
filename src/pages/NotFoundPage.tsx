import React from 'react';
import MyButton from '../Components/UI/MyButton/MyButton';
import classes from '../Components/UI/MyButton/MyButton.module.scss'
import { NavLink } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className='errorPage' >
      <h1>404 Not Found ❌</h1>
      <NavLink to='/' >Home page</NavLink>
      {/* <MyButton className={classes.buttonError}  >Home page</MyButton> */}
    </div>
  );
};

export default NotFoundPage;