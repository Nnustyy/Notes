import React from 'react';

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
          <button className='note-delete-btn'>Delete</button>
        </div>
      </div>
  );
};

export default Note;