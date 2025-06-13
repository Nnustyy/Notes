import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.scss'
import Toggle from '../toggle/Toggle';
import { NoteContext } from '../../context/NoteContext';




const Navbar = () => {

  const [isDark, setIsDark] = useState(false)
  const {activeMenu,setActiveMenu} = useContext(NoteContext)




useEffect(() => {
  if(localStorage.getItem('theme')) {
    document.documentElement.setAttribute('data-theme','dark')
    setIsDark(true)
  }
},[isDark])

const handleChange = () => {
  if(!isDark) {
    document.documentElement.setAttribute('data-theme', 'dark')
    setIsDark(true)
    localStorage.setItem('theme', 'exist')
  } else if (isDark) {
    document.documentElement.removeAttribute('data-theme')
    localStorage.removeItem('theme')
    setIsDark(false)
  }
}

  return (
      <header>

          <div className={classes.burgerBtn}  onClick={() => setActiveMenu(!activeMenu)}>
          <span></span>
        </div>
        <NavLink className={classes.logo} to='/' >Notes</NavLink>
        
        {/* <nav className={classes.headerNav}>
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
        </nav> */}
      <Toggle handleChange={handleChange} />
      </header>
    
  );
};

export default Navbar;