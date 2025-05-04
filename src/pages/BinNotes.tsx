import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../Components/context/NoteContext';

const BinNotes = () => {
  const {recentlyDeletedNotes} = useContext(NoteContext)

  useEffect(()=> {
    console.log(recentlyDeletedNotes)
  },[recentlyDeletedNotes])
  return (
    <div>
      
    </div>
  );
};

export default BinNotes;