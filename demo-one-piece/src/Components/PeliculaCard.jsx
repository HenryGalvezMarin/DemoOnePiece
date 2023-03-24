import '../Styles/PeliculaCard.css';

export default function PeliculaCard({pelicula}) {
  return (
    <li className='pelicula-card rounded-lg flex justify-center content-center  w-70'>
      <h2 className='title-card z-40 w-full px-10 text-center pt-10 text-white text-xl font-semibold'>{pelicula.title}</h2>
      <img className='pelicula-card-img rounded-lg' src={pelicula.images.webp.image_url} alt={pelicula.title}/>
      <button className='button-card rounded-lg bg-orange-400 px-2 py-1 text-white font-semibold'>Detalles</button>
    </li>
  )
}
