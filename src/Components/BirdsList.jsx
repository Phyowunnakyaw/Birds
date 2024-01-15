import React from 'react'
import useFetch from '../hooks/UseFetch'
import { Link } from 'react-router-dom'

export default function BirdsList() {

    let { data : birds, loading, error } = useFetch( 'http://localhost:3000/birds' )

  return (
         
         <div className=' max-w-6xl mx-auto'>

             { error && <p className=' text-center mt-20 text-6xl font-bold text-black '> { error } </p> }
             
             { loading && <p className=' text-center mt-20 text-6xl font-bold text-black '> Loading..... </p> }

             { !!birds && 
             <div className=' grid grid-cols-3 place-items-center py-6 gap-y-12'>

                {  birds.map( bird => (
                    
                    <Link to= { `/Birds/${bird.id}` } key= { bird.id }>

                         <div className=' bg-gray-100 p-6 shadow-lg space-y-3 rounded-2xl'> 

                             <div className=' w-72 '> 
                                 <img src= { bird.ImagePath }  alt="image" className=' w-full h-52 rounded-2xl' />
                             </div>

                             <h2 className=' text-base font-semibold'> { bird.BirdMyanmarName } </h2>
                             <h2 className=' text-base font-semibold'> { bird.BirdEnglishName } </h2>

                        </div>

                    </Link>

                ) ) }

             </div>


             }

         </div>
  )
}
