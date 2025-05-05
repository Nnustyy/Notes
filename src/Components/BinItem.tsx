import React from 'react';
import { INote } from './context/NoteContext';
import MyButton from './UI/MyButton/MyButton';
import classes from './UI/MyButton/MyButton.module.scss'


const BinItem = (deletedNote:INote) => {
  return (
    <div className='bin'>
      <div className="bin-content">
        <div className="bin-title">{deletedNote.title}</div>
        <div className="bin-desc">{deletedNote.desc}</div>
        <div className="bin-actions">
          <MyButton className={classes.buttonRestore} >Restore</MyButton>
          <MyButton className={classes.buttonDelete} >Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default BinItem;