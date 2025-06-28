import Image from "../assets/images/test.jpg";
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import GitHubIcon from '@mui/icons-material/GitHub';

const cardData = [
  {
    title: "This Site",
    description:
      "Why was this site built. And other extra information. To be added. What would happen if I added more and more, huh? Yup add and add. Just like that. Okay then. Is this enough? Yep, I think so.",
    image: Image,
    technologies: ["HTML", "CSS", "JavaScript"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Another Project",
    description: "Details about another project can go here. The only other difference",
    image: Image,
    technologies: ["React", "Tailwind", "Node.js"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
    technologies: ["Vue", "Firebase", "SASS"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
    technologies: ["Django", "Python", "PostgreSQL"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
    technologies: ["Angular", "TypeScript", "MongoDB"],
    liveLink: "#",
    sourceCode: "#",
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
    technologies: ["Angular", "TypeScript", "MongoDB"],
    liveLink: "#",
    sourceCode: "#",
  },
];

function Projects() {
  return (
    <section id="projects">
      <div className="projects-container">
        <h1 className="projects-header">some of my works</h1>
        <div className="card-list">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <a href={card.image} target="_blank" rel="noopener noreferrer">
                <img src={card.image} alt={card.title} className="card-image" />
              </a>
              <div className="card-content">
                <h3 className="card-title">{card.title}</h3>
                
                <p className="card-description">{card.description}</p>
                <div className="tech-container">
                  {card.technologies.map((tech, i) => (
                    <span key={i} className="tech-bubble">{tech}</span>
                  ))}
                </div>
                <div className="links-container">
                  <a href={card.liveLink} target="_blank" rel="noopener noreferrer" className="link-button">
                    <OpenInNewIcon className="projects-icon" />
                  </a>
                  <a href={card.sourceCode} target="_blank" rel="noopener noreferrer" className="link-button">
                    <GitHubIcon className="projects-icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
