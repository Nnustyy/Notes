import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'

const Navbar = () => {

  const [isDark, setIsDark] = useState<boolean>(false)

  return (
    <header>
      <NavLink className={classes.logo} to='/' >Notes</NavLink>
      <nav>
        <ul className={classes.navLinks} >
          <li className={classes.listItem} >
            <NavLink className={classes.link} to='/fav' >Favorites ❤️</NavLink>
          </li>
          <li className={classes.listItem} >
            <NavLink className={classes.link} to='/' >All notes 🗒️</NavLink>
          </li>
          <li className={classes.listItem} >
            <NavLink className={classes.link} to='/bin' >Bin 🗑️</NavLink>
          </li>
        </ul>
      </nav>
      <div>toggle</div>
    </header>
  );
};

export default Navbar;