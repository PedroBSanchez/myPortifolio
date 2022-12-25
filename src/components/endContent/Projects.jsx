import React from "react";

import NewProject from "./NewProject";

import "./Projects.css";

const Projects = () => {
  return (
    <div className="container projects-container">
      <div className="row">
        <div className="col-md-12 mt-2">
          <h1 className="projects-title text-center">
            <b> Projects</b>
          </h1>
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Clock"}
            image={"clock"}
            description={"Project to implements a simple and functional clock"}
            repositories={[
              { repo: "https://github.com/PedroBSanchez/clock", type: "Front" },
            ]}
            applicationLink={"https://clinquant-chimera-9981c3.netlify.app/"}
            icons={["html", "css", "javascript"]}
          />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Tasklist"}
            image={"tasklist"}
            description={
              "Project to implement a task list and checklist with data persistence"
            }
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/taskList_api",
                type: "Back",
              },
              {
                repo: "https://github.com/PedroBSanchez/tasklist",
                type: "Front",
              },
            ]}
            applicationLink={"https://beautiful-kangaroo-204bb5.netlify.app/"}
            icons={["nodejs", "mongodb", "react"]}
          />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Person register"}
            description={
              "Project to implement a register of people with name, CPF and date of birth - CRUD with data persistence"
            }
            image={"personRegister"}
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/cadastroPessoa",
                type: "Back/Front",
              },
            ]}
            applicationLink={"https://precious-donut-96b36b.netlify.app/"}
            icons={["nodejs", "mongodb", "react"]}
          />
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"QRCode"}
            image={"qrcode"}
            description={"Project to implement a qrcode scanner and generator"}
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/qrcode",
                type: "Front",
              },
            ]}
            applicationLink={"https://luminous-horse-2abde6.netlify.app/"}
            icons={["react"]}
          />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Stock Quoter"}
            image={"stockQuoter"}
            description={
              "Project to implement a stock price viewer with user authentication and option to save favorite stocks"
            }
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/stockQuoter",
                type: "Back",
              },
            ]}
            icons={["nodejs", "mongodb", "react"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
