import { useState, useEffect } from "react";
import "./App.css";
import "./styles/layout.css";
import "./styles/sections.css";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="site-wrapper">
      <Header activeSection={activeSection} />
      <main className="main">
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
