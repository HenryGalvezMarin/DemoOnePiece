import axios from "axios";
const API_BASE_URL = "https://api.jikan.moe/v4"


export const listaPeliculas = async () => {
  const { data: { data }, } =
    await axios.get(`${API_BASE_URL}/anime?q=one piece&type=Movie`, {
    });
  return data;
}