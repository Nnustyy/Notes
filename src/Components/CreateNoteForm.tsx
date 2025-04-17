import { useState } from 'react';
import React from 'react';
import MyButton from './UI/MyButton/MyButton';
import MyInput from './UI/input/MyInput';
import MyTextarea from './UI/textarea/MyTextarea';
import classes from './UI/MyButton/MyButton.module.scss'

interface INote {
  id:number,
  title:string,
  desc:string
}

interface CreateNoteFormProps {
  create: (newNote:INote) => void
}

const CreateNoteForm = ({create}:CreateNoteFormProps) => {


  const[note, setNote] = useState({title:'',desc:''})

  const addNewNote = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    const newNote = {
      ...note,
      id:Date.now()
    } 
    create(newNote)
    setNote({title:'',desc:''})
  }
  

  return (
    <form>
    <MyInput type="text" placeholder='title' value={note.title} onChange={e => setNote({...note, title:e.target.value})} />
    <MyTextarea placeholder="descripton" value={note.desc} onChange={e => setNote({...note, desc:e.target.value})} ></MyTextarea>
    <MyButton className={classes.buttonCreate} onClick={addNewNote} >create note</MyButton>
  </form> 
  );
};

export default CreateNoteForm;