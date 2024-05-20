import { API_URL } from "../app/constants";


export async function getSimilar(id){
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({id}){
    
    const similars = await getSimilar(id);
    console.log(similars)
    return(
        <div>
           {similars.map((similar)=>(<div>{similar.id} {similar.original_title}{similar.overview} <img src ={similar.backdrop_path}/></div>))}
        </div>
    )
}