import { API_URL } from "../constants";



async function getMovie(id) {
  console.log(`fetcing movies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}) {
  const movies = await getMovie(id);
  return <h6>{JSON.stringify(movies)}</h6>;
}