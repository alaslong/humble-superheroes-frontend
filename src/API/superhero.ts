import axios from "axios";
import { Superhero } from "../types/Superhero";

const API_URL = "http://localhost:3000/superheroes";

export const fetchSuperheroes = async () => {
  const response = await axios.get<Superhero[]>(
    API_URL
  );
  return response.data;
};

export const addSuperhero = async (superheroData: Superhero) => {
  const response = await axios.post<Superhero>(
    API_URL,
    superheroData
  );
  return response.data;
};

