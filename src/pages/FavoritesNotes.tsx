import { useContext } from "react";
import { NoteContext } from "../Components/context/NoteContext";
import FavoriteList from "../Components/FavoriteList";


const FavoritesNotes = () => {

  const {likedNotes} = useContext(NoteContext)



  return (
    <div>
      {likedNotes.length === 0 
      ? <h1 style={{textAlign:'center'}} >There are no liked notes</h1>
      : <FavoriteList favNotes={likedNotes} />
    }
      
    </div>
  );
};

export default FavoritesNotes;