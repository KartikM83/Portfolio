import React from "react";
import { FaGithub } from "react-icons/fa"; // GitHub icon

function ProjectCard({ name, description, img, github }) {
  return (
    <div className="m-4 w-[85vw] sm:w-[40vh] md:w-[48vh] lg:w-[46vh] bg-black border border-[#ffbd20] rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[#ffbd20] hover:shadow-2xl">
      
      {/* Image */}
      <div className="w-full h-[180px] overflow-hidden">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover transition duration-300 hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-[200px]">
        <div>
          <h3 className="text-lg font-exo font-semibold mb-2 capitalize">{name}</h3>
          <p className="text-sm text-gray-300">{description}</p>
        </div>

        {/* GitHub Button */}
        {github && (
          <div className="mt-4">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-1 bg-[#ffbd20] text-white text-sm font-semibold rounded hover:bg-indigo-700 transition duration-200"
            >
              <FaGithub className="mr-2" /> Github Link
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
