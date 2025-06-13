import { INote } from '../pages/Notes';
import BinItem from './BinItem';

interface IBinListProps {
  deletedNotes:INote[]
}

const BinList = ({deletedNotes}:IBinListProps) => {
  return (
    <div>
      {deletedNotes.map((note) => 
        <BinItem key={note.id} desc={note.desc} title={note.title} id={note.id} />
)}
    </div>
  );
};

export default BinList;