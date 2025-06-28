import DescriptionIcon from '@mui/icons-material/Description';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';

function About() {
  return (
    <section id="about" className="about-section">
      <div>
        <h1 className='about-h1'>a little about me</h1>
        <p>
          Hey there, I’m Kidist. I have my Bachelor’s degree in Software
          Engineering and currently pursuing my Master’s to deepen my technical
          expertise. I’m curious about emerging technologies and I enjoy
          environments where learning and innovation collide. My passion lies in
          web dev but I’m always eager to dive into new tools, frameworks, or
          paradigms. When I’m not coding or studying, I enjoy reading and
          watching movies.
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
