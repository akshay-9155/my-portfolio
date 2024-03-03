import React, { useEffect, useRef, useState } from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";
import Works from "./Components/Works";
import WatchMore from "./Components/WatchMore";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const navBarRef = useRef(null);
  const cursorRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  gsap.to(cursorRef.current, {
    top: position.y - 12,
    left: position.x - 12,
  });
  return (
    <div className=" overflow-x-hidden select-none font-courierNew bg-zinc-900 text-zinc-50 cursor-none">
      <div
        ref={cursorRef}
        className={`hidden sm:block fixed -top-20 h-6 w-6 bg-yellow-300 rounded-full mix-blend-difference`}
      ></div>
      <Header navBarRef={navBarRef} />
      <div className="pt-24">
        <Intro navBarRef={navBarRef} />
      </div>
      <About />
      <Skills />
      <Works />
      <WatchMore />
      <Footer />
    </div>
  );
};

export default App;
