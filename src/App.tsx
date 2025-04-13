import React, { FC, use, useState } from 'react';
import './styles/index.scss'
import Note from './Components/NoteItem';
import NoteList from './Components/NoteList';
import MyButton from './Components/UI/formButton/FormButton';
import MyInput from './Components/UI/input/MyInput';
import MyTextarea from './Components/UI/textarea/MyTextarea';

interface INote {
  id:number,
  title:string,
  desc:string
}

const App = () => {


const [notes, setNotes] = useState<INote[]>([
  {id:1, title:'first', desc:'first desc'},
  {id:2, title:'second', desc:'second desc'},
  {id:3, title:'third', desc:'third desc'},
])


  return (
    <div  className='App'>

    <form>
      <MyInput type="text" placeholder='title'/>
      <MyTextarea placeholder="descripton" ></MyTextarea>
      <MyButton>create note</MyButton>
    </form>

      <NoteList notes={notes} />


    </div>
  );
};

export default App;