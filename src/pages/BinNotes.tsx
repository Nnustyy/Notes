import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../Components/context/NoteContext';
import BinList from '../Components/BinList';

const BinNotes = () => {
  const {recentlyDeletedNotes,setRecentlyDeletedNotes} = useContext(NoteContext)

  useEffect(()=> {
    const saved = localStorage.getItem('deletedNotes')
    if(saved) {
      setRecentlyDeletedNotes(JSON.parse(saved))
    }
  },[])
  return (
    <div>
      <BinList deletedNotes={recentlyDeletedNotes} />
    </div>
  );
};

export default BinNotes;