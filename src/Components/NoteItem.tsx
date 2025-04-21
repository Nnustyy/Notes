import React, { useContext, useEffect, useState } from 'react';
import MyButton from './UI/MyButton/MyButton';
import classes from './UI/MyButton/MyButton.module.scss'
import { NoteContext } from './context/CreateContext';
import Modal from './UI/modal/Modal';
import { useFormState } from 'react-dom';


interface INote {
  title:string,
  desc:string,
  id:number,
}

interface NoteProps {
  note:INote,
  number?:number
}

const NoteItem= ({note,number}:NoteProps) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const {notes, setNotes} = useContext(NoteContext)

  // function toggleModal () {
  //   setShowModal(!showModal)
  // }

const deleteNote = (note:INote) => {
  const updatedNotes = (notes.filter((n) => n.id !== note.id))
  setNotes(updatedNotes)
  localStorage.setItem('notes', JSON.stringify(updatedNotes)) 
}

  return (
    <div className="note" data-aos="fade-up" >
        <div className="note-content">
          <div className='note-title'> {number}. {note.title}</div>
          <div className='note-desc'>
            {note.desc}
          </div>
        </div>
        <div className="note-btns">
          <MyButton className={classes.buttonDelete} onClick={() => deleteNote(note)} >✖</MyButton>
          {/* <Modal active={showModal} setActive={setShowModal}>
            <h2>Do you want to delete the note?</h2>
            
            <MyButton className={classes.buttonDelete} onClick={() =>  deleteNote(note) } >Yes</MyButton>
            <MyButton className={classes.buttonCancel} onClick={toggleModal} >No</MyButton> 
            
            
          </Modal> */}
            
          
        </div>
      </div>
  );
};

export default NoteItem;