import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Reveal from "./Reveal";

function About() {
  return (
    <section id="about" className="about-section" aria-labelledby="about-heading">
      <div>
        <Reveal as="h2" id="about-heading" className='about-h1' delay={100}>a little about me</Reveal>
        <Reveal as="p" delay={200}>
          I have my Bachelor’s degree in Software
          Engineering and currently pursuing my Master’s to deepen my technical
          expertise. I’m curious about emerging technologies and I enjoy
          environments where learning and innovation collide. My passion lies in
          web dev but I’m always eager to dive into new tools, frameworks, or
          paradigms.
        </Reveal>
        <Reveal
          as="a"
          delay={320}
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-link"
        >
          <DescriptionOutlinedIcon style={{ marginRight: "8px" }} />
          resume
        </Reveal>
      </div>
    </section>
  );
}

export default About;
