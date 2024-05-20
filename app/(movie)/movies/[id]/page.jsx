import { Suspense } from "react";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideo from "../../../../components/movie-video";
import ExtraInfoBar from "../../../../components/extra-info-bar";


export async function generateMetadata({params:{id}}){
  const movie = await getMovie(id)
  return {
    title: movie.title,
  }
}

export default async function MovieDetail({ params: { id } }) {
  return (
    <div>
      <Suspense fallback={<h1></h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1></h1>}>
        <ExtraInfoBar id={id} />
      </Suspense>
      <Suspense fallback={<h1></h1>}>
        <MovieVideo id={id} />
      </Suspense>
    </div>
  );
} 