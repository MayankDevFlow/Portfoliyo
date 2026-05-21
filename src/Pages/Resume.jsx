import React from "react";
import resume1 from "../assets/Images/resume1.jpg";
import resume2 from "../assets/Images/resume 2.jpg";
const Resume = () => {
  return (
    <div className="h-[105.8vh] mt-18 px-40  w-full flex gap-2 bg-black">
      <div className="h-full w-1/2 bg-amber-800">
        <img src={resume2} alt="" />
      </div>
      <div className="h-full w-1/2 bg-amber-400">
        <img src={resume1} alt="" />
      </div>
    </div>
  );
};

export default Resume;
