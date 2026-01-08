import React from "react";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Experience from "./Experience";

export default function Main() {
  return (
    <main id="main">
      <Hero />
      <About />
      <Work />
      <Skills />
      <Experience />
    </main>
  );
}
