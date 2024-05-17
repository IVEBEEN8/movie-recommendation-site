
import { Suspense } from "react"
import MovieCredits, {getCredits} from "../../../../../components/movie-credits"

export default function CreditPage({params:{id}}){
    return (
        <div>
            <Suspense fallback={<h1>Loading Credit Page</h1>}>
                <MovieCredits id={id}/>
            </Suspense>
        </div>

    )
}