"use client"

import { usePathname } from "next/navigation";
import { API_URL } from "../app/constants";
export async function getMovie(id) {

    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }

  export default async function ExtraInfoBar({id}) {
    const pathname = usePathname();
    const movie = await getMovie(id);
    return (<div>
      <p>Current URL Path: {pathname}</p>
      {pathname === `/movies/${movie.id}/credits` ? null:<a href={`${id}/credits`}>Credit &rarr;</a>}
   {/* release_date || runtime || vote_average || vote_count || id || imdb_id || homepage || overview || posster_path */}
    </div>);
  }





