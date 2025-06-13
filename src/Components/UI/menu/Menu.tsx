import React, { SetStateAction } from 'react';
import classes from './menu.module.scss'
import { NavLink } from 'react-router-dom';
import { Dispatch } from 'react';

type link = {
  href:string,
  value:string,
  id:number
}
interface IMenu {
  header:string,
  items:link[],
  active:boolean,
  setActive:Dispatch<SetStateAction<boolean>>
  
}

const menu = ({header,items,active}:IMenu) => {
  return (
    <div className={active ? `${classes.menuActive}`: `${classes.menu}` }>
      <div className={classes.blur}>
        <div className={classes.content}>
          <h3>{header}</h3>
          {items.map((item) => 
          <li className={classes.listItem} key={item.id} >
            <NavLink to={item.href}  >{item.value}</NavLink>
          </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default menu;