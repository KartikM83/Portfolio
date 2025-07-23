// Work.jsx
import React from "react";
import WorkCard from "./WorkCard";

const jobs = [
  {
    role: "Front-End Developer Intern",
    company: "Graphomagic.in",
    date: "Jan 2024 - Jun 2024",
    description: "Built responsive front-end using HTML, CSS & JS.",
    icon: "💻",
  },
  {
    role: "Deep Learning Intern",
    company: "Toxic Comment Detection",
    date: "Jul 2023 - Aug 2023",
    description: "Worked on NLP model training & evaluation.",
    icon: "🤖",
  },
  // add other entries...
];

function Work() {
  return (
    <section id="work" className="bg-zinc-900 text-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-exo font-bold uppercase">My Work Experience</h2>
        <div className="w-1/2 mx-auto h-[2px] bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mt-4"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {jobs.map((job, i) => (
          <WorkCard key={i} {...job} />
        ))}
      </div>
    </section>
  );
}

export default Work;
