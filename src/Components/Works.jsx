import React from "react";
import works from "../assets/worklink.png";
import projects from "../assets/projectsImg";
const Works = () => {
  return (
    <div className="bg-zinc-700 px-8 sm:px-16 py-14 ">
      <div className="text mb-5 sm:mb-10">
        <h1 className="text-4xl sm:text-6xl tracking-tighter">
          crafted with <span className="text-red-400">love</span>.
        </h1>
        <h1 className="text-xl sm:text-2xl tracking-tighter">
          these are few of my recent works
        </h1>
      </div>
      <div className="flex flex-wrap gap-5 py-10 rounded-xl sm:rounded-3xl justify-center bg-zinc-200 p-3">
        {projects.map((item, index) => (
          <a href={item.githubLink} target="null" key={index}>
            <img
              className=" h-[6.5rem] sm:h-60 rounded-md sm:rounded-lg"
              src={item.url}
              alt=""
            />
          </a>
        ))}
      </div>
      <a
        href="https://github.com/akshay-9155?tab=repositories"
        target="null"
        className="mt-12 flex justify-end"
      >
        <img className="h-12 sm:h-16" src={works} alt="" />
      </a>
    </div>
  );
};

export default Works;
