import React, { useContext, useEffect } from 'react';
import '../styles/index.scss'
import NoteList from '../Components/NoteList';
import CreateNoteForm from '../Components/CreateNoteForm';
import { NoteContext } from '../Components/context/NoteContext';
import 'aos/dist/aos.css'
import Aos from 'aos';



export interface INote {
  id:number,
  title:string,
  desc:string
}




const Notes = () => {
  const {notes, setNotes} = useContext(NoteContext)

useEffect(() => {
  Aos.init()
},[])

const createNewNote = (newNote:INote) => {
  const updatedNotes = [...notes, newNote]
  setNotes(updatedNotes)
  localStorage.setItem('notes', JSON.stringify(updatedNotes))
}



  return (
    <div  className='App'>
      <CreateNoteForm create={createNewNote} />
      {notes.length === 0
      ? <h1 style={{textAlign:"center"}} >There are no posts</h1>
      : <NoteList notes={notes} />}
      
    </div>
  );
};

export default Notes;