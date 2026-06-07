import PropTypes from "prop-types";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

function Header({ activeSection }) {
  return (
    <header className="header">
      <nav className="header-nav-container">
        <div className="nav-links">
          {[
            { id: "home", label: "home" },
            { id: "about", label: "about" },
            { id: "projects", label: "projects" },
            { id: "contact", label: "contact" },
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className={`nav-link ${activeSection === id ? "active-link" : ""}`}
            >
              {label}
            </a>
          ))}
        </div>

        <div className="social-icons">
          <a href="mailto:you@example.com" target="_blank" rel="noopener noreferrer" className="icon-link">
            <EmailIcon className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="icon-link">
            <LinkedInIcon className="icon" />
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="icon-link">
            <GitHubIcon className="icon" />
          </a>
        </div>
      </nav>
    </header>
  );
}

Header.propTypes = {
  activeSection: PropTypes.string,
};

export default Header;
