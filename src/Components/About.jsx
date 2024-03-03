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
    <div className=" my-10 sm:mt-32 bg-zinc-900">
      <div className="about-me text-5xl sm:text-7xl tracking-tighter sm:tracking-normal text-center flex flex-col gap-4 px-4">
        <h1 ref={aboutPart1Ref} className="opacity-0">
          Hi!
        </h1>
        <h1 ref={aboutPart2Ref} className="opacity-0">
          I'm Akshay, a front-end developer specializing in{" "}
          <span className=" text-[#E44C20]">HTML</span>,
          <span className=" text-[#1F63B0]">CSS</span>,{" "}
          <span className=" text-[#F7E01D]">JavaScript</span>, and{" "}
          <span className=" text-[#60DAFA]">React</span>, poised to expand into
          backend technologies.
        </h1>
        <h1 ref={aboutPart3Ref} className="opacity-0">
          As a budding Front-End Developer, I bring a foundational understanding
          of HTML, CSS, and JavaScript, coupled with a passion for learning and
          growth. Proficient in <span className=" text-[#60DAFA]">React</span>,
          I am eager to apply my skills to craft engaging user interfaces.
          Familiarity with database management using{" "}
          <span className="text-[#E48E00]">MySQL</span> and{" "}
          <span className="text-[#4FA940]">MongoDB</span> underscores my
          commitment to mastering full-stack development. Excited to delve into
          animation libraries like <span className="text-[#88CE02]">GSAP</span>{" "}
          to enhance user experiences. While my experience with{" "}
          <span className="text-[#EC2026]">Java</span> is nascent, I am
          enthusiastic about expanding my backend capabilities. With a keen eye
          for detail and a dedication to continuous improvement, I am poised to
          contribute and thrive in collaborative environments.
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
