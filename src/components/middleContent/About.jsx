import React from "react";
import image from "../../assets/me2.jpg";

import "./About.css";
import "../../App.css";

const About = () => {
  return (
    <>
      <div className="col-md-6 p-5">
        <div className="card-border-about">
          <div className="row justify-content-center">
            <div className="col-md-8 text-center p-2">
              <img className="about-image img-fluid" src={image} alt={"Me"} />
            </div>
            <div className="col-md-4">
              <p className="about-text">Formando em taltala</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <p className="about-text">
          Technology lover and eager to learn more and more to create systems to
          make our lives easier.
        </p>
      </div>
    </>
  );
};

export default About;
