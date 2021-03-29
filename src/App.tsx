import React from "react";
import "./App.css";
import { About } from "./components/About";
import { ArrowUp } from "./components/ArrowUp";
import { Contact } from "./components/Contact";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <ArrowUp />
    </div>
  );
}

export default App;
