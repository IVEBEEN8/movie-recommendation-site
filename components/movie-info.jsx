import { API_URL } from "../app/constants";
import styles from "../ styles/movie-info.module.css";
async function getMovie(id) {
  console.log(`fetcing movies: ${Date.now()}`);
  //await new Promise((resolve) => setTimeout(resolve, 5000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({id}) {
  const movie = await getMovie(id);
  return (<div className={styles.container}>
    
    <img  className = {styles.poster} src={movie.poster_path} alt={movie.title}/>
    <div>
      <h1 className={styles.title}>{movie.title}</h1>
      <hr/>
      <h6>Release date : {movie.release_date}</h6>
      <br/>
      <h3>⭐️{movie.vote_average.toFixed(1)} || Voter: {movie.vote_count}</h3>
      <p className={styles.info}>{movie.overview}</p>
      <br/>
      <a href={movie.homepage} target={"_black"}>Homepage &rarr;</a>
    </div>
    
  

 {/* release_date || runtime || vote_average || vote_count || id || imdb_id || homepage || overview || posster_path */}
  </div>);
}