import React, { FC } from 'react';
import Note from './NoteItem';

interface INote {
  id:number,
  desc:string, 
  title:string
}

interface INoteListProps {
  notes:INote[]
}

const NoteList = ({notes}:INoteListProps) => {
  return (
    <div>
      {notes.map((note) => 
      <Note key={note.id} note={note} />
      )}
    </div>
  );
};

export default NoteList;