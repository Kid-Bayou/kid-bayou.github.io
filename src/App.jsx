import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import DandelionScene from "./components/DandelionScene";

import "./App.css";
import "./styles/layout.css";
import "./styles/sections.css";

function App() {
  return (
    <>
      <div className="site-wrapper">
          <DandelionScene />
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
