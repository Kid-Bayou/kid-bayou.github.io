import linkedInLogo from "../../assets/icons/linkedin.svg";
import emailLogo from "../../assets/icons/email.svg";
import gitHubLogo from "../../assets/icons/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">Copyright © 2024 kid-bayou</p>
      <div className="footer-icon-container">
        <a href="mailto:example@example.com">
          <img src={emailLogo} alt="Email" className="footer-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src={linkedInLogo} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src={gitHubLogo} alt="GitHub" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
