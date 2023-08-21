import React from "react";

import NewProject from "./NewProject";
import NewProjectCard from "./NewProjectCard";
import ProjectBook from "./ProjectBook";

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
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Catacombs"}
            description={"2D Endless Game made with Construct2."}
            techs={["nodejs", "construct"]}
            repositories={[]}
            applicationLink={"https://upbeat-kalam-5f930c.netlify.app/"}
            application={true}
          />
        </div>
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Clock"}
            description={"Project to implements a simple and functional clock."}
            techs={["nodejs", "html", "css", "javascript"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/clock",
                type: "Front-end",
              },
            ]}
            applicationLink={"https://clinquant-chimera-9981c3.netlify.app/"}
            application={true}
          />
        </div>
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Tasklist"}
            description={
              "Project to implement a task list and checklist with data persistence."
            }
            techs={["nodejs", "nodejs", "mongodb", "react"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/taskList_api",
                type: "Back-end",
              },
              {
                link: "https://github.com/PedroBSanchez/tasklist",
                type: "Front-end",
              },
            ]}
            applicationLink={"https://beautiful-kangaroo-204bb5.netlify.app/"}
            application={false}
          />
        </div>
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Person register"}
            description={"Project to implement a CRUD of people."}
            techs={["nodejs", "nodejs", "mongodb", "react"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/cadastroPessoa",
                type: "Back/Front",
              },
            ]}
            applicationLink={"https://precious-donut-96b36b.netlify.app/"}
            application={false}
          />
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"QRCode"}
            description={"Project to implement a qrcode scanner and generator."}
            techs={["nodejs", "react"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/qrcode",
                type: "Repo",
              },
            ]}
            applicationLink={"https://luminous-horse-2abde6.netlify.app/"}
            application={true}
          />
        </div>
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Stock Quoter"}
            description={
              "Project to implement a stock price viewer with user authentication and option to save favorite stocks."
            }
            techs={["nodejs", "nodejs", "react", "mongodb"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/stockQuoter",
                type: "Repo",
              },
            ]}
            applicationLink={"https://deft-florentine-5c99e7.netlify.app/"}
            application={false}
          />
        </div>
        <div className="col col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Discord Bot"}
            description={"Project to implements a multifunctional discord bot."}
            techs={["nodejs", "nodejs"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/mafiaboybot",
                type: "Back-end",
              },
            ]}
            applicationLink={
              "https://discord.com/oauth2/authorize?=&client_id=1062868174359511112&scope=bot&permissions=8"
            }
            application={false}
          />
        </div>
        <div className="col-sm-6 col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Recipe Generator"}
            description={
              "Project to implements recipe generator to cook any food."
            }
            techs={["nodejs", "react"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/recipegenerator",
                type: "Repo",
              },
            ]}
            applicationLink={
              "https://pedrobsanchez-recipegenerator.netlify.app/"
            }
            application={false}
          />
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-sm-6 col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"SiteUp"}
            description={
              "Siteup is a platform for saving website URLs and checking if they are functioning normally."
            }
            techs={["nodejs", "nodejs", "react", "mongodb", "docker"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/siteup_ui",
                type: "Repo",
              },
            ]}
            application={false}
          />
        </div>
        <div className="col-sm-6 col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"API DDD"}
            description={
              "APIDDD is a CRUD application designed to apply and understand architectural concepts using the .NET technology."
            }
            techs={["nodejs", "dotnet", "angular", "sqlserver", "docker"]}
            repositories={[
              {
                link: "https://github.com/PedroBSanchez/API_DDD",
                type: "Repo",
              },
            ]}
            applicationLink={""}
            application={false}
          />
        </div>
        <div className="col-sm-6 col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"Delivzen"}
            description={
              "Doof is a platform for snack bar/restaurant owners to manage their menu and orders. Additionally, the platform provides a space for users to place orders."
            }
            techs={["nodejs", "nodejs", "react", "mongodb", "docker"]}
            repositories={[
              { link: "https://github.com/PedroBSanchez/doof", type: "Repo" },
            ]}
            applicationLink={""}
            application={false}
          />
        </div>
        <div className="col-sm-6 col-lg-2 col-md-4 m-3">
          <ProjectBook
            title={"GoJobs"}
            description={"A Golang API for job opportunity management."}
            techs={["nodejs", "go", "sqlite"]}
            repositories={[
              { link: "https://github.com/PedroBSanchez/gojobs", type: "Repo" },
            ]}
            application={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
