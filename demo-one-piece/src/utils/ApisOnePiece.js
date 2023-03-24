import axios from "axios";
const API_BASE_URL = "https://api.jikan.moe/v4"


export const listaPeliculas = async () => {
  const { data: { data }, } =
    await axios.get(`${API_BASE_URL}/anime?q=one piece&type=Movie`, {
    });
  return data;
}
export const listaPersonajesPeliculas = async (id) => {
    const { data: { data }, } =
      await axios.get(`${API_BASE_URL}/anime/${id}/characters`, {
      });
    return data;
  }
  export const listaDetallesPersonaje = async (id) => {
    const { data: { data }, } =
      await axios.get(`${API_BASE_URL}/characters/${id}/full`, {
      });
    return data;
  }