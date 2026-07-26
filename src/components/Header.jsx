import { useEffect, useRef, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const NAV_ITEMS = [
  { id: "home", label: "home" },
  { id: "about", label: "about" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    function closeIfOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    function closeOnEscape(event) {
      if (event.key === "Escape") setIsMenuOpen(false);
    }

    document.addEventListener("mousedown", closeIfOutside);
    document.addEventListener("touchstart", closeIfOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeIfOutside);
      document.removeEventListener("touchstart", closeIfOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <nav className="header-nav-container" ref={navRef}>
        <div className="nav-links">
          {NAV_ITEMS.map(({ id, label }) => (
            <a key={id} href={`#${id}`} className="nav-link">
              {label}
            </a>
          ))}
        </div>

        <div className="social-icons">
          <a
            href="mailto:you@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="Email"
            title="Email"
          >
            <EmailIcon className="icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="LinkedIn profile"
            title="LinkedIn profile"
          >
            <LinkedInIcon className="icon" />
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label="GitHub profile"
            title="GitHub profile"
          >
            <GitHubIcon className="icon" />
          </a>
        </div>

        <button
          type="button"
          className={`nav-toggle ${isMenuOpen ? "is-open" : ""}`}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
          <span className="nav-toggle-bar" />
        </button>

        <div
          id="mobile-nav-menu"
          className={`mobile-nav-menu ${isMenuOpen ? "is-open" : ""}`}
        >
          <div className="mobile-nav-menu-inner">
            {NAV_ITEMS.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="mobile-nav-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
