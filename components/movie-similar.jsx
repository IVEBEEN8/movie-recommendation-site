import { API_URL } from "../app/constants";
import styles from "../ styles/similar.module.css";

export async function getSimilar(id){
    const response = await fetch(`${API_URL}/${id}/similar`);
    return response.json();
}

export default async function MovieSimilar({id}){
    const similars = await getSimilar(id);
    return(
        <div className={styles.container}>
          
           {similars.map((similar)=>(<div className={styles.movie}><img src ={similar.backdrop_path}/><h1>{similar.original_title}</h1><p>{similar.overview}</p> </div>))}
           
        </div>
    )
}