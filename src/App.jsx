import { useEffect } from "react";
import Lenis from "lenis";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DandelionScene from "./components/DandelionScene";
import StalksDecoration from "./components/StalksDecoration";

import "./App.css";
import "./styles/layout.css";
import "./styles/sections.css";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ wrapper: document.body });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <div className="site-wrapper">
          <DandelionScene />
          <StalksDecoration />
        <div className="content-wrapper">
          <Header />
          <main>
            <Home />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
