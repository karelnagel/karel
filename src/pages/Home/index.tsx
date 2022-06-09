import { useEffect, useRef, useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import creature from "./../../images/creature.jpeg";
import { socials, projects } from "./../../consts";
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
  const titles = ["Web3 developer", "HODLER", "Fullstack developer", "2 x Estonian champion", "Investor"];
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
    <main className="max-w-screen-lg m-auto flex flex-col space-y-10 md:space-y-40 items-center px-2">
      <section className="flex flex-col-reverse md:flex-row md:items-center py-20 md:pb-32 md:pt-40 w-full" id="home">
        <div className="md:basis-2/3 flex flex-col items-start w-full">
          <h1 className="text-4xl md:text-6xl font-bold leading-snug">
            Hi,
            <br />I am <span className="text-primary">Karel</span>
            <br />
            {titles[index]}
          </h1>

          <Link to="#contact" className="btn mt-10 md:mt-24 text-3xl font-bold tranlate">
            Contact me
          </Link>

          <div className="flex text-4xl mt-4 space-x-8 child-hover:animate-spin child-hover:text-primary duration-200">
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
        <div className="basis-1/3 rounded-full overflow-hidden bg-primary w-60 m-auto mb-20 md:mb-auto">
          <img src="/favicon.png" alt="" />
        </div>
      </section>

      <section id="about">
        <h2>About</h2>
        <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 items-center justify-between">
          <a href={socials.opensea} className="basis-1/3 rounded-md overflow-hidden w-3/4">
            <img src={creature} alt="" />
          </a>
          <div className="basis-2/3 text-xl">
            <h3>I am Karel,</h3>
            <p>
              a <b>{age.years}</b> year <b>{age.days}</b> day <b>{age.hours}</b> hour <b>{age.minutes}</b> minute and <b>{age.seconds}</b>-second old
              software developer from <b>Estonia</b>.
              <br />I have <b>3+ years of programming experience</b>, I have worked as a software developer in <b>two companies</b>, and currently{" "}
              <b>studying Informatics</b> at the University of Tartu.
              <br />
              I made my first crypto investment in 2017 but started learning about web3 and developing dapps in summer 2021.
              <br />
              <b>I am looking for an idea or a job in the web3 space.</b>
            </p>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <div className="grid md:grid-cols-3 gap-6 ">
          {projects.map((work, i) => (
            <a
              href={work.link}
              key={i}
              className="relative shadow-md shadow-secondary group hover:scale-110 md:hover:scale-125 hover:z-10 rounded-lg overflow-hidden h-48 duration-300"
            >
              <img src={work.image} alt="" className="w-full h-full object-cover" />
              <div className="absolute top-0 text-center hidden group-hover:block text-white bg-secondary bg-opacity-50 h-full p-4">
                <h4 className="text-lg font-bold">{work.name}</h4>
                <p>{work.description}</p>
              </div>
            </a>
          ))}
        </div>
        <a href="/resume.pdf" className="btn m-auto mt-10 text-xl font-bold">
          My resume
        </a>
      </section>

      <section id="contact" className="w-full">
        <h2>Contact me</h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col space-y-4 items-center max-w-lg m-auto w-full">
          <input type="text" placeholder="Name" name="name" />
          <input type="mail" placeholder="Email" name="email" required />
          <input type="text" placeholder="Where did you find me?" name="where" />
          <textarea placeholder="Message" name="message" required></textarea>
          <button className="btn text-lg font-bold" type="submit">
            {sending ? "Sending ..." : "Send"}
          </button>
        </form>
      </section>
    </main>
  );
}
