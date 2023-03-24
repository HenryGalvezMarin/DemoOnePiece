
import { useEffect, useState } from 'react';
import '../Styles/App.css';
import { listaPeliculas } from '../utils/ApisOnePiece';
import ContenedorPeliculas from './ContenedorPeliculas';
import DetallePelicula from './DetallePelicula';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  const [verDetalle, setVerDetalle] = useState({});
  useEffect (() => {
    listaPeliculas().then((res) => {
      setPeliculas(res);     
    });
  }, []);
  useEffect (() => {
    document.getElementById('content').scrollIntoView(true)
  }, [verDetalle]);
  const handleVerDetalle = (ver) => {
    setVerDetalle(ver);
  }
  console.log(verDetalle)
  console.log(peliculas)
  return (
<div id="content" className="bg-gray-800 py-14 mt-5">
            <h1 className="fixed top-0 w-full text-xl bg-orange-400 text-white text-center font-bold py-3 z-50"><b className='text-blue-600'>ONE PIECE</b> MOVIES</h1>
            {Object.keys(verDetalle).length!==0?<DetallePelicula verDetalle ={verDetalle}/>:null}
            <ContenedorPeliculas peliculas={peliculas} handleVerDetalle={handleVerDetalle}/>
          </div>
  );
}

export default App;
