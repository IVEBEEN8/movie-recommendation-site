"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../ styles/navigation.module.css";

export default function Navigation() {
  const path = usePathname();
  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        <li>
          <Link href="/">HOME</Link> {path === "/" ? " 👈🏻" : ""}
        </li>
        <li>
          <Link href="/about-us">ABOUT US</Link>
          {path === "/about-us" ? " 👈🏻" : ""}
        </li>
      </ul>
    </nav>
  );
}