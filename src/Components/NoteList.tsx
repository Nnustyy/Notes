import React from 'react';
import Note from './NoteItem';
import NoteItem from './NoteItem';

interface INote {
  id:number,
  desc:string, 
  title:string,
  
}

interface INoteListProps {
  notes:INote[]
}

const NoteList = ({notes}:INoteListProps) => {
  return (
    <div>
      {notes.map((note,index) => 
      <NoteItem   key={note.id} note={note} number={index + 1} />
      )}
    </div>
  );
};

export default NoteList;