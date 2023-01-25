import React from "react";
import "./Portfolio.css";
import IMG from "../../assets/portfolio1.jpg";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG,
      title: "My first portfolio",
      gihub: "http://github.com",
      demo: "http://amazon.com",
    },
  ];
  return (
    <section id="portfolio">
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn-primary">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
