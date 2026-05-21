import React, { useEffect, useRef, useState } from "react";
import Navbar from "../Component/Navbar";
import Button from "../Component/Button";
import SkillDisplay from "../Component/SkillDisplay";
import Footer from "../Component/Footer";
import AboutCom from "../Component/AboutCom";
import ProjectComponent from "../Component/ProjectComponent";
import Archivementpage from "./Archivementpage";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaArrowRightLong } from "react-icons/fa6";
import { redirect, useNavigate } from "react-router-dom";
import Section2 from "../Component/Section2";
import Section3 from "../Component/Section3";
import Cursordiv from "../Component/Cursordiv";
gsap.registerPlugin(ScrollTrigger);

const HomePage = () => {
  let redirect = useNavigate();
  useGSAP(() => {
    gsap.fromTo(
      "#mytech",
      {
        y: 100,
        opacity: 0,
        // duration: 1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
        },
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: ".section3",
          start: "top 60%",
        },
      },
    );
  });

  useGSAP(() => {
    gsap.fromTo(
      ".animate",
      {
        x: -200,
        opacity: 0,
        stagger: 0.2,
        duration: 4,
        ease: "power3.out",
      },
      {
        x: 0,
        opacity: 1,
        duration: 4,
      },
    );

    gsap.fromTo(
      ".deco",
      {
        x: -100,
        opacity: 0,
        scale: 0.7,
        filter: "blur(8px)",
      },
      {
        x: 0,
        duration: 2,
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
      },
    );
  });
  return (
    <div id="main" className="  bg-black overflow-hidden ">
      {/* Cursor Div */}
      <Cursordiv />

      {/* Navbar */}
      <Navbar />
      {/* Section   2 */}
      <Section2 />
      {/* Section   3 */}
      <Section3 />
      {/* Section   4 */}
      <AboutCom />
      {/* Section   5 */}
      <Archivementpage />
    </div>
  );
};
export default HomePage;
