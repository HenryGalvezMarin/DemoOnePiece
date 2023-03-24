import React from "react";
import PeliculaCard from "./PeliculaCard";

export default function ContenedorPeliculas({peliculas,handleVerDetalle}) {
  console.log(peliculas)
  return <ul className="flex flex-wrap justify-center gap-8 max-w-screen-lg m-auto">
    {peliculas.map((pelicula) => (
      <PeliculaCard key={pelicula.mal_id} pelicula={pelicula} handleVerDetalle={handleVerDetalle}/>      
    ))}
  </ul>;
}
