import { API_URL } from "../app/constants";

export async function getCredits(id){
    const response = await fetch(`${API_URL}/${id}/credits`);
    return response.json();
}

export default async function MovieCredits(){
    const credits = await getCredits(id);
    console.log(credits);

    return(
        <div>
            <img  src={credits.profile_path}/>
        </div>
    )
}