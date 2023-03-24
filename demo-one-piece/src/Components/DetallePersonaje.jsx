
export default function DetallePersonaje( {verDetallePersonaje,}) {
    console.log(verDetallePersonaje)
  return (
    <div className='text-white h-auto bg-gray-700 mb-5 mx-5 rounded-lg  flex'>        
    <img className='rounded-l-lg' src={verDetallePersonaje.images.webp.image_url} alt={verDetallePersonaje.title}/>
    <div className='flex justify-items-stretch flex-col justify-center content-center p-10'>            
       <h2 className='font-bold text-lg'>{verDetallePersonaje.name}</h2>
        <ul>
            <li>Name Kanji: {verDetallePersonaje.name_kanji}</li>
            <li className="max-h-52 overflow-auto">About: {verDetallePersonaje.about===null?"No available":verDetallePersonaje.about}</li>
        </ul>
    </div>        
</div> 
  )
}
