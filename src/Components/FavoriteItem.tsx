import React from 'react';
import classes from './UI/MyButton/MyButton.module.scss'
import MyButton from './UI/MyButton/MyButton';
import { INote } from './context/NoteContext';

const FavoriteItem = (favNote:INote) => {
  return (
    <div className='fav'>
      <div className="fav-content">
        <div className="fav-title">{favNote.title}</div>
        <div className="fav-desc">{favNote.desc}</div>
        <div className="fav-actions">
        <MyButton className={classes.buttonFav} >❤️</MyButton>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;