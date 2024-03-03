import React, { useEffect, useRef } from "react";
import pdfUrl from '../assets/AkshayResume.pdf'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
const Header = ({ navBarRef }) => {
  const arrowRef = useRef(null);
  useEffect(() => {
    gsap.to(arrowRef.current, {
      rotate: "90deg",
      duration: 1,
      scrollTrigger: {
        trigger: navBarRef.current,
        toggleActions: "play none none reset",
        start: "top, -5%",
        end: "top, -6%",
      },
    });
    gsap.to(navBarRef.current, {
      opacity: 0.9,
      duration: 1,
      scrollTrigger: {
        trigger: navBarRef.current,
        start: "top, top",
      },
    });
  });
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleDownload = () => {
    const a = document.createElement("a");
    a.href = pdfUrl;
    a.download = "AkshayResume.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  return (
    <div className="nav-bar fixed top-0 w-screen opacity-95" ref={navBarRef}>
      <header className="flex justify-between items-center bg-zinc-900 p-5">
        <a
          className="flex flex-col text-[5vw] sm:text-[2vw] uppercase font-bold"
          href=""
        >
          <span className=" leading-8 sm:leading-none">Akshay</span>
          <span className=" leading-8 sm:leading-none">Anand</span>
        </a>
        <div
          ref={arrowRef}
          onClick={handleClick}
          className="arrow border-2 border-zinc-100 rounded-full h-16 w-16"
        >
          <svg
            className="header_back__30UYF"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 62 62"
            style={{
              transform: "translate(0px, 0px)",
              backgroundColor: "rgba(0, 0, 0, 0)",
            }}
          >
            <g fill="white" fillRule="nonzero">
              <path d="M31 .5C14.155.5.5 14.155.5 31S14.155 61.5 31 61.5 61.5 47.845 61.5 31 47.845.5 31 .5zm0 1c16.292 0 29.5 13.208 29.5 29.5S47.292 60.5 31 60.5 1.5 47.292 1.5 31 14.708 1.5 31 1.5z" />
              <path d="M38.974 33.704c-1.733-.021-5.35-1.67-15.577-1.712 3.83.877 7.425 2.418 7.318 4.622-.043 1.113-.728 1.926-1.947 1.947-.471 0-.963-.15-1.37-.556-1.37-1.37-1.284-4.922-6.098-6.398l-.407-.107c5.221-1.37 5.2-4.986 6.505-6.462.385-.428.942-.556 1.412-.556 1.156 0 1.883.813 1.905 1.947.021 2.204-3.66 3.787-7.51 4.643 10.377-.064 14.036-1.712 15.748-1.669 1.326 0 2.375.963 2.353 2.14 0 1.24-1.005 2.16-2.332 2.16z" />
            </g>
          </svg>
        </div>
        <a
          href="#"
          onClick={handleDownload}
          className="px-4 py-2 text-lg sm:hidden font-bold text-white bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full"
          role="button"
        >
          <span>get resume</span>
        </a>
        <a
          onClick={handleDownload}
          href="#"
          className="px-5 py-3 hidden sm:block text-lg font-bold text-white bg-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 rounded-full"
          role="button"
        >
          <span className="">get my resume offline</span>
        </a>
      </header>
    </div>
  );
};
export default Header;
