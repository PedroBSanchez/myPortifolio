import React from "react";
import HardSkills from "./HardSkills";

import "./Skills.css";
import SoftSkills from "./SoftSkills";

const Skills = () => {
  return (
    <div className="skills-container">
      <div className="row">
        <div className="col-md-6 p-5">
          <div className="row justify-content-center text-center">
            <h4 className="skills-text skills-text-title">Hard Skills</h4>
          </div>
          <div className="row">
            <div className="card-border-skills">
              <HardSkills />
            </div>
          </div>
        </div>
        <div className="col-md-6  p-5">
          <div className="row justify-content-center text-center">
            <h4 className="skills-text skills-text-title">Soft Skills</h4>
          </div>
          <div className="row">
            <div className="card-border-skills">
              <SoftSkills />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
