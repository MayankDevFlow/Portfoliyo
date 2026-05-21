import React from "react";
import resume1 from "../assets/Images/resume1.jpg";
import resume2 from "../assets/Images/resume 2.jpg";

const Resume = () => {
  return (
    <div className="w-full mt-17 min-h-screen bg-black px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10">
      
      {/* Heading */}
      <div className="text-center  mb-10">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold">
          My Resume
        </h1>

        <p className="text-zinc-400 mt-4 text-sm sm:text-base">
          Frontend Developer Resume Showcase
        </p>
      </div>

      {/* Resume Images */}
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        
        {/* Resume 1 */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
          <img
            src={resume2}
            alt="Resume 2"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>

        {/* Resume 2 */}
        <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl border border-zinc-800 shadow-2xl">
          <img
            src={resume1}
            alt="Resume 1"
            className="w-full h-full object-cover hover:scale-105 transition-all duration-500"
          />
        </div>
      </div>
    </div>
  );
};

export default Resume;