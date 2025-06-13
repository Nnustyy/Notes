
import Notes from './pages/Notes';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import FavoritesNotes from './pages/FavoritesNotes';
import BinNotes from './pages/BinNotes';
import NotFoundPage from './pages/NotFoundPage';
import { NoteContext } from './Components/context/NoteContext';
import { useState ,useEffect} from 'react';
import { INote } from './pages/Notes';
import Menu from './Components/UI/menu/Menu';

const App = () => {

    const [activeMenu,setActiveMenu] = useState(false)

    const items = [{value:'Favorites ❤️',href:'/fav',id:1}, {value:'All notes 🗒️', href:'/',id:2}, {value:'Bin 🗑️', href:'/bin',id:3}]

    const [notes, setNotes] = useState<INote[]>(() => {
      const savedNotes = localStorage.getItem('notes');
      return savedNotes ? JSON.parse(savedNotes) : [];
    });
  
    const [recentlyDeletedNotes, setRecentlyDeletedNotes] = useState<INote[]>(() => {
      const savedDeletedNotes = localStorage.getItem('deletedNotes');
      return savedDeletedNotes ? JSON.parse(savedDeletedNotes) : [];
    });
    
    const [likedNotes, setLikedNotes] = useState<INote[]>(() => {
      const saveLikedNotes = localStorage.getItem('likedNotes');
      return saveLikedNotes ? JSON.parse(saveLikedNotes) : [];
    })


    const toggleLike = (note: INote) => {
      setLikedNotes(prev => {
        const isLiked = prev.some(n => n.id === note.id);
        const updatedLikedNotes = isLiked
          ? prev.filter(n => n.id !== note.id)
          : [...prev, note]; 
        
        localStorage.setItem('likedNotes', JSON.stringify(updatedLikedNotes));
        return updatedLikedNotes;
      });
    };


    useEffect(() => {
      localStorage.setItem('likedNotes', JSON.stringify(likedNotes))
    },[likedNotes])

    useEffect(() => {
      localStorage.setItem('notes',JSON.stringify(notes))
    },[notes])

    useEffect(() => {
  localStorage.setItem('deletedNotes',JSON.stringify(recentlyDeletedNotes))
},[recentlyDeletedNotes])

  return (

<>
<div>
  
  <NoteContext.Provider value={{notes,setNotes,recentlyDeletedNotes,setRecentlyDeletedNotes,likedNotes,setLikedNotes,toggleLike,activeMenu,setActiveMenu}}>
      <Navbar/>
      <div className='contentWrapper'>
        <Routes>
      <Route path='/' element={<Notes/>} />
      <Route path='fav' element={<FavoritesNotes/>} />
      <Route path='bin' element={<BinNotes/>} />
      <Route path='*' element={<NotFoundPage/>}></Route>
      
        </Routes>
      </div>
      <Menu active={activeMenu} setActive={setActiveMenu}   items={items} header={'Menu'}/>
  </NoteContext.Provider>
  
</div>

</>


  );
};

export default App;