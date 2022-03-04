import styles from "./styles.module.css";
import { socials } from "./../../consts";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { useState } from "react";
export function Footer() {
  const [animation,setAnimation] =useState(false);
  return (
    <div className={styles.footer}>
      <div>
        <a href={socials.twitter}>
          <FaTwitter />
        </a>
        <a href={socials.linkedin}>
          <FaLinkedinIn />
        </a>
        <a href={socials.github}>
          <FaGithub />
        </a>
      </div>
      <a href="mailto:karel@karel.wtf" className={styles.email}>karel@karel.wtf</a>
      <p className={`${styles.title} ${animation ? styles.animation :""}`} onClick={()=>setAnimation(a=>!a)}>Karel</p>
    </div>
  );
}
