import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copyright">Copyright © 2024 kid-bayou</p>
      <div className="footer-icon-container">
      <div style={{ display: 'flex', gap: '20px' }}>
      <a href="mailto:your@email.com" target="_blank" rel="noopener noreferrer">
        <EmailIcon fontSize="large" />
      </a>
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
        <LinkedInIcon fontSize="large" />
      </a>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
        <GitHubIcon fontSize="large" />
      </a>
    </div>
      </div>
    </footer>
  );
}

export default Footer;
