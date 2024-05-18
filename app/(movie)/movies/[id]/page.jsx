import { Suspense } from "react";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";


export async function generateMetadata({params:{id}}){
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params: { id } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading MovieInfo</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading MovieVideo</h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
} 