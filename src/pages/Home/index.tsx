import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import creature from "./../../images/creature.jpeg";
import styles from "./styles.module.css";
import me from "./../../images/me.png";
import { socials, projects } from "./../../consts";

export function Home() {
  function calcAge() {
    var birthDate = new Date("Oct, 19, 1999");
    var totalSeconds = Math.abs((new Date().getTime() - birthDate.getTime()) / 1000);
    var seconds = Math.round(totalSeconds % 60);
    var minutes = Math.round((totalSeconds / 60) % 60);
    var hours = Math.round((totalSeconds / 60 / 60) % 24);
    var days = Math.round((totalSeconds / 60 / 60 / 24) % 365);
    var years = Math.round(totalSeconds / 60 / 60 / 24 / 365);

    return { seconds, minutes, hours, days, years };
  }
  const [age, setAge] = useState(calcAge());
  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calcAge());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <section className={styles.home}>
        <div className={styles.text}>
          <h1>Hi,</h1>
          <h1>
            I am <span className={styles.name}>Karel</span>
          </h1>
          <h1>Web3 Developer</h1>

          <Link to="#contact" className={styles.button}>
            Contact me
          </Link>

          <div className={styles.socials}>
            <a href={socials.twitter.link}>
              <img src={socials.twitter.image} alt="" />
            </a>
            <a href={socials.linkedin.link}>
              <img src={socials.linkedin.image} alt="" />
            </a>
            <a href={socials.github.link}>
              <img src={socials.github.image} alt="" />
            </a>
            <a href={socials.opensea.link}>
              <img src={socials.opensea.image} alt="" />
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={me} alt="" />
        </div>
      </section>

      <section>
        <h2 className="section-title">About</h2>
        <div className={styles.about}>
          <img src={creature} alt="" />
          <div>
            <h2>I am Karel</h2>
            <p>
              I am <b>{age.years}</b> years <b>{age.days}</b> days <b>{age.hours}</b> hours <b>{age.minutes}</b> minutes and <b>{age.seconds}</b>{" "}
              seconds old. Currently I really like developing on Ethereum blockchain. Good at <b>Solidity</b>, <b>React</b>, <b>Typescript</b> and{" "}
              <b>C#</b>. I have previously <b>worked on two companies</b> as a software developer and I am in University of Tartu studying
              Informatics. <b>If you have any offers or ideas that you would like to develop with me then contact me.</b>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.work}>
        <h2 className="section-title">Previous work</h2>
        <div className={styles.workDivs}>
          {projects.map((work) => (
            <a href={work.link}>
              <img src={work.image} alt="" />
              <p>{work.name}</p>
            </a>
          ))}
        </div>
        <Link to="resume" className={`${styles.button} ${styles.resume}`}>
          My resume
        </Link>
      </section>

      <section>
        <h2 className="section-title">Contact</h2>

        <div className={styles.contact}>
            <input type="text" placeholder="Name" />
            <input type="mail" placeholder="Email"  />
            <input type="mail" placeholder="Where did you find me?"  />
            <textarea name="" placeholder="Message" ></textarea>
            <p className={styles.button} >Send message</p>
        </div>
      </section>
    </main>
  );
}
