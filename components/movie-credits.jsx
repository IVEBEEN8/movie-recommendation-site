import { Suspense } from "react";
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
            <img src={credit.profile_path}/>
            <h6>Name : {credit.name}</h6>
            <h6>Role : {credit.character}</h6>
            </div>
            ))}
        </div>
    )
}