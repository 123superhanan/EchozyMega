import React from 'react';
import { assets } from '../../assets/frontend-assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {

  const navigate = useNavigate();
  return (
    <div className='w-[22%] h-full  p-3 flex-col gap-4 text-white hidden lg:flex'>

      {/* Logo or Brand */}
      <div className='mb-4 px-4'>
        <h1  onClick={()=>navigate('/music')} className='cursor-pointer  text-xl font-extrabold tracking-wide'>Echozy</h1>
      </div>

      {/* Navigation */}
      <div className='bg-[#181818] rounded-xl py-4 px-4 space-y-3'>
        <div onClick={()=>navigate('/music')} className='flex items-center gap-3 cursor-pointer hover:bg-[#242424] p-2 rounded transition'>
          <img className='w-6' src={assets.home_icon} alt="Home" />
          <span className='text-sm font-medium'>Dashboard</span>
        </div>
        <div className='flex items-center gap-3 cursor-pointer hover:bg-[#242424] p-2 rounded transition'>
          <img className='w-6' src={assets.search_icon} alt="Search" />
          <span className='text-sm font-medium'>Explore</span>
        </div>
        <div className='flex items-center gap-3 cursor-pointer hover:bg-[#242424] p-2 rounded transition'>
          <img className='w-6' src={assets.stack_icon} alt="Library" />
          <span className='text-sm font-medium'>Collections</span>
        </div>
      </div>

      {/* Actions */}
      <div className='flex-1 bg-[#181818] rounded-xl mt-4 p-4 space-y-6 overflow-auto'>
        <div>
          <h2 className='text-sm uppercase font-semibold text-gray-400 mb-2'>Start Here</h2>
          <button className='w-full bg-[#ffffff] text-black font-semibold py-2 rounded-full text-sm hover:bg-slate-200 transition'>
            ➕ Create Playlist
          </button>
        </div>

        <div>
          <h2 className='text-sm uppercase font-semibold text-gray-400 mb-2'>Podcasts</h2>
          <button className='w-full bg-[#ffffff] text-black font-semibold py-2 rounded-full text-sm hover:bg-slate-200 transition'>
            🎙 Browse Podcasts
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className='text-xs text-gray-500 text-center pt-4'>
        © 2025 Echozy. All rights reserved.
      </div>

    </div>
  );
};

export default Sidebar;

// import React from 'react';
// import { assets } from '../../assets/frontend-assets/assets';

// const Sidebar = () => {
//   return (
//     <div className='w-[22%] h-full p-2 flex-col gap-2 text-white hidden lg:flex bg-black'>
      
//       {/* Top Nav (Home / Search) */}
//       <div className='bg-[#121212] rounded-lg p-4 space-y-4'>
//         <div className='flex items-center gap-4 cursor-pointer hover:text-white text-slate-300 transition'>
//           <img className='w-6' src={assets.home_icon} alt="Home" />
//           <p className='font-semibold'>Home</p>
//         </div>
//         <div className='flex items-center gap-4 cursor-pointer hover:text-white text-slate-300 transition'>
//           <img className='w-6' src={assets.search_icon} alt="Search" />
//           <p className='font-semibold'>Search</p>
//         </div>
//       </div>

//       {/* Library Section */}
//       <div className='bg-[#121212] rounded-lg flex-1 flex flex-col justify-between mt-3 overflow-hidden'>

//         {/* Library Header */}
//         <div className='flex items-center justify-between px-4 pt-4'>
//           <div className='flex items-center gap-3 text-slate-300 hover:text-white cursor-pointer transition'>
//             <img className='w-6' src={assets.stack_icon} alt="Library" />
//             <p className='font-semibold text-sm'>Your Library</p>
//           </div>
//           <div className='flex items-center gap-3'>
//             <img className='w-4 cursor-pointer' src={assets.plus_icon} alt="Add" />
//             <img className='w-4 cursor-pointer' src={assets.arrow_icon} alt="Expand" />
//           </div>
//         </div>

//         {/* Library Items */}
//         <div className='overflow-y-auto scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent h-full px-2 py-4 space-y-6'>
          
//           <div className='bg-[#242424] rounded p-3'>
//             <h2 className='font-semibold text-base mb-1'>Create your first playlist</h2>
//             <p className='text-sm text-gray-400'>It’s easy — we’ll help you</p>
//             <button className='mt-3 px-4 py-1.5 text-sm bg-white text-black rounded-full font-bold hover:scale-105 transition'>
//               Create playlist
//             </button>
//           </div>

//           <div className='bg-[#242424] rounded p-3'>
//             <h2 className='font-semibold text-base mb-1'>Let’s find some podcasts</h2>
//             <p className='text-sm text-gray-400'>We’ll keep you updated</p>
//             <button className='mt-3 px-4 py-1.5 text-sm bg-white text-black rounded-full font-bold hover:scale-105 transition'>
//               Browse podcasts
//             </button>
//           </div>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;
