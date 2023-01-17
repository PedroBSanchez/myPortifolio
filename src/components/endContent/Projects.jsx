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
            projectName={"Catacombs"}
            image={"catacombs"}
            description={"2D Endless Game made with Construct2"}
            repositories={[
              {
                repo: "https://upbeat-kalam-5f930c.netlify.app/",
                type: "Front",
              },
            ]}
            applicationLink={"https://upbeat-kalam-5f930c.netlify.app/"}
            icons={["construct"]}
          />
        </div>
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
            image={"stockquoter"}
            description={
              "Project to implement a stock price viewer with user authentication and option to save favorite stocks"
            }
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/stockQuoter",
                type: "Back",
              },
              {
                repo: "https://github.com/PedroBSanchez/stockquoterui",
                type: "Front",
              },
            ]}
            icons={["nodejs", "mongodb", "react"]}
          />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Discord Bot"}
            image={"discord"}
            description={
              "Project to implements a multifunctional discord bot with commands like currency value, stock value, even or odd, rock paper scissors and others"
            }
            repositories={[
              {
                repo: "https://github.com/PedroBSanchez/mafiaboybot",
                type: "Back",
              },
            ]}
            applicationLink={
              "https://discord.com/oauth2/authorize?=&client_id=1062868174359511112&scope=bot&permissions=8"
            }
            icons={["nodejs", "discord"]}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
