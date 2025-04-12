import React, { FC, use, useState } from 'react';
import './styles/index.scss'
const App:FC = () => {


  return (
    <div  className='App'>
      <div className="note">
        <div className="note-content">
          <div className='note-title' >1 Title</div>
          <div className='note-desc'>
            descripton
          </div>
        </div>
        <div className="note-btns">
          <button className='note-delete-btn' >Delete</button>
        </div>
      </div>
    </div>
  );
};

export default App;