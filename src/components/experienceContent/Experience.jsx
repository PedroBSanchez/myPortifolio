import React from "react";
import CarrouselExperience from "./CarrouselExperience";

import "./Experience.css";

const Experience = () => {
  return (
    <div className="experience-container">
      <div className="row text-center justify-content-center">
        <div className="col-md-12">
          <h1 className="experience-text experience-text-title mt-3">
            Professional Experience
          </h1>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-12">
          <CarrouselExperience />
        </div>
      </div>
    </div>
  );
};

export default Experience;
