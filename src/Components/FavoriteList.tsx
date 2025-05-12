import FavoriteItem from './FavoriteItem';
import { INote } from '../pages/Notes';

interface IFavoriteList {
  favNotes:INote[]
}

const FavoriteList = ({favNotes}:IFavoriteList) => {


  return (
    <div>
      {favNotes.map((note) => 
      <FavoriteItem desc={note.desc}  key={note.id} title={note.title} id={note.id}  />
      )}
    </div>
  );
};

export default FavoriteList;