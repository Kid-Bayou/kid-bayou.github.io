import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section">
      <div>
        <Reveal as="h2" className='about-h1'>a little about me</Reveal>
        <p>
          I have my Bachelor’s degree in Software
          Engineering and currently pursuing my Master’s to deepen my technical
          expertise. I’m curious about emerging technologies and I enjoy
          environments where learning and innovation collide. My passion lies in
          web dev but I’m always eager to dive into new tools, frameworks, or
          paradigms.
        </p>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <DescriptionOutlinedIcon style={{ marginRight: "8px" }} />
          Resume
        </a>
      </div>
    </section>
  );
}

export default About;
