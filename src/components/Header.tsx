import { HashLink as Link } from "react-router-hash-link";

export function Header() {
  return (
    <nav id="top" className="w-full  shadow-primary shadow-md">
      <div className="m-auto max-w-screen-lg flex justify-between py-4 px-2 duration-200 items-center">
        <Link to="/" className="md:text-4xl text-3xl font-bold hover:scale-110">
          Karel
        </Link>
        <div className="flex space-x-5 child-hover:scale-105 md:text-xl text-lg font-semibold items-center child:md:block child:hidden ">
          <a href="https://medium.com/@karelETH">Blog</a>
          <Link to="#projects">Projects</Link>
          <Link to="#contact" className="btn !block">
            Contact me
          </Link>
        </div>
      </div>
    </nav>
  );
}
