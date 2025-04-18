import React, { useEffect, useState } from 'react';
import './styles/index.scss'
import NoteList from './Components/NoteList';
import CreateNoteForm from './Components/CreateNoteForm';
import { NoteContext } from './Components/context/CreateContext';
import 'aos/dist/aos.css'
import Aos from 'aos';

export interface INote {
  id:number,
  title:string,
  desc:string
}



const App = () => {
Aos.init()
const [notes, setNotes] = useState<INote[]>([])



const createNewNote = (newNote:INote) => {
  setNotes([...notes, newNote])
}


  return (
    <div  className='App'>
      <NoteContext.Provider value={{notes, setNotes}} >
      <CreateNoteForm create={createNewNote} />
      {notes.length === 0
      ? <h1 style={{textAlign:"center"}} >There are no posts</h1>
      : <NoteList notes={notes} />}
      </NoteContext.Provider>
    </div>
  );
};

export default App;