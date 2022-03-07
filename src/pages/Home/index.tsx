import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import creature from "./../../images/creature.jpeg";
import styles from "./styles.module.css";
import me from "./../../images/me.png";
import skillsImage from "./../../images/skills.jpeg";
import { socials, projects, skills } from "./../../consts";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function calcAge() {
  var birthDate = new Date("Oct, 18, 1999 22:15:00 UTC");
  var totalSeconds = Math.abs((new Date().getTime() - birthDate.getTime()) / 1000);
  var seconds = Math.trunc(totalSeconds % 60);
  var minutes = Math.trunc((totalSeconds / 60) % 60);
  var hours = Math.trunc((totalSeconds / 60 / 60) % 24);
  var days = Math.trunc((totalSeconds / 60 / 60 / 24) % 365);
  var years = Math.trunc(totalSeconds / 60 / 60 / 24 / 365);

  return { seconds, minutes, hours, days, years };
}

export function Home() {
  const titles = ["Web3 developer", "HODLER", "Fullstack developer", "2 x Estonian champion", "Problem solver", "Investor"];
  const [age, setAge] = useState(calcAge());
  const [index, setIndex] = useState(0);
  const [sending, setSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = async (e: any) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);
    try {
      const result = await emailjs.sendForm(
        process.env.REACT_APP_SERVICE_ID!,
        process.env.REACT_APP_TEMPLATE_ID!,
        form.current!,
        process.env.REACT_APP_USER_ID
      );
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
            I am <span className="firstColor">Karel</span>
          </h1>
          <h1>{titles[index]}</h1>

          <Link to="#contact" className="button">
            Contact me
          </Link>

          <div className={styles.socials}>
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
        </div>
        <div className={styles.image}>
          <img src={me} alt="" />
        </div>
      </section>

      <section id="about">
        <h2 className={styles.sectionTitle}>About</h2>
        <div className={styles.about}>
          <a href={socials.opensea}>
            <img src={creature} alt="" />
          </a>
          <div>
            <h3>I am Karel,</h3>
            <p>
              a <b>{age.years}</b> year <b>{age.days}</b> day <b>{age.hours}</b> hour <b>{age.minutes}</b> minute and <b>{age.seconds}</b>-second old
              software developer from <b>Estonia</b>. 
              <br/>
              I have <b>3+ years of programming experience</b>, worked as a software developer in{" "}
              <b>two companies</b>, and currently <b>studying Informatics</b> at the University of Tartu. 
              <br/>
              First crypto investments in 2017, but started learning about web3 and developing dapps in summer 2021.
              <br />
              <b>Currently looking for an idea or a job in web3 space.</b>
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className={styles.sectionTitle}>Skills</h2>
        <div className={styles.skills}>
          <div className={styles.skillsContent}>
            {skills.map((skill, i) => (
              <div key={i} className={styles.skill}>
                <skill.icon />
                <p>{skill.name}</p>
                <p>{skill.percent}%</p>
                <div style={{ width: `${skill.percent}%` }}></div>
              </div>
            ))}

            <p> I have also worked with Java, Kotlin, Spring, Python, SQL, Vue and MQL4/5.</p>
          </div>
          <div className={styles.skillsImage}>
            <img src={skillsImage} alt="" />
          </div>
        </div>
      </section>

      <section className={styles.workSection} id="projects">
        <h2 className={styles.sectionTitle}>Projects</h2>
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
        <a href="/resume.pdf" className={`button ${styles.resume}`}>
          My resume
        </a>
      </section>

      <section id="contact">
        <h2 className={styles.sectionTitle}>Contact me</h2>

        <form ref={form} onSubmit={sendEmail} className={styles.contact}>
          <input type="text" placeholder="Name" name="name" />
          <input type="mail" placeholder="Email" name="email" required />
          <input type="text" placeholder="Where did you find me?" name="where" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button className="button" type="submit">
            {sending ? "Sending ..." : "Send"}
          </button>
        </form>
      </section>
    </main>
  );
}
