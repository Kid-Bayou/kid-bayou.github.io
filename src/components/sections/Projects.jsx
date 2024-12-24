import React from "react";
import Image from "../../assets/images/tempweb.jpg";

const cardData = [
  {
    title: "This Site",
    description: "Why was this site built. And other extra information. To be added.",
    image: Image,
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
  },
  {
    title: "Another Project",
    description: "Details about another project can go here.",
    image: Image,
  },
];

function Projects() {
  return (
    <>
    <div className="projects-container">
    <h1>Some of my works</h1>
      <div className="card-list">
      {cardData.map((card, index) => (
        <article className="card" key={index}>
          <figure className="card-image">
            <img src={card.image} alt={card.title} className="projects-image" />
          </figure>
          <div className="card-header">
            <h3>{card.title}</h3>
          </div>
          <div className="card-footer">
            <h6>{card.description}</h6>
          </div>
        </article>
      ))}
    </div>
    </div>
      
    </>
  );
}

export default Projects;
