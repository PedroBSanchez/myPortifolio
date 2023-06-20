import React, { useState } from "react";

import ApplicationIcon from "./applicationComponents/ApplicationIcon";

import "./ProjectBook.css";

import catacombs from "../../assets/catacombs.png";
import { BsGithub } from "react-icons/bs";
import ApplicationImage from "./applicationComponents/ApplicationImage";

const ProjectBook = (props) => {
  const openPage = (pageLink) => {
    if (pageLink) window.open(pageLink, "_blank");
  };
  return (
    <>
      <div class="book">
        <div className="">
          <div className="row">
            <div className="offset-2 col">
              <li>
                <p className="mt-2 project-book-description">
                  {props.description}
                </p>
              </li>
            </div>
          </div>
          <div className="row mt-2">
            <div className="offset-2"></div>
            {props.techs.map((tech, index) => {
              return (
                <div class="col-2">
                  <ApplicationIcon technology={tech} iconSize={35} />
                </div>
              );
            })}
          </div>
          <div className="row text-center justify-content-start mt-3">
            {props.repositories.map((repo) => {
              return (
                <div className="">
                  <button
                    class="btn btn-warning btn-sm"
                    onClick={() => openPage(repo.link)}
                  >
                    <BsGithub />
                    <span className="badge badge-light text-dark">
                      {repo.type}
                    </span>
                  </button>
                </div>
              );
            })}
          </div>
          <div className="row text-center justify-content-center mt-2">
            <div className="col">
              <button
                class="btn btn-success btn-sm"
                onClick={() => openPage(props.applicationLink)}
              >
                Application
              </button>
            </div>
          </div>
        </div>
        <div class="cover">
          <div className="row text-center justify-content-center mt-4">
            <div className="col">
              <ApplicationImage applicationName={props.title.toLowerCase()} />
            </div>
          </div>
          <div className="row text-center justify-content-center mt-3">
            <div className="col">
              <h4 class="project-book-title">{props.title}</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectBook;
