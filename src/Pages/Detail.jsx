import React, { useEffect } from 'react'
import useFetch from '../hooks/UseFetch'
import { useNavigate, useParams } from 'react-router-dom'
import Birds from './Birds';

export default function Detail() {

    let { id } = useParams();
    let { data : birds, loading, error } = useFetch( `http://localhost:3000/birds/${id}` )
    let navigate = useNavigate();

    useEffect( () => {
        if( error ) {
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    } )

  return (

         <div className=' flex items-center py-2 max-w-6xl mx-auto '> 

             { birds && 
             <div key= { birds.id } className=' p-4 space-y-3'>

                  <div className=' flex justify-center '>
                       <img src= { birds.ImagePath } alt="image" className=' w-[600px] h-[400px] rounded-lg' />
                  </div>
                  <h1 className=' text-base font-bold'> { birds.BirdMyanmarName } </h1>
                  <h2 className=' text-base font-bold'> { birds.BirdEnglishName } </h2>
                  <p className=' text-bse font-bold leading-7'> { birds.Description } </p>

             </div> }

     

         </div>
  )
}
