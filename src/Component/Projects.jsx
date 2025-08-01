// Projects.jsx
import React from "react";
import ProjectCard from "../Component/ProjectCards";
import leaveImg from '../assets/leave_management_system.png';
import jobImg from '../assets/job_application.webp';
import taskImg from '../assets/task_management.webp';
import voiceImg from '../assets/voice_ai.webp';


const projects = [

  {
  name: "Leave Management System",
  description: "Built a full-stack Leave Management System with role-based access using Spring Boot, JPA, and MySQL. Included RESTful APIs, validation, and a front end with HTML, CSS, and JavaScript.",
  img: leaveImg,
  github: "https://github.com/KartikM83/Leave-Management-System"
  },

  {
    name: "Job Application API",
    description: "Developed a RESTful API for job post management using Spring Boot, JPA, and MySQL, with AOP for logging and Postman for API testing.",
    img: jobImg,
    github: "https://github.com/KartikM83/Job-Application",
  },
  {
    name: "Task Management API",
    description: "Built a RESTful Task Management API with CRUD operations, exception handling, and sorting using Spring Boot, JPA, and connect it with MySQL.",
    img: taskImg,
    github: "https://github.com/KartikM83/Task_Application",
  },
  {
    name: "Voice AI Gesture System",
    description: "Developed a Voice and Hand Gesture-Controlled System, enhancing user interaction through advanced computer vision and voice AI technologies.",
    img: voiceImg,
    github: "https://github.com/KartikM83/Voice-AI-With-Hand-Gestures-Interaction",
  },
];

function Projects() {
  return (
    <section id="projects" className="bg-zinc-900 text-white py-20">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-exo font-bold uppercase">My Projects</h2>
        <div className="w-1/2 mx-auto h-[2px] bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500 mt-4"></div>
      </div>
      <div className="flex flex-wrap justify-center">
        {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
      </div>
    </section>
  );
}

export default Projects;
