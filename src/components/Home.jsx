import dandelion from "../assets/icons/dandelion.svg"

function Home() {
  return (
    <section id="home" className="home-section">
        <img src={dandelion} className="rotating-svg" alt="Rotating Icon" />
        <h1 className="home-h1">hello, this is kidist</h1>
        <p>Insert whatever here. What do you even put here???</p>

    </section>
  );
}

export default Home;
