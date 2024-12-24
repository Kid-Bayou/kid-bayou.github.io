import { Link } from "react-router-dom";
import githubIcon from "../../assets/icons/github.svg";
import linkedinIcon from "../../assets/icons/linkedin.svg";
import emailIcon from "../../assets/icons/email.svg";

function Footer() {
  return (
    <>
      <footer className="footer">
        <p className="footer-copyright">Copyright © 2024 kid-bayou</p>
        <div className="footer-icon-container">
          <Link to="https://github.com">
            <img src={githubIcon} alt="GitHub" className="footer-icon" />
          </Link>
          <Link to="https://linkedin.com">
            <img src={linkedinIcon} alt="LinkedIn" className="footer-icon" />
          </Link>
          <Link to="mailto:example@example.com">
            <img src={emailIcon} alt="Email" className="footer-icon" />
          </Link>
          
        </div>
      </footer>
    </>
  );
}

export default Footer;
