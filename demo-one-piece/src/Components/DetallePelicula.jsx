import React from 'react'

export default function DetallePelicula({verDetalle,handleVerPersonajes}) {
  return (
    <div className='text-white h-auto p-2 bg-gray-700 mb-5 mx-5 rounded-lg justify-center flex flex-wrap'>        
        <img className='rounded-l-lg' src={verDetalle.images.webp.image_url} alt={verDetalle.title}/>
        <div className='flex justify-items-stretch flex-col justify-center content-center p-10'>            
           <h2 className='font-bold text-lg'>{verDetalle.title}</h2>
            <ul>
                <li>Duration: {verDetalle.duration}</li>
                <li>Rating: {verDetalle.rating}</li>
                <li className="max-h-52 overflow-auto">Sinopsys: {verDetalle.synopsis===null?"No available":verDetalle.synopsis}</li>
            </ul>
            <button onClick={()=>handleVerPersonajes(verDetalle.mal_id)} className='mt-5 w-40 justify-self-end rounded-lg bg-orange-400 px-2 py-1 text-white font-semibold'>Ver Personajes</button>
        </div>        
    </div>    
  )
}
