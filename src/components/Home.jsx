import dandelion from "../assets/icons/dandelion.svg"

function Home() {
  return (
    <section id="home" className="home-section" aria-labelledby="home-heading">
      <div className="hero-icon-wrap">
        <img src={dandelion} className="rotating-svg" alt="" />
      </div>
      <h1 id="home-heading" className="home-h1">
        <span className="hero-word">hello,</span> <span className="hero-word">kidist</span> <span className="hero-word">here</span>
      </h1>
      <p className="hero-paragraph">i’m interested in just about everything that helps people find, use, and make sense of information, and in building the tools, structures, and details that make the experience easier.</p>
    </section>
  );
}

export default Home;
