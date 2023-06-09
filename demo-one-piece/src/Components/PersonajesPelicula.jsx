
export default function PersonajesPelicula({verPersonajes,handleVerDetallePersonaje}) {
  return (    
    <div className="max-w-screen-lg m-auto mb-5 flex flex-wrap justify-center gap-5  bg-gray-600 p-4 max-h-72 overflow-auto">
    {verPersonajes.length===0?"Esta vacio":verPersonajes.map((personaje)=>
   ( <div key={personaje.character.mal_id} className='text-white h-auto bg-gray-700 rounded-lg  flex'> 
   <img className='rounded-l-lg w-40' src={personaje.character.images.webp.image_url} alt={personaje.character.name}/>
   <div className='flex justify-items-stretch w-60 flex-col justify-center content-center p-10'>            
   <h2 className='font-bold text-lg'>{personaje.character.name}</h2>
   <ul>
       <li>Rol: {personaje.role}</li>
   </ul>
   <button onClick={()=>handleVerDetallePersonaje(personaje.character.mal_id)} className='mt-5 w-30 justify-self-end rounded-lg bg-orange-400 px-2 py-1 text-white font-semibold'>Ver Detalles</button>
   </div> 
   </div>)
    )}
    </div>
  )
}
