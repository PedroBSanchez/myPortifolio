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
          <NewProject projectName={"Clock"} image={"clock"} />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject projectName={"Tasklist"} image={"tasklist"} />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject
            projectName={"Person register"}
            image={"personRegister"}
          />
        </div>
      </div>
      <div className="row justify-content-evenly">
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject projectName={"QRCode"} image={"qrcode"} />
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject projectName={"Stock Quoter"} image={"stockQuoter"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
