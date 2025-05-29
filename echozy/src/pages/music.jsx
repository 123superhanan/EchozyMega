import React, { useContext } from 'react'
import Sidebar from '../components/music/sidebar';
import Player from '../components/music/player';
import Display from '../components/music/Display';
import { PlayerContext } from '../context/PlayerContext';

const Music = () => {

  const {audioRef,track} = useContext(PlayerContext);
  

  return (
  <>
    <div className='h-screen bg-background'>
      <div className='h-[90%] flex'>
        <Sidebar/>
        <Display/>
      </div>
      <Player/>
      <audio ref={audioRef} src={track.file} preload='auto'></audio>
    </div>
  </>
  )
}

export default Music
