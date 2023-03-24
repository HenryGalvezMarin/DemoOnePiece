
import { useEffect, useState } from 'react';
import './App.css';
import { listaPeliculas } from './utils/ApisOnePiece';

function App() {
  const [peliculas, setPeliculas] = useState([]);
  useEffect (() => {
    listaPeliculas().then((res) => {
      setPeliculas(res);     
    });
  }, []);
  console.log(peliculas)
  return (
    <div className='bg-gray-800 text-white text-center'>
        Hola mundo
    </div>
  );
}

export default App;
