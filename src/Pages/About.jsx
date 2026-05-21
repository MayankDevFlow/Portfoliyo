import React, { useRef } from "react";
import AboutCom from "../Component/AboutCom";
import Footer from "../Component/Footer";
import Cursordiv from "../Component/Cursordiv";
const About = () => {
  return (
    <div id="about">
      <div className="h-[120vh] w-full mt-5 bg-black">
        <AboutCom />
      </div>
    </div>
  );
};

export default About;
