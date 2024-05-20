"use client"

import { usePathname } from "next/navigation";
import { API_URL } from "../app/constants";
import Link from "next/link";
export async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }

  export default async function ExtraInfoBar({id}) {
    const pathnames = usePathname();
    const movie = await getMovie(id);


    return (
    <div>
      <p>Current URL Path: {pathnames}</p>
      {pathnames ===`/movies/${movie.id}/similar` ? null:<Link href={`${id}/similar`}>Similar &rarr;</Link>}
      {pathnames === `/movies/${movie.id}/credits` ? null:<Link href={`${id}/credits`}>Credit &rarr;</Link>}
    </div>);
  }





