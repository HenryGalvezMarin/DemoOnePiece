
import { useEffect, useState } from 'react';
import '../Styles/App.css';
import { listaPeliculas } from '../utils/ApisOnePiece';
import ContenedorPeliculas from './ContenedorPeliculas';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  useEffect (() => {
    listaPeliculas().then((res) => {
      setPeliculas(res);     
    });
  }, []);
  console.log(peliculas)
  return (
<div className="bg-gray-800 py-14 mt-5">
            <h1 className="fixed top-0 w-full text-xl bg-orange-400 text-white text-center font-bold py-3 z-50"><b className='text-blue-600'>ONE PIECE</b> MOVIES</h1>
            <ContenedorPeliculas peliculas={peliculas}/>

          </div>
  );
}

export default App;
