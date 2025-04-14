import React, { useEffect, useState } from 'react';
import './styles/index.scss'
import Note from './Components/NoteItem';
import NoteList from './Components/NoteList';
import MyButton from './Components/UI/formButton/FormButton';
import MyInput from './Components/UI/input/MyInput';
import MyTextarea from './Components/UI/textarea/MyTextarea';
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