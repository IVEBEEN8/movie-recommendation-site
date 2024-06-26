
import Movie from "../../components/movie";
import { API_URL } from "../constants";
import styles from "../../ styles/home.module.css";
export const metadata = {
  title: "Home",
};
async function getMovie() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Homepage() {
  const movies = await getMovie();
  return (
    <div className={styles.container}>
      {movies.map((movie)=>
      (
       <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path} title={movie.title}/>
          ))}
    </div>
  );
}
