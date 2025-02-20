import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./components/Intro";
import Career from "./components/Career";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Intro />
      <Career />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
