import { API_URL } from "../constants";
import Link from "next/link";
export const metadata = {
  title: "Home",
};
async function getMovie() {
  return fetch(API_URL).then((response) => response.json());
}

export default async function Homepage() {
  const movies = await getMovie();
  return (
    <div>
      {movies.map((movie)=>(<li key={movie.id}><Link href={`/movies/${movie.id}`}>{movie.title}</Link></li>))}
    </div>
  );
}
