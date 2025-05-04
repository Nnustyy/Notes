import React from 'react';
import { INote } from './context/NoteContext';



const BinItem = (deletedNote:INote) => {
  return (
    <div className='bin'>
      <div className="bin-content">
        <div className="bin-title">{deletedNote.title}</div>
        <div className="bin-desc">{deletedNote.desc}</div>
      </div>
    </div>
  );
};

export default BinItem;