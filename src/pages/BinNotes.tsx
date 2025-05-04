import React, { useContext, useEffect } from 'react';
import { NoteContext } from '../Components/context/NoteContext';
import BinList from '../Components/BinList';

const BinNotes = () => {
  const {recentlyDeletedNotes} = useContext(NoteContext)

  useEffect(()=> {
    console.log(recentlyDeletedNotes)
  },[recentlyDeletedNotes])
  return (
    <div>
      <BinList deletedNotes={recentlyDeletedNotes} />
    </div>
  );
};

export default BinNotes;