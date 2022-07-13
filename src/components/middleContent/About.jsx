import React from "react";
import image from "../../assets/me2.jpg";

import "./About.css";

const About = () => {
  return (
    <>
      <div className="middle-card">
        <div className="row ">
          <div className="col-md-12">
            <p className="middle-card-title text-center">About</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img className="about-image img-fluid" src={image} />
          </div>
          <div className="col-lg-6 col-sm-12">
            <p className="about-text">
              Technology lover and eager to learn more and more to create
              systems to make our lives easier.
              <br />
              <hr />
              Main Front-End: React and React Native.
              <br />
              <hr />
              Main Back-End: NodeJs.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
