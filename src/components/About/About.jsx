import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h3>About Me</h3>
        <p>
          I am a frontend developer with over 1 year of experience in building
          and designing user-friendly websites and web applications. Strong
          understanding of responsive design, web accessibility, and web
          performance optimization. Proven ability to work collaboratively with
          cross-functional teams and deliver projects on time and within budget.
          Passionate about creating engaging user experiences and constantly
          seeking new and innovative ways to improve the user experience.
        </p>
        <div className="about__cards">
          <article className="about__card">
            <h4>Experience</h4>
            <small>1+</small>
          </article>
          <article className="about__card">
            <h4>Clients</h4>
            <small>50+</small>
            <br />
            <small>Worldwide</small>
          </article>
          <article className="about__card">
            <h4>Projects</h4>
            <small>30+</small>
          </article>
        </div>
      </div>
    </section>
  );
};

export default About;
