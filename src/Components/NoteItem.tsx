import React, { useContext } from 'react';
import MyButton from './UI/formButton/FormButton';
import classes from './UI/formButton/FormButton.module.scss'
import { NoteContext } from './context/CreateContext';

interface INote {
  title:string,
  desc:string,
  id:number,
}

interface NoteProps {
  note:INote,
  number?:number
}

const NoteItem= ({note,number}:NoteProps) => {

const {notes, setNotes} = useContext(NoteContext)

const deleteNote = (note:INote) => {
  setNotes(notes?.filter((n) => n.id !== note.id))
}

  return (
    <div className="note">
        <div className="note-content">
          <div className='note-title'> {number}. {note.title}</div>
          <div className='note-desc'>
            {note.desc}
          </div>
        </div>
        <div className="note-btns">
          <MyButton className={classes.buttonDelete} onClick={() => deleteNote(note)} >Delete</MyButton>
        </div>
      </div>
  );
};

export default NoteItem;