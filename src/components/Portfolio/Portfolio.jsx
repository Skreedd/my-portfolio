import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/static-job-listing.png";
import IMG2 from "../../assets/input-form.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG1,
      title: "Static Job Listing",
      github: "https://github.com/Skreedd/static-job-listing",
      demo: "https://static-job-listing.martinsfadairo.com/",
    },
    {
      id: 2,
      image: IMG2,
      title: "Input Form",
      github: "https://github.com/Skreedd",
      demo: "http://input-form.martinsfadairo.com",
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
                <a href={github} className="btn" target='_bk'>
                  Github
                </a>
                <a href={demo} className="btn-primary" target='_bk'>
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
