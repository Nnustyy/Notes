import React, { use, useEffect, useState } from 'react';
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
  const [notes, setNotes] = useState<INote[]>([])

useEffect(() => {
  Aos.init()
},[])

useEffect(() => {
  const saved = localStorage.getItem('notes')
  if(saved) {
    setNotes(JSON.parse(saved))
  }
}, [])

const createNewNote = (newNote:INote) => {
  const updatedNotes = [...notes, newNote]
  setNotes(updatedNotes)
  localStorage.setItem('notes', JSON.stringify(updatedNotes))
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