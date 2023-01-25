import React from "react";
import "./Skills.css";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { BsBootstrapFill } from "react-icons/bs";
import { IoLogoJavascript } from "react-icons/io";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";

const Experience = () => {
  return (
    <section>
      <h4>My Skills</h4>

      <div className="container experience__container">
        <article className="experience__details">
          <AiOutlineHtml5 className="experience__details-icon"/>
          <h4>HTML</h4>
          <small>Experienced</small>
        </article>
        <article className="experience__details">
          <DiCss3 className="experience__details-icon"/>
          <h4>CSS</h4>
          <small>Intermediate</small>
        </article>
        <article className="experience__details">
          <BsBootstrapFill className="experience__details-icon"/>
          <h4>Bootstrap</h4>
          <small>Experienced</small>
        </article>
        <article className="experience__details">
          <IoLogoJavascript className="experience__details-icon"/>
          <h4>JavaScript</h4>
          <small>Experienced</small>
        </article>
        <article className="experience__details">
          <FaReact className="experience__details-icon"/>
          <h4>React</h4>
          <small>Experienced</small>
        </article>
        <article className="experience__details">
          <BsGithub className="experience__details-icon"/>
          <h4>GIT</h4>
          <small>Experienced</small>
        </article>
      </div>
    </section>
  );
};

export default Experience;
