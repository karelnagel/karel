import styles from "./styles.module.css";

import { HashLink as Link } from "react-router-hash-link";
export function Header() {
  return (
    <nav>
      <div className={styles.header}>
      <Link to="/" className={styles.logo}>
        Karel
      </Link>
      <div className={styles.menu}>
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#work">Work</Link>
        <Link to="#contact">Contact</Link>
      </div>
      </div>
    </nav>
  );
}
