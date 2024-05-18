
import { Suspense } from "react"
import MovieInfo from "../../../../../components/movie-info";
import MovieCredits from "../../../../../components/movie-credits"


export default  function CreditPage({params:{id}}){
    return (
        <div>
            <Suspense fallback={<h1>Loading MovieInfo</h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1>Loading Credit Page</h1>}>
                <MovieCredits id={id}/>
            </Suspense>
        </div>

    )
}