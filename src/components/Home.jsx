import dandelion from "../assets/icons/dandelion.svg"

function Home() {
  return (
    <section id="home" className="home-section">
        <img src={dandelion} className="rotating-svg" alt="Rotating Icon" />
        <h1 className="home-h1">hello, kidist here</h1>
        <p>i'm interested in just about everything that helps people find, use, and make sense of information, and in building the tools, structures, and details that make the experience easier.</p>

    </section>
  );
}

export default Home;
