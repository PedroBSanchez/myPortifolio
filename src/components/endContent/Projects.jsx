import React from "react";

import Application from "./Application";
import Footer from "./Footer";
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
          {/* <div style={{ backgroundColor: "black" }}>teste</div> */}
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject projectName={"Clock"} image={"clock"} />
          {/* <div style={{ backgroundColor: "black" }}>teste</div> */}
        </div>
        <div className="col-lg-2 col-md-4 m-3">
          <NewProject projectName={"Clock"} image={"clock"} />
          {/* <div style={{ backgroundColor: "black" }}>teste</div> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
