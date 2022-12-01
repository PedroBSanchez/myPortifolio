import React from "react";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import {
  FaNodeJs,
  FaPhp,
  FaLaravel,
  FaAws,
  FaReact,
  FaDocker,
} from "react-icons/fa";
import { SiExpress, SiRedux, SiJquery } from "react-icons/si";
import { DiMsqlServer, DiMongodb, DiPostgresql } from "react-icons/di";

import "./HardSkills.css";

const HardSkills = () => {
  return (
    <div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-3">
          <FaNodeJs size={35} color="#222" />
          <p className="hard-skill-text">NodeJs</p>
        </div>
        <div className="col-md-3">
          <SiExpress size={35} color="#222" />
          <p className="hard-skill-text">Express</p>
        </div>
        <div className="col-md-3">
          <FaPhp size={35} color="#222" />
          <p className="hard-skill-text">PHP</p>
        </div>
        <div className="col-md-3">
          <FaLaravel size={35} color="#222" />
          <p className="hard-skill-text">Laravel</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-3">
          <FaReact size={35} color="#222" />
          <p className="hard-skill-text">React</p>
        </div>
        <div className="col-md-3">
          <FaReact size={35} color="#222" />
          <p className="hard-skill-text">React-Native</p>
        </div>
        <div className="col-md-3">
          <SiRedux size={35} color="#222" />
          <p className="hard-skill-text">Redux</p>
        </div>
        <div className="col-md-3">
          <SiJquery size={35} color="#222" />
          <p className="hard-skill-text">jQuery</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <DiMongodb size={35} color="#222" />
          <p className="hard-skill-text">MongoDB</p>
        </div>
        <div className="col-md-4">
          <DiMsqlServer size={35} color="#222" />
          <p className="hard-skill-text">SQL Server</p>
        </div>
        <div className="col-md-4">
          <DiPostgresql size={35} color="#222" />
          <p className="hard-skill-text">PostgreSQL</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <FaAws size={35} color="#222" />
          <p className="hard-skill-text">AWS</p>
        </div>
        <div className="col-md-4">
          <FaDocker size={35} color="#222" />
          <p className="hard-skill-text">Docker</p>
        </div>
        <div className="col-md-4">
          <BsGithub size={35} color="#222" />
          <p className="hard-skill-text">GitHub</p>
        </div>
      </div>
    </div>
  );
};

export default HardSkills;
