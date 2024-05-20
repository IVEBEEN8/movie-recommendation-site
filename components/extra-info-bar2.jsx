"use client"

import { usePathname } from "next/navigation";
import { API_URL } from "../app/constants";
import Link from "next/link";
import styles from "../ styles/extras-info-bar.module.css";

export async function getMovie(id) {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
  }

  export default async function ExtraInfoBar2({id}) {
    const pathnames = usePathname();
    const movie = await getMovie(id);
    return (
    <div className={styles.div}>
        <ul>
    <li>

      {pathnames ===`/movies/${movie.id}/similar` ? null:<Link href={`similar`}>Similar &rarr;</Link>}
</li>
<li>

      {pathnames === `/movies/${movie.id}/credits` ? null:<Link href={`credits`}>Credit &rarr;</Link>}
</li>
        </ul>
    </div>);
  }