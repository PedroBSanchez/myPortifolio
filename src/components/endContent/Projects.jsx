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
      <div className="container">
        <div className="row mt-4 ">
          <div className="col-md-3 offset-md-1 col-sm-6">
            <Application
              application={"clock"}
              title={"Clock"}
              technologies={["html", "css", "javascript"]}
              description={
                "Project of a functional clock that has a greater focus on CSS and JavaScript."
              }
              linkGithub={"https://github.com/PedroBSanchez/clock"}
              linkAplicacao={"https://clinquant-chimera-9981c3.netlify.app/"}
            />
          </div>
          <div className="col-md-3 offset-md-1 col-sm-6">
            <Application
              application={"tasklist"}
              title={"Tasklist"}
              technologies={["nodejs", "react", "mongodb"]}
              description={
                "Project of a task list manager that allows you to create and check tasks"
              }
              linkGithub={"https://github.com/PedroBSanchez/tasklist"}
              linkGithubSecond={"https://github.com/PedroBSanchez/taskList_api"}
              linkAplicacao={"https://beautiful-kangaroo-204bb5.netlify.app/"}
            />
          </div>
          <div className="col-md-3 offset-md-1 col-sm-6 ">
            <Application
              application={"personRegister"}
              title={"Person Register"}
              technologies={["nodejs", "react", "mongodb"]}
              description={"Project of a person register system"}
              linkGithub={"https://github.com/PedroBSanchez/cadastroPessoa"}
              linkAplicacao={"https://precious-donut-96b36b.netlify.app/"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
