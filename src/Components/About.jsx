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
      <div className="about-me text-4xl sm:text-7xl tracking-tighter sm:tracking-normal text-center flex flex-col gap-4 px-4">
        <h1 ref={aboutPart1Ref} className="opacity-0">
          Hi there!
        </h1>
        <h1 ref={aboutPart2Ref} className="opacity-0">
          I'm Akshay, a full-stack developer skilled in{" "}
          <span className="text-[#61DAFB]">React</span>,{" "}
          <span className="text-[#8CC84B]">Node.js</span>,{" "}
          <span className="text-[#F7B52B]">Express.js</span>, and{" "}
          <span className="text-[#4DB33D]">MongoDB</span>. I build scalable,
          responsive applications and continuously refine my expertise.
        </h1>
        <h1 ref={aboutPart3Ref} className="opacity-0">
          Proficient in <span className="text-[#38B2AC]">Tailwind CSS</span> for
          sleek interfaces and <span className="text-[#F7B52B]">GSAP</span> for
          advanced animations, I also leverage{" "}
          <span className="text-[#4DB33D]">Socket.io</span> for real-time
          features like messaging. I thrive on challenges, delivering creative,
          high-quality solutions in web development and constantly expanding my
          knowledge to stay ahead in the field.
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
