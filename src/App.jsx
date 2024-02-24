import React, { useRef } from "react";
import Header from "./Components/Header";
import Intro from "./Components/Intro";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Footer from "./Components/Footer";

const App = () => {
  const navBarRef = useRef(null);
  return (
    <div className=" overflow-x-hidden select-none font-courierNew bg-zinc-950 text-zinc-50">
      <Header navBarRef={navBarRef} />
      <div className="pt-24">
        <Intro navBarRef={navBarRef} />
      </div>
      <About/>
      <Skills/>
      <Footer/>
    </div>
  );
};

export default App;
