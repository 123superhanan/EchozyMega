import React from 'react'
import { assets } from '../../assets/frontend-assets/assets'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate();
  return (
    <>
    <div className=' w-full flex items-center justify-between font-semibold '>
        <div className='flex items-center gap-2'>
            <img onClick={() =>navigate(-1) } className='w-8 bg-black p-2 cursor-pointer rounded-2xl ' src={assets.arrow_left} alt="" />
            <img onClick={() =>navigate(+1) }  className='w-8 bg-black p-2 cursor-pointer rounded-2xl  ' src={assets.arrow_right} alt="" />
        </div>
        <div className='flex items-center gap-4'> 
            <p className='bg-white  text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-wait '>Explore Premium</p>
             <p className='bg-black font-main  text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer'>Install App</p>
             <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
        </div>
        
    </div>
    <div className='flex items-center gap-2 mt-2'>
             <p className='bg-white  text-black text-[15px] px-4 py-1 rounded-2xl  cursor-pointer'>All</p>
             <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
             <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar
