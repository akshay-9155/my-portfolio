import React, { useEffect, useRef } from "react";
import Instagram from "../assets/hii.png";
import Github from "../assets/repo.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const About = () => {
  const aboutPart1Ref = useRef(null);
  const aboutPart2Ref = useRef(null);
  const aboutPart3Ref = useRef(null);
  useEffect(() => {
    gsap.to(aboutPart1Ref.current, {
      duration: 1,
      opacity: 1,
      scrollTrigger: {
        trigger: aboutPart1Ref.current,
        start: "top 60%",
        end: "bottom 50%",
      },
    });
    gsap.to(aboutPart2Ref.current, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: aboutPart2Ref.current,
        start: "top 60%",
        end: "bottom 50%",
      },
    });
    gsap.to(aboutPart3Ref.current, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: aboutPart3Ref.current,
        start: "top 60%",
        end: "bottom 50%",
      },
    });
  }, []);
  return (
    <div className=" my-10 sm:mt-32">
      <div className="about-me text-5xl sm:text-7xl tracking-tighter sm:tracking-normal text-center flex flex-col gap-4 px-4">
        <h1 ref={aboutPart1Ref} className="opacity-0">
          Hi!
        </h1>
        <h1 ref={aboutPart2Ref} className="opacity-0">
          I'm Akshay, a full stack web developer and a freelance UI/UX designer.
        </h1>
        <h1 ref={aboutPart3Ref} className="opacity-0">
          I've been a part of Sheryians for 2 years and taught more than 500+
          students full-stack web development, As a web developer, my best work
          is Sheryians's website which is a course-selling website similar to
          awwwards or udemy. Along with that I've also created more than 50+
          websites for my clients in Bhopal.
        </h1>
      </div>
      <div className=" flex mt-10 justify-center">
        <a
          href="https://www.instagram.com/_a__kshay?igsh=MXJ6amwxcWdtZm1xOQ=="
          target="null"
        >
          <img className="sm:h-20" src={Instagram} alt="" />
        </a>
        <a href="https://github.com/akshay-9155?tab=repositories" target="null">
          <img className="sm:h-20" src={Github} alt="" />
        </a>
      </div>
    </div>
  );
};

export default About;
