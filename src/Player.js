import React from 'react';
import './Player.css';
import Sidebar from './sideBar/Sidebar';
import Body from './body/Body';
import Footer from './footer/Footer';

function Player({ spotify }) {
  return (
    <div className='player'>
      <div className='player__body'>
        {/* sideBar */}
        <Sidebar />
        {/* body */}
        <Body spotify={spotify} />
      </div>
      {/* footer */}
      <Footer />
    </div>
  );
}

export default Player;
