
import { Suspense } from "react"
import MovieInfo from "../../../../../components/movie-info";
import MovieCredits from "../../../../../components/movie-credits"
import ExtraInfoBar2 from "../../../../../components/extra-info-bar2";


export default  function CreditPage({params:{id}}){
    return (
        <div>
            <Suspense fallback={<h1></h1>}>
                <MovieInfo id={id} />
            </Suspense>
            <Suspense fallback={<h1></h1>}>
                <ExtraInfoBar2 id={id} />
            </Suspense>
            <Suspense fallback={<h1></h1>}>
                <MovieCredits id={id}/>
            </Suspense>
        </div>

    )
}