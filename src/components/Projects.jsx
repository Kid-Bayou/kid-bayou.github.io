import Image from "../assets/images/test.jpg";
import Reveal from "./Reveal";
import { useGridReveal } from "../hooks/useGridReveal";
import { GitHubIcon, ExternalLinkIcon } from "./Icons";

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
  const [gridRef, revealed] = useGridReveal(cardData.length, { threshold: 0.08, step: 110 });

  return (
    <section id="projects" aria-labelledby="projects-heading">
      <div className="projects-container">
        <Reveal as="h2" id="projects-heading" className="projects-header">selected work</Reveal>
        <div className="card-list" ref={gridRef}>
          {cardData.map((card, index) => (
            <div
              className={`card-reveal ${revealed[index] ? "is-visible" : ""}`}
              key={index}
            >
              <div className="card">
                <div className="card-img-wrap">
                  <a
                    href={card.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-image-link"
                    aria-label={`View full-size screenshot for ${card.title}`}
                  >
                    <img src={card.image} alt={card.title} className="card-image" loading="lazy" />
                  </a>
                  <div className="card-overlay" aria-hidden="true"></div>
                </div>
                <div className="card-content">
                  <h3 className="card-title">{card.title}</h3>
                  <p className="card-description">{card.description}</p>
                  <div className="tech-container">
                    {card.technologies.map((tech, i) => (
                      <span key={i} className="tech-bubble">{tech}</span>
                    ))}
                  </div>
                  <div className="links-container">
                    <a
                      href={card.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      aria-label={`View live site for ${card.title}`}
                      title={`View live site for ${card.title}`}
                    >
                      <ExternalLinkIcon className="projects-icon" />
                    </a>
                    <a
                      href={card.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="link-button"
                      aria-label={`View source code for ${card.title}`}
                      title={`View source code for ${card.title}`}
                    >
                      <GitHubIcon className="projects-icon" />
                    </a>
                  </div>
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
