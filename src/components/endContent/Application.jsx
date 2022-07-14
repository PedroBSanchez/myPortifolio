import React, { useState } from "react";

import ApplicationIcon from "./applicationComponents/ApplicationIcon";
import ApplicationImage from "./applicationComponents/ApplicationImage";

import "./Application.css";

const Application = ({
  application,
  title,
  technologies,
  description,
  linkAplicacao,
  linkGithub,
  linkGithubSecond,
}) => {
  const [onMouseOver, setOnMouseOver] = useState("false");

  return (
    <div
      className="application-card"
      onMouseOver={() => setOnMouseOver(true)}
      onMouseOut={() => setOnMouseOver(false)}
    >
      <div className="application-image-description">
        {!onMouseOver && (
          <div className="row">
            <div className="col-md-12">
              <ApplicationImage applicationName={application} />
            </div>
          </div>
        )}
        {onMouseOver && (
          <div className="row">
            <div className="col-md-12">
              <p className="appication-text application-description text-center">
                {description}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className="application-title-links">
        {!onMouseOver && (
          <div className="row">
            <div className="col-md-12">
              <h1 className="application-text application-title">{title}</h1>
            </div>
          </div>
        )}

        {onMouseOver && linkGithub && (
          <>
            <div className="row">
              <div className="col-md-12">
                <a
                  className="application-text application-link"
                  href={linkGithub}
                >
                  {`Front-end: ${linkGithub}`}
                </a>
                <br />
              </div>
            </div>
          </>
        )}
        {onMouseOver && linkGithubSecond && (
          <div className="row">
            <div className="col-md-12">
              <a
                className="application-text application-link"
                href={linkGithubSecond}
              >
                {`Back-end: ${linkGithubSecond}`}
              </a>
            </div>
          </div>
        )}

        {onMouseOver && linkAplicacao && (
          <a className="application-text application-link" href={linkAplicacao}>
            Application: <br />
            {linkAplicacao}
            <hr className="hr-color" />
          </a>
        )}
      </div>
      <div className="application-technologies">
        {!onMouseOver && (
          <>
            {technologies.map((tech) => (
              <ApplicationIcon technology={tech} iconSize={50} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Application;
