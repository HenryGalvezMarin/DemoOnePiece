
import { useEffect, useState } from 'react';
import '../Styles/App.css';
import { listaPeliculas, listaPersonajesPeliculas,listaDetallesPersonaje } from '../utils/ApisOnePiece';
import ContenedorPeliculas from './ContenedorPeliculas';
import DetallePelicula from './DetallePelicula';
import DetallePersonaje from './DetallePersonaje';
import PersonajesPelicula from './PersonajesPelicula';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [verDetalle, setVerDetalle] = useState({});
  const [verPersonajes, setVerPersonajes] = useState([]);
  const [verDetallePersonaje, setVerDetallePersonaje] = useState({});
  useEffect (() => {
    listaPeliculas().then((res) => {
      setPeliculas(res);     
    });
  }, []);
  useEffect (() => {
    document.getElementById('content').scrollIntoView(true)
  }, [verDetalle,verPersonajes]);
  const handleVerDetalle = (ver) => {
    setVerDetalle(ver);
    setVerPersonajes([]);
  }
  const handleVerPersonajes = (ver) => {
    setVerDetalle({});
    listaPersonajesPeliculas(ver).then((res) => {
      setVerPersonajes(res);
    });
  }
  const handleVerDetallePersonaje = (ver) => {
    setVerDetalle({});
    setVerPersonajes([]);
    console.log(ver)
    // listaDetallesPersonaje(ver).then((res) => {
    //   setVerDetallePersonaje(res);
    // });
  }
console.log(verPersonajes)
  return (
<div id="content" className="bg-gray-800 py-14 mt-5">
            <h1 className="fixed top-0 w-full text-xl bg-orange-400 text-white text-center font-bold py-3 z-50"><b className='text-blue-600'>ONE PIECE</b> MOVIES</h1>
            {Object.keys(verDetalle).length!==0?<DetallePelicula verDetalle ={verDetalle} handleVerPersonajes={handleVerPersonajes}/>:null}
            {verPersonajes.length!==0?<PersonajesPelicula verPersonajes ={verPersonajes}  handleVerDetallePersonaje={handleVerDetallePersonaje}/>:null}
            <ContenedorPeliculas peliculas={peliculas} handleVerDetalle={handleVerDetalle}/>
            <DetallePersonaje  />
          </div>
  );
}

export default App;
