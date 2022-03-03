import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export function Header() {
  return (
    <nav>
      <Link to="/" className={styles.logo}>
        Karel
      </Link>
      <div className={styles.menu}>
        <Link to="#home">Home</Link>
        <Link to="#about">About</Link>
        <Link to="#work">Work</Link>
        <Link to="#contact">Contact</Link>
      </div>
    </nav>
  );
}
