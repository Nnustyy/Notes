import React, { useEffect, useState } from 'react';
import './styles/index.scss'
import NoteList from './Components/NoteList';
import CreateNoteForm from './Components/CreateNoteForm';

interface INote {
  id:number,
  title:string,
  desc:string
}

const App = () => {


const [notes, setNotes] = useState<INote[]>([])


const createNewNote = (newNote:{title:string, desc:string, id:number}) => {
  setNotes([...notes, newNote])
}


  return (
    <div  className='App'>
      <CreateNoteForm create={createNewNote} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;