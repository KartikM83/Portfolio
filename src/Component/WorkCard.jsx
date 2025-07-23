import React from "react";

function WorkCard({ role, company, date, description, icon }) {
  return (
    <div className="m-4 w-[85vw] sm:w-[40vh] md:w-[48vh] lg:w-[46vh] bg-black border border-[#ffbd20] rounded-xl shadow-md transform transition duration-300 hover:scale-105 hover:shadow-[#ffbd20] hover:shadow-2xl">
      
      {/* Header / Icon Section */}
      <div className="flex items-center px-4 py-4">
        <div className="w-12 h-12 rounded-full bg-[#ffbd20] flex items-center justify-center text-2xl shadow-inner">
          {icon}
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-exo font-semibold capitalize">{role}</h3>
          <p className="text-sm text-gray-400">{company}</p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-4">
        <p className="text-sm text-gray-300">{description}</p>
        <p className="text-xs text-gray-500 mt-2 italic">{date}</p>
      </div>
    </div>
  );
}

export default WorkCard;
