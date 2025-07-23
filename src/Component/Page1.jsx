import React from "react";
import { Link } from "react-scroll";
import { FaArrowDown } from "react-icons/fa";

function Page1() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex flex-col justify-center items-center text-white bg-zinc-900 px-6 md:px-16 text-center"
    >
      <div className="max-w-4xl">
        <h1 className="text-[9vw] md:text-[5vw] font-bold font-exo uppercase leading-tight mb-4">
          Hi, I'm <span className="text-[#ffbd20]">Kartik Mankar</span>
        </h1>

        <p className="text-md md:text-lg text-gray-300 mb-6 font-exo">
          I’m a passionate Full Stack Developer with expertise in Javascript, Spring Boot, and everything in between.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-6 py-3 bg-[#ffbd20] hover:bg-[#f99b07] rounded-full text-white font-semibold cursor-pointer transition"
          >
            View Projects
          </Link>

          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
            className="px-6 py-3 bg-transparent border border-white hover:bg-white hover:text-black rounded-full font-semibold cursor-pointer transition"
          >
            Contact Me
          </Link>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="mt-16 animate-bounce text-gray-400">
        <Link to="profile" smooth={true} duration={500} offset={-70}>
          <FaArrowDown size={24} className="cursor-pointer" />
        </Link>
      </div>
    </section>
  );
}

export default Page1;
