import { socials } from "../consts";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa";
export function Footer() {
  return (
    <footer className="bg-secondary text-white flex flex-col text-lg items-center space-y-10 p-10 mt-20">
      <div className="child:text-4xl flex space-x-10 child-hover:animate-spin ">
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
      <a href="mailto:karel@karel.wtf" className="">
        karel@karel.wtf
      </a>
    </footer>
  );
}
