import React from "react";
import "./Services.css";

const Services = () => {
  return (
    <section id="services">
      <h4>Services</h4>

      <div className="container services__container">
        <article className="services__details">
          <h2>Web Development</h2>
          <p>
            Bring your online presence to the next level and ensure a fast, secure and easy to maintain website
          </p>
        </article>
        <article className="services__details">
          <h2>Web Design</h2>
          <p>
            Revamp your website with creative visual and user-friendly websites
            that are optimized for search engines
          </p>
        </article>
        <article className="services__details">
          <h2>API Intergration</h2>
          <p>
            Achieve new levels of efficiency and scalability integrating with
            third-party APIs
          </p>
        </article>
      </div>
    </section>
  );
};

export default Services;
