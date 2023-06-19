import React from "react";

import { GiTeamIdea } from "react-icons/gi";
import { BsMegaphoneFill } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { FaUserTie } from "react-icons/fa";
import { MdPublishedWithChanges, MdAccessTimeFilled } from "react-icons/md";
import { TiLightbulb } from "react-icons/ti";
import { RiCustomerService2Fill } from "react-icons/ri";

import "./SoftSkills.css";

const SoftSkills = () => {
  return (
    <div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <GiTeamIdea size={35} color={"white"} />
          <p className="soft-skill-text">Teamwork</p>
        </div>
        <div className="col-md-4">
          <BsMegaphoneFill size={35} color={"white"} />
          <p className="soft-skill-text">Communication</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <FaUserTie size={35} color={"white"} />
          <p className="soft-skill-text">Leadership</p>
        </div>
        <div className="col-md-4">
          <MdPublishedWithChanges size={35} color={"white"} />
          <p className="soft-skill-text">Adaptability</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <MdAccessTimeFilled size={35} color={"white"} />
          <p className="soft-skill-text">Time management</p>
        </div>
        <div className="col-md-4">
          <CgNotes size={35} color={"white"} />
          <p className="soft-skill-text">Organizational</p>
        </div>
      </div>
      <div className="row p-3 text-center justify-content-center">
        <div className="col-md-4">
          <TiLightbulb size={35} color={"white"} />
          <p className="soft-skill-text">Creativity</p>
        </div>
        <div className="col-md-4">
          <RiCustomerService2Fill size={35} color={"white"} />
          <p className="soft-skill-text">Customer Service</p>
        </div>
      </div>
    </div>
  );
};

export default SoftSkills;
