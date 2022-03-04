import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import creature from "./../../images/creature.jpeg";
import styles from "./styles.module.css";
import me from "./../../images/me.png";
import { socials, projects } from "./../../consts";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

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

export function Home() {
  const titles = ["Web3 developer", "Fullstack developer", "Blockchain enthusiast"];
  const [age, setAge] = useState(calcAge());
  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: any) => {
    setSending(true);
    e.preventDefault();
    try {
      const result = await emailjs.sendForm("service_rdhjuqr", "template_gctuyma", form.current!, "aW073kT0d8YmT0MKN");
      console.log(result.text);
      form.current?.reset();
    } catch (e) {
      console.log(e);
    }
    setSending(false);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setAge(calcAge());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1 < titles.length ? i + 1 : 0));
    }, 2500);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <main>
      <section className={styles.home} id="home">
        <div className={styles.text}>
          <h1>Hi,</h1>
          <h1>
            I am <span className={styles.name}>Karel</span>
          </h1>
          <h1 className={styles.title}>{titles[index]}</h1>

          <Link to="#contact" className={styles.button}>
            Contact me
          </Link>

          <div className={styles.socials}>
            <a href={socials.twitter.link}>
              <FaTwitter />
            </a>
            <a href={socials.linkedin.link}>
              <FaLinkedinIn />
            </a>
            <a href={socials.github.link}>
              <FaGithub />
            </a>
          </div>
        </div>
        <div className={styles.image}>
          <img src={me} alt="" />
        </div>
      </section>

      <section id="about">
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

      <section className={styles.workSection} id="work">
        <h2 className="section-title">Previous work</h2>
        <div className={styles.work}>
          {projects.map((work, i) => (
            <a href={work.link} key={i}>
              <img src={work.image} alt="" />
              <div className={styles.workInfo}>
                <h4>{work.name}</h4>
                <p>{work.description}</p>
              </div>
            </a>
          ))}
        </div>
        <Link to="resume" className={`${styles.button} ${styles.resume}`}>
          My resume
        </Link>
      </section>

      <section id="contact">
        <h2 className="section-title">Contact me</h2>

        <form ref={form} onSubmit={sendEmail} className={styles.contact}>
          <input type="text" placeholder="Name" name="name" />
          <input type="mail" placeholder="Email" name="email" required />
          <input type="mail" placeholder="Where did you find me?" name="where" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button className={styles.button} type="submit">
            {sending? "Sending ..." : "Send message"}
          </button>
        </form>
      </section>
    </main>
  );
}
