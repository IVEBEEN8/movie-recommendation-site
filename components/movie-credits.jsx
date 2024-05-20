
import { API_URL } from "../app/constants";
import styles from "../ styles/similar.module.css";


export async function getCredits(id){
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({id}){
  
    const credits = await getCredits(id);
    return(
        <div className={styles.container}>
            {credits.map((credit)=>(
            <div className={styles.movie}>
             {credit.profile_path===null? <img src="https://i.pinimg.com/236x/73/40/f3/7340f34d99606e6d8257143d7efadeb5.jpg"/>: <img src={credit.profile_path}/>}
            <p>Name : {credit.name}</p>
             {credit.character ===""? null: <p>Role : {credit.character}</p>}
            </div>
            ))}
        </div>
    )
}