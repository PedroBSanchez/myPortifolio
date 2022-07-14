import React from "react";

import Application from "./Application";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="container projects-container">
      <div className="row">
        <div className="col-md-12 mt-2">
          <h1 className="projects-title text-center">Projects</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Application
            application={"clock"}
            title={"Clock"}
            technologies={["html", "css", "javascript"]}
            description={
              "Project of a functional clock that has a greater focus on CSS and JavaScript."
            }
            linkGithub={"https://github.com/PedroBSanchez/clock"}
            linkGithubSecond={"https://github.com/PedroBSanchez/clock"}
            linkAplicacao={"https://clinquant-chimera-9981c3.netlify.app/"}
          />
        </div>
        <div className="col-md-6">
          <Application
            application={"clock"}
            title={"Clock"}
            technologies={["html", "css", "javascript"]}
            description={
              "Project of a functional clock that has a greater focus on CSS and JavaScript."
            }
            linkGithub={"https://github.com/PedroBSanchez/clock"}
            linkGithubSecond={"https://github.com/PedroBSanchez/clock"}
            linkAplicacao={"https://clinquant-chimera-9981c3.netlify.app/"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
