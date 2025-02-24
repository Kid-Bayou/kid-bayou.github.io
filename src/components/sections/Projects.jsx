import React from "react";
import Image from "../../assets/images/test.jpg";
import sourceCode from "../../assets/icons/sourceCode.png";
import site from "../../assets/icons/site.png";

const cardData = [
  {
    title: "This Site",
    description:
      "Why was this site built. And other extra information. To be added.",
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
];

function Projects() {
  return (
    <div className="projects-container">
      <h1>Some of my works</h1>
      <div className="card-list">
        {cardData.map((card, index) => (
          <article className="card" key={index}>
            <figure className="card-image">
              <img
                src={card.image}
                alt={card.title}
                className="projects-image"
              />
            </figure>
            <div className="card-content">
              <div className="card-header">
                <h3>{card.title}</h3>
              </div>
              <div className="card-footer">
                <h6>{card.description}</h6>
              </div>

              <div className="tech-container">
                {card.technologies.map((tech, i) => (
                  <span key={i} className="tech-bubble">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="links-container">
                <a
                  href={card.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <img src={site} className="projects-icon" />
                </a>
                <a
                  href={card.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-button"
                >
                  <img src={sourceCode} className="projects-icon" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
