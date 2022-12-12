import React from "react";
import image from "../../assets/me2.jpg";
import InfoCard from "./InfoCard";

import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row">
            <div className="col-md-6 text-center p-1">
              <img className="about-image img-fluid" src={image} alt={"Me"} />
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
                    Software Engineer
                  </li>
                  <li className="about-text text-personal mt-2">
                    FullStack Developer
                  </li>
                </ul>
              </div>
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
                  Technology lover and eager to learn more and more to create
                  systems to make our lives easier.
                </li>
                <hr className="line" />
                <li className="about-text text-objective">
                  I am fascinated with making work easier using technology, I
                  love automating routines.
                </li>
              </ul>
            </div>
          </div>

          <div className="row text-center justify-content-center align-items-center">
            <div className="col-md-3">
              <InfoCard
                iconType={"github"}
                username={"/PedroBSanchez"}
                link={"https://github.com/PedroBSanchez"}
              />
            </div>
            <div className="col-md-3">
              <InfoCard
                iconType={"linkedin"}
                username={"/pedro-sanchez"}
                link={"https://www.linkedin.com/in/pedro-sanchez-b884831b2/"}
              />
            </div>
            <div className="col-md-3">
              <InfoCard
                iconType={"email"}
                username={"contato.pedrosanchez@gmail.com"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
