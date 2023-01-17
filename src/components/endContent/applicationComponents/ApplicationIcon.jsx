import React from "react";

import {
  DiNodejsSmall,
  DiReact,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMongodb,
  DiJavascript,
} from "react-icons/di";

import { BsDiscord } from "react-icons/bs";

import { SiConstruct3 } from "react-icons/si";

import "./ApplicationIcon.css";

const ApplicationIcon = ({ technology, iconSize }) => {
  return (
    <>
      {technology === "nodejs" && (
        <DiNodejsSmall size={iconSize} className="icon" />
      )}
      {technology === "react" && <DiReact size={iconSize} className="icon" />}
      {technology === "html" && <DiHtml5 size={iconSize} className="icon" />}
      {technology === "css" && <DiCss3 size={iconSize} className="icon" />}
      {technology === "javascript" && technology && (
        <DiJavascript size={iconSize} className="icon" />
      )}
      {technology === "mongodb" && (
        <DiMongodb size={iconSize} className="icon" />
      )}
      {technology === "discord" && (
        <BsDiscord size={iconSize} className="icon" />
      )}
      {technology === "construct" && (
        <SiConstruct3 size={iconSize} className="icon" />
      )}
    </>
  );
};

export default ApplicationIcon;
