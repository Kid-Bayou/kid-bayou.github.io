import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Home() {
  return (
    <section id="home">
      <div className="home-container">
        <h1>Home</h1>
        <p>Insert whatever here. What do you even put here???</p>

        <div style={{ display: "flex", gap: "20px" }}>
          <a
            href="mailto:your@email.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <EmailIcon fontSize="large" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon fontSize="large" className="social-icon" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon fontSize="large" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
