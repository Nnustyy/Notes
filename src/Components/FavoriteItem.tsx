import { INote } from './context/NoteContext';

const FavoriteItem = (favNote:INote) => {
  return (
    <div className='fav'>
      <div className="fav-content">
        <div className="fav-title">{favNote.title}</div>
        <div className="fav-desc">{favNote.desc}</div>
      </div>
    </div>
  );
};

export default FavoriteItem;