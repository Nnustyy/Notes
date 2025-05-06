import React from 'react';
import Notes from './pages/Notes';
import {  Route, Routes } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import FavoritesNotes from './pages/FavoritesNotes';
import BinNotes from './pages/BinNotes';
import NotFoundPage from './pages/NotFoundPage';
import { NoteContext } from './Components/context/NoteContext';
import { useState ,useEffect} from 'react';
import { INote } from './pages/Notes';

const App = () => {
    const [notes, setNotes] = useState<INote[]>([])
    const [recentlyDeletedNotes, setRecentlyDeletedNotes] = useState<INote[]>([])
    
    useEffect(() => {
  localStorage.setItem('deletedNotes',JSON.stringify(recentlyDeletedNotes))
},[recentlyDeletedNotes])

  return (

<>
<div>
  
  <NoteContext.Provider value={{notes,setNotes,recentlyDeletedNotes,setRecentlyDeletedNotes}}>
      <Navbar/>
      <Routes>
    <Route path='/' element={<Notes/>} />
    <Route path='fav' element={<FavoritesNotes/>} />
    <Route path='bin' element={<BinNotes/>} />
    <Route path='*' element={<NotFoundPage/>}></Route>
    
      </Routes>
  </NoteContext.Provider>
  
</div>

</>


  );
};

export default App;