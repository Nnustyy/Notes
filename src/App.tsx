import React from 'react';
import Notes from './pages/Notes';
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import Navbar from './Components/UI/navbar/Navbar';
import FavoritesNotes from './pages/FavoritesNotes';
import BinNotes from './pages/BinNotes';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (

<>
<div>
  <Navbar/>
  <Routes>
<Route path='/' element={<Notes/>} />
<Route path='fav' element={<FavoritesNotes/>} />
<Route path='bin' element={<BinNotes/>} />
<Route path='*' element={<NotFoundPage/>}></Route>

  </Routes>
</div>

</>


  );
};

export default App;