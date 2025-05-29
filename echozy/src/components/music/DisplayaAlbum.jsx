import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData }   from '../../assets/frontend-assets/assets';
import img from '../../assets/landing-page/logo.png'
import { PlayerContext } from '../../context/PlayerContext';
const DisplayaAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData.find((item) => item.id === Number(id));
 if (!albumData) return <div>Loading...</div>;
  const {playWithId} =  useContext(PlayerContext);
  return (
    <>
      <Navbar/>
   <div className="relative mt-10 ">
  {/* Album Cover with Gradient Fade */}
  <div className="relative w-full h-[300px] md:h-[400px]">
    <img
      src={albumData?.image}
      alt="Album Cover"
      // className="w-full h-full object-cover rounded-2xl"
      className="absolute inset-0 ml-10 w-[90%] h-full object-cover blur-sm scale-110 opacity-60 rounded-2xl "
    />
    {/* Gradient Fade */}
     {/* <div className="absolute rounded-2xl bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-10"></div> */}
  </div> 

  {/* Content Below */}
  <div className="rounded-2xl  text-white px-5 md:px-10 pt-6 pb-10 -mt-12 relative z-20 ">
    <p className="uppercase text-sm text-slate-400">Playlist</p>
    <h2 className="text-4xl md:text-6xl font-bold mb-4">{albumData?.name}</h2>
    <h4 className="text-slate-300 mb-6">{albumData?.desc}</h4>

    {/* Artist Meta Info */}
    <div className="flex items-center gap-3 text-slate-200 text-sm">
      <img className="w-10 h-10 rounded-full object-cover" src={img} alt="Artist" />
      <div>
        <p className="font-semibold text-white">Echozy</p>
        <p className="text-xs">
          <span className="mr-3">💖 1.3B likes</span>
          <span className="mr-3">🎵 <b>50 tracks</b></span>
          <span>🕒 2 hr 20 mins</span>
        </p>
      </div>
    </div>
  </div>
</div>



    <div className='grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]'>
      <p><b className='mr-4'>#</b>Title</p>
      <p>Album</p>
      <p className='hidden sm:block'>Date Added</p>
      <img className='m-auto w-4' src={assets.clock_icon} alt="clock" />
    </div>
    <hr/>
    {
      songsData.map((item, index) =>(
        <div onClick={()=>playWithId(item.id)} key={index} className='grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b]  cursor-pointer'>
            <p className='text-white'>
                <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
                <img className='inline w-10 mr-5' src={item.image} alt="" />
                {item.name}
            </p>
            <p className='text-[15px]'>{albumData.name}</p>
            <p className='text-[15px] hidden sm:block'>5 days ago</p>
             <p className='text-[15px] text-center'>{item.duration}</p>
        </div>
      ))
    }
    </>
  )
}

export default DisplayaAlbum
