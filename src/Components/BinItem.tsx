import{ useContext } from 'react';
import { INote, NoteContext } from './context/NoteContext';
import MyButton from './UI/MyButton/MyButton';
import classes from './UI/MyButton/MyButton.module.scss'



const BinItem = (deletedNote:INote) => {

  const {recentlyDeletedNotes,setRecentlyDeletedNotes,setNotes} = useContext(NoteContext)

  const restore = ((deletedNote:INote) => {
  const updatedNotes = (recentlyDeletedNotes.filter((note) => note.id !== deletedNote.id))
  setRecentlyDeletedNotes(updatedNotes)
  setNotes((prev => [...prev, deletedNote]))
  })

  const deleteNote = ((deletedNote:INote) => {
    const updatedNotes = (recentlyDeletedNotes.filter((note) => note.id !== deletedNote.id))
    setRecentlyDeletedNotes(updatedNotes)
  })

  return (
    <div className='bin'>
      <div className="bin-content">
        <div className="bin-title">{deletedNote.title}</div>
        <div className="bin-desc">{deletedNote.desc}</div>
        <div className="bin-actions">
          <MyButton onClick={() => restore(deletedNote)} className={classes.buttonRestore} >Restore</MyButton>
          <MyButton onClick={() => deleteNote(deletedNote)} className={classes.buttonDelete} >Delete</MyButton>
        </div>
      </div>
    </div>
  );
};

export default BinItem;