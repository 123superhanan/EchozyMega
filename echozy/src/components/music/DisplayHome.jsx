import React, {useState,useEffect} from 'react'
import Navbar from './Navbar'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'
import { albumsData, songsData, taylorsData } from '../../assets/frontend-assets/assets'
import ing from '../../assets/landing-page/19891.png'
import { motion, AnimatePresence } from 'framer-motion';
const DisplayHome = () => {

  //small animations for hero image
  const [index, setIndex] = useState(0);
  const texts = [
    'Welcome to Echozy ',
    'Dont Blame Me ',
    ' Love Made Me Carzy',
    'Look What You Made Me do!',
    'I dont dress for men',
    'I dont dress for women',
    'lately i am dressing for revenge',
    'When you are young they assume ',
    'You Know Nothing',
  ];
useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [index]);


  return (
    <div className=' min-h-screen text-white px-4 pb-10'>
      <Navbar />

      {/* Hero / Banner */}
     <div
  className='w-full mt-10 h-[35vh] relative rounded-xl overflow-hidden mb-10'
>
  {/* Background Image */}
  <img
    src={ing} // replace with actual image path
    alt="Welcome Banner"
    className='w-full h-full object-cover absolute top-0 left-0 z-0'
  />
  {/* Gradient Overlay */}
  <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[#292929]/90 to-[#121212]/90 z-10'></div>
  {/* Content */}
  <div className='relative z-20 w-full h-full flex items-center justify-center text-center px-4'>
     <AnimatePresence mode="wait">
      <motion.h1
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-wide text-white text-center"
      >
        {texts[index]}
      </motion.h1>
    </AnimatePresence>
  </div>
</div>


      {/* 🔥 Trending Albums */}
      <div className='mb-10'>
        <h2 className='text-2xl font-bold mb-4'>🔥 Trending Albums</h2>
        <div className='flex gap-4 overflow-x-auto'>
          {albumsData.map((item, index) => (
            <AlbumItem key={index} {...item} />
          ))}
        </div>
      </div>

     {/* 🎧 Your Daily Picks */}
<div className='mb-16 bg-[#1b1b1b] px-8 py-10 w-full rounded-2xl shadow-lg'>
  <h2 className='text-3xl font-bold mb-6 tracking-wide'>🎧 Your Daily Picks</h2>
  <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10'>
     {songsData && songsData.length > 0 ? (
  songsData.map((item, index) => (
    <SongItem
      key={index}
      name={item.name}
      desc={item.desc}
      id={item.id}
      image={item.image}
    />
  ))
) : (
  <p className="text-gray-400">No songs found today 😞</p>
)}

  </div>
</div>


      {/* 👑 Taylor’s Era */}
      <div className='mb-10 bg-gradient-to-br from-[#242424] to-[#101010] p-6 rounded-xl'>
        <h2 className='text-2xl font-bold mb-4'>👑 Taylor’s Hits</h2>
        <div className='flex gap-4 overflow-x-auto'>
          {taylorsData.map((item, index) => (
            <SongItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* 🆕 Discover More */}
      <div className='mt-14 text-center opacity-80 text-sm'>
        <p>🆕 More playlists, artists, and genres coming soon to your app. Make it yours.</p>
      </div>
    </div>
  )
}

export default DisplayHome

// import React from 'react'
// import Navbar from './Navbar'
// import AlbumItem from './AlbumItem'
// import { albumsData, songsData } from '../../assets/frontend-assets/assets'
// import SongItem from './SongItem'
// import { taylorsData } from '../../assets/frontend-assets/assets'
// import Hero from '../landing/hero'
// import TaylorAlbumsSpotlight from '../landing/TaylorAlbumsSpotlight'

// const DisplayHome = () => {
//   return (
//     <div>
//       <Navbar/>
//       {/* <div className='h-[40vh]'>
//         <TaylorAlbumsSpotlight />
//       </div>
//        */}
//       <div className='mb-4 '>
//         <h1 className='my-5 font-bold text-2xl '>Featured Charts</h1>
//         <div className='flex  overflow-auto'>
//             {albumsData.map((item,index) => (<AlbumItem   key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
//         </div>
//         <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Todays Biggest Hits</h1>
//         <div className='flex overflow-auto '>
//           {songsData.map((item,index) => (<SongItem  key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
//         </div>
//       </div>
//       <div className='mb-4'>
//         <h1 className='my-5 font-bold text-2xl'>Taylors Biggest Hits</h1>
//         <div className='flex overflow-auto '>
//           {taylorsData.map((item,index) => (<SongItem  key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />))}
//         </div>
//       </div>
//       </div>
//     </div>
//   )
// }

// export default DisplayHome
