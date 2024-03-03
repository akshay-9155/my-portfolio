import React, { useEffect } from "react";
import profilePhoto from "../assets/myImg.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Intro = ({ navBarRef }) => {
  const mobileView = window.innerWidth < 640 ? true : false;
  useEffect(() => {
    let tl = gsap.timeline();
    tl.to(".name-text", {
      x: "-100%",
      scrollTrigger: {
        trigger: mobileView ? navBarRef.current : ".name-text",
        start: mobileView ? "top -10%" : "top bottom",
        end: mobileView ? "top -100%" : "bottom top",
        scrub: 2,
      },
    });
  });
  return (
    <div className=" w-screen bg-zinc-900">
      <div className="flex items-center justify-center">
        <span className="text-7xl sm:text-9xl text-center my-10 tracking-tighter before:content-['Who_is'] before:absolute before:-translate-x-1 before:-translate-y-1 before:text-stroke">
          Who is
        </span>
      </div>
      <div className="flex justify-center max-width ">
        <img
          src={profilePhoto}
          className=" w-[90vw] rounded-xl sm:w-[70vw]"
          alt=""
        />
      </div>
      <h1 className=" name-text text-7xl sm:text-9xl whitespace-nowrap mt-20">
        Akshay Anand? Akshay Anand? Akshay Anand? Akshay Anand? Akshay Anand?
        Akshay Anand?
      </h1>
    </div>
  );
};

export default Intro;
