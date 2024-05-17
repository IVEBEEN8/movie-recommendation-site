import { API_URL } from "../app/constants";

async function getMovie(id) {
  console.log(`fetcing movies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}) {
  const movie = await getMovie(id);
  return (<div>
    <h6>{`release date : ${movie.release_date}`}</h6>
    <img src={movie.poster_path}/>
    <div>
      <h1>{movie.title}</h1>
      <h3>Vote Average: {movie.vote_average} || Voter: {movie.vote_count}</h3>
      <p>{movie.overview}</p>
    </div>
    
  

 {/* release_date || runtime || vote_average || vote_count || id || imdb_id || homepage || overview || posster_path */}
  </div>);
}