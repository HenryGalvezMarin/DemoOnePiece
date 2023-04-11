
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
  //Enlista las peliculas al iniciar
  useEffect (() => {
    listaPeliculas().then((res) => {
      setPeliculas(res);     
    });
  }, []);
  //Mueve el scroll al inicio al relaizar un evento
  useEffect (() => {
    document.getElementById('content').scrollIntoView(true)
  }, [verDetalle,verPersonajes,verDetallePersonaje]);
  //Manejadores de eventos
  const handleVerDetalle = (ver) => {
    setVerDetallePersonaje({});
    setVerDetalle(ver);
    setVerPersonajes([]);
  }
  const handleVerPersonajes = (ver) => {
    setVerDetallePersonaje({});
    setVerDetalle({});
    listaPersonajesPeliculas(ver).then((res) => {
      setVerPersonajes(res);
    });
  }
  const handleVerDetallePersonaje = (ver) => {
    setVerDetalle({});
    setVerPersonajes([]);
    listaDetallesPersonaje(ver).then((res) => {
      setVerDetallePersonaje(res);
    });
  }
  console.log(verDetallePersonaje)

  return (
<div id="content" className="bg-gray-800 py-14 mt-5">
            <h1 className="fixed top-0 w-full text-xl bg-orange-400 text-white text-center font-bold py-3 z-50"><b className='text-blue-600'>ONE PIECE</b> MOVIES</h1>
            {Object.keys(verDetalle).length!==0?<DetallePelicula verDetalle ={verDetalle} handleVerPersonajes={handleVerPersonajes}/>:null}
            {verPersonajes.length!==0?<PersonajesPelicula verPersonajes ={verPersonajes}  handleVerDetallePersonaje={handleVerDetallePersonaje}/>:null}
            {Object.keys(verDetallePersonaje).length!==0?<DetallePersonaje verDetallePersonaje={verDetallePersonaje} />:null}
            <ContenedorPeliculas peliculas={peliculas} handleVerDetalle={handleVerDetalle}/>
          </div>
  );
}
export default App;
