
import { API_URL } from "../app/constants";


export async function getCredits(id){
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits({id}){
  
    const credits = await getCredits(id);
    return(
        <div>
            {credits.map((credit)=>(
            <div>
             {credit.profile_path===null? <img src="https://i.pinimg.com/236x/73/40/f3/7340f34d99606e6d8257143d7efadeb5.jpg"/>: <img src={credit.profile_path}/>}
            <h6>Name : {credit.name}</h6>
             {credit.character ===""? null: <h6>Role : {credit.character}</h6>}
            </div>
            ))}
        </div>
    )
}