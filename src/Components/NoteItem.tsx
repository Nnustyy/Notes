import React from 'react';
import MyButton from './UI/formButton/FormButton';
import classes from './UI/formButton/FormButton.module.scss'

interface INote {
  title:string,
  desc:string,
  id:number,
}

interface NoteProps {
  note:INote,
  number?:number
}

const Note= ({note,number}:NoteProps) => {
  return (
    <div className="note">
        <div className="note-content">
          <div className='note-title'> {number}. {note.title}</div>
          <div className='note-desc'>
            {note.desc}
          </div>
        </div>
        <div className="note-btns">
          <MyButton className={classes.buttonDelete} >Delete</MyButton>
        </div>
      </div>
  );
};

export default Note;