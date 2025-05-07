import React, { useContext} from 'react';
import { NoteContext } from '../Components/context/NoteContext';
import BinList from '../Components/BinList';

const BinNotes = () => {
  const {recentlyDeletedNotes} = useContext(NoteContext)


  return (
    <div>
      <BinList deletedNotes={recentlyDeletedNotes} />
    </div>
  );
};

export default BinNotes;