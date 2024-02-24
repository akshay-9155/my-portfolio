import React, { useEffect, useRef } from "react";
import images from "../assets/images";
import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const delay = 0;
  const logosRef = useRef(null);
  useEffect(() => {
    console.log(logosRef.current.children);
    gsap.to(logosRef.current.children, {
      opacity: 1,
      x: 0,
      duration: 0.5,
      ease: Power3,
      stagger: 0.3,
      scrollTrigger: {
        trigger: logosRef.current,
        start: "top 70%",
        end: "bottom 70%",
      },
    });
  }, []);
  const handleMouseEnter = (id) => {
    document.getElementById(id).style.display = "inline";
  };
  const handleMouseLeave = (id) => {
    document.getElementById(id).style.display = "none";
  };
  return (
    <div className="bg-zinc-900 px-5 py-20 sm:px-20">
      <h1 className="tracking-tighter text-4xl sm:text-5xl font-bold">
        Things I am <span className="text-sky-400">good</span> at
      </h1>
      <h1 className="tracking-tighter text-md sm:text-xl font-bold">
        skills, interests, passion and hobbies
      </h1>
      <div className="development flex items-center justify-center text-4xl font-bold bg-zinc-50 text-zinc-800 w-fit rounded-2xl px-5 py-2 leading-none mt-20 lowercase">
        Development
      </div>
      <div
        ref={logosRef}
        className="logos flex flex-wrap gap-2 sm:gap-4 gap-y-4 mt-10"
      >
        {images.map((item, index) => (
          <div key={index} className="relative opacity-0 -translate-x-[100px]">
            <img
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={() => handleMouseLeave(item.id)}
              src={item.url}
              className="h-14 sm:h-20 bg-zinc-700 rounded-md aspect-auto p-2 sm:p-3"
            ></img>
            <span
              id={item.id}
              style={{ display: "none" }}
              className=" bg-zinc-400 text-zinc-900 text-sm leading-none px-2 py-1 font-bold rounded-md absolute right-0 translate-x-1/2 top-0 -translate-y-[150%]"
            >
              {item.url.split("/")[1].split(".")[0]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
