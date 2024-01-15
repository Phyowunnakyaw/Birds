import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {
    
  return (
         
         <div className=' flex justify-between items-center border-b border-black max-w-6xl mx-auto p-4 '>

              {/* logo */}
              <div className=" w-8">

                  <h2 className=' text-2xl'> <i class="fa-brands fa-earlybirds w-full"></i> </h2>

              </div>

              {/* menu */}
              <div className=' flex gap-4'>

                  <p className=' font-semibold text-base text-gray-500 list-none'> <NavLink to ='/'> Home </NavLink> </p>
                  <p className=' font-semibold text-base text-gray-500 list-none'> <NavLink to ='/Birds'> Birds </NavLink> </p>

              </div>

              {/* let'_fly */}
              <div className="">

                  <button className=' bg-black text-white text-base font-bold p-1 px-4 rounded'> Let' Fly </button>

              </div>

         </div>
  )
}
