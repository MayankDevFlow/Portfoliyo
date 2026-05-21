import React from "react";
import ProjectComponent from "./ProjectComponent";
import myimg from "../assets/Images/portfolyo-img.webp";
import textimg from "../assets/Images/Aboutimg.webp";

const Section2 = () => {
  return (
    <section>
      <div className="w-full min-h-screen   flex flex-col lg:flex-row text-white  md:mt-10 mb-20">
        {/* Left Section */}
        <div
          className=" flex flex-col justify-end px-5 md:px-10 
                  w-full lg:w-[70vw] h-[50vh] lg:h-[90vh] py-10 md:py-0  "
        >
          <h3 className="text-lg deco md:text-3xl lg:text-3xl font1 leading-tight lg:px-2 md:px-1">
            I’m Specialized in
            <br /> Creating Website Design.
          </h3>

          <div className=" bg-black flex items-center justify-center">
            <h1
              className="text-[180px] cursor-default  animate font-extrabold uppercase text-transparent bg-clip-text bg-top bg-cover"
              style={{
                backgroundImage: `url('${textimg}')`,
              }}
            >
              MAYANK
            </h1>
          </div>
        </div>

        {/* Right Section */}
        <div
          className=" flex justify-start lg:justify-end  md:justify-center
             items-center w-full lg:w-[30vw] h-auto lg:h-[90vh] p-5 lg:mr-8 md:ml-60"
        >
          <div className="h-[40vh] w-[50vw] md:w-[30vw] lg:w-[15vw] ">
            <img
              src={myimg}
              className="h-full w-full object-cover object-top lg:mt-40.5"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Section  2 */}
      <ProjectComponent />
    </section>
  );
};

export default Section2;
