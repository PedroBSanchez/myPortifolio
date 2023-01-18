import React from "react";
import image from "../../assets/me2.jpg";
import InfoCard from "./InfoCard";

import "./About.css";
import "../../App.css";

const About = () => {
  const handleClick = (link) => {
    if (link) window.open(link);
  };

  return (
    <>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row">
            <div className="col-md-6 text-center pt-4">
              <img className="about-image" src={image} alt={"Me"} />
            </div>
            <div className="col-md-6">
              <div className="row m-4">
                <ul>
                  <li className="about-text text-personal">
                    Pedro Bernardo Sanchez
                  </li>
                  <li className="about-text text-personal mt-2">
                    21 Years old
                  </li>
                  <li className="about-text text-personal mt-2">Brazilian</li>
                  <li className="about-text text-personal mt-2">
                    Bachelors in Software Engineering
                  </li>
                  <li className="about-text text-personal mt-2">
                    FullStack Developer
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            <div className="col-2 p-1">
              <h4>
                <span
                  class="badge bg-primary card-badge"
                  onClick={() => {
                    handleClick("https://github.com/PedroBSanchez");
                  }}
                >
                  GitHub
                </span>
              </h4>
            </div>
            <div className="col-2 p-1">
              <h4>
                <span
                  class="badge bg-primary card-badge"
                  onClick={() => {
                    handleClick(
                      "https://www.linkedin.com/in/pedro-sanchez-b884831b2/"
                    );
                  }}
                >
                  Linkedin
                </span>
              </h4>
            </div>
            <div className="col-2 p-1">
              <h4>
                <span
                  class="badge bg-primary card-badge"
                  onClick={() => {
                    handleClick("https://utapy.link/pedrobsanchez");
                  }}
                >
                  Email
                </span>
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center p-4">
              <ul>
                <li className="about-text text-objective">
                  I've been studying technology since I was 15 years old and I'm
                  passionate about the subject. I want to learn more and more to
                  create systems that make our lives easier
                </li>
                <hr className="line" />
                <li className="about-text text-objective">
                  I am fascinated with making work easier using technology, I
                  love automating routines.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
