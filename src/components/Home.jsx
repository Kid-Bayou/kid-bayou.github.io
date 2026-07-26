import dandelion from "../assets/icons/dandelion.svg"
import Reveal from "./Reveal";

function Home() {
  return (
    <section id="home" className="home-section">
        <Reveal className="reveal-fade">
          <img src={dandelion} className="rotating-svg" alt="Dandelion" />
        </Reveal>
        <Reveal as="h1" className="home-h1">hello, kidist here</Reveal>
        <p>i’m interested in just about everything that helps people find, use, and make sense of information, and in building the tools, structures, and details that make the experience easier.</p>

    </section>
  );
}

export default Home;
