import { useState, useEffect } from "react";
import "./App.css";
import "./styles/layout.css";
import "./styles/sections.css";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/sections/Footer";
import Header from "./components/sections/Header";

function App() {
  return (
    <div className="site-wrapper">
      <Header />
      <main>
        <Home />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
