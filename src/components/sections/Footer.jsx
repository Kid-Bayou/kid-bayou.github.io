function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">Copyright © 2024 kid-bayou</p>
      <div className="footer-icon-container">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/github.svg" alt="GitHub" className="footer-icon" />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/icons/linkedin.svg" alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="mailto:example@example.com">
          <img src="/assets/icons/email.svg" alt="Email" className="footer-icon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
