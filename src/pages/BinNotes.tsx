import { useContext} from 'react';
import { NoteContext } from '../Components/context/NoteContext';
import BinList from '../Components/BinList';

const BinNotes = () => {
  const {recentlyDeletedNotes} = useContext(NoteContext)


  return (
    <div>
      {recentlyDeletedNotes.length === 0 
      ? <h1 style={{textAlign:"center"}} >There are no deleted notes</h1>
      : <BinList deletedNotes={recentlyDeletedNotes} />}
      
    </div>
  );
};

export default BinNotes;