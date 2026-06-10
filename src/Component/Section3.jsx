import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import SkillDisplay from "./SkillDisplay";
import { useNavigate } from "react-router-dom";

const Section3 = () => {
  let redirect = useNavigate()
  const [skills, setSkills] = useState([
    {
      sno: "01",
      skillname: "HTML",
    },
    {
      sno: "02",
      skillname: "CSS",
    },
    {
      sno: "03",
      skillname: "JavaScript (ES6+)",
    },
    {
      sno: "04",
      skillname: "React JS",
    },
    {
      sno: "05",
      skillname: "Figma",
    },
    {
      sno: "06",
      skillname: "Git/Github",
    },
  ]);
  return (
    <section className="bg-black section3 w-full">
      <div className="flex items-center justify-center h-20">
        <div
          onClick={() => {
            redirect("/projects");
          }}
          className="border cursor-pointer border-gray-100 h-10 w-50  flex items-center justify-center rounded-3xl "
        >
          <div className=" group  rounded-3xl  text-xl h-10 w-35 flex flex-col justify-top cursor-pointer text-center overflow-hidden">
            <button className="group-hover:-translate-y-7 translate-y-1 text-white transition-all duration-300">
              More
            </button>
            <button className="group-hover:-translate-y-6 translate-y-8 text-white transition-all duration-300">
              More
            </button>
          </div>
          <FaArrowRightLong className="text-2xl text-white" />
        </div>
      </div>
      <div className="lg:px-15 md:px-10 px-5 ">
        <h1
          id="mytech"
          className="text-white lg:text-6xl md:text-4xl text-3xl lg:my-14 my-7 font5"
        >
          My Tech Skills
        </h1>
        {skills.map((val, index) => {
          return <SkillDisplay key={index} data={val} />;
        })}
      </div>
    </section>
  );
};

export default Section3;
