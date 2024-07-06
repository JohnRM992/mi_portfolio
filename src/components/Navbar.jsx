import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" style={{ width: "100px" }} />
      </div>
      {/* MENU */}

      <ul className="hidden md:flex ">
        <li className="hover:text-[#ff1470] duration-300">
          <Link to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li className="hover:text-[#ff1470] duration-300">
          {" "}
          <Link to="about" smooth={true} duration={500}>
            Acerca
          </Link>
        </li>
        <li className="hover:text-[#ff1470] duration-300">
          {" "}
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="hover:text-[#ff1470] duration-300">
          {" "}
          <Link to="work" smooth={true} duration={500}>
            Trabajo
          </Link>
        </li>
        <li className="hover:text-[#ff1470] duration-300">
          {" "}
          <Link to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* MENU HAMBURGUESA */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars className="h-8 w-8 mb-3"/> : <FaTimes className="h-8 w-8 mb-3" />}
      </div>

      {/* MENU MOBILE */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li  className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Inicio
          </Link>
        </li>
        <li  className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            Acerca
          </Link>
        </li>
        <li  className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li  className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Trabajo
          </Link>
        </li>
        <li  className="py-6 text-4xl ">
          {" "}
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contacto
          </Link>
        </li>
      </ul>

      {/* SOCIAL NETWORKS ICONS */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-blue-600">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/jonatanmascare%C3%B1o992/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#333333]">
            <a
              target="_blank"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/JohnRM992"
            >
              Github <FaGithub size={30} />
            </a>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="mailto:jonatanrm92@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>

          {/* <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
            >
              CV <BsFillPersonLinesFill size={30} />
            </a>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
