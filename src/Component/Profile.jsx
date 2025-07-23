import React from "react";
import profileImage from "../assets/Passport_Photo copy.png"; // Use your correct image path

function Profile() {
  return (
    <section
      id="profile"
      className="w-full min-h-[100vh]  bg-zinc-900 text-white py-20 flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12"
    >
      {/* Left Text Section */}
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-[10vw] md:text-6xl font-bold font-exo uppercase mb-4 text-[#ffbd20] drop-shadow">
          Hi, I'm Kartik Mankar
        </h1>
        <h2 className="text-[5vw] md:text-2xl font-semibold text-[#ffbd20] mb-6 uppercase">
          Full Stack Developer
        </h2>
        <p className="text-[4vw] md:text-base text-gray-300 mb-8">
          I'm a passionate developer with experience in building responsive
          websites, backend APIs, and full-stack applications using React,
          Spring Boot, Java, and more.
        </p>

        <div className="flex gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-[#ffbd20] hover:bg-[#f99b07] text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Contact Me
          </a>
          <a
            href="/Kartik_Mankar_Resume.pdf"// Replace with your actual resume link
            download
            className="bg-transparent border border-white hover:bg-white hover:text-zinc-900 text-white font-bold py-2 px-6 rounded-full transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="md:w-1/2 flex justify-end mb-10 md:mb-0 ">
        <img
          src={profileImage}  
          alt="Profile"
          className="w-[70vw] sm:w-[50vw] md:w-[400px] h-auto rounded-full border-4 border-[#ffbd20] shadow-lg"
        />
      </div>
    </section>
  );
}

export default Profile;
