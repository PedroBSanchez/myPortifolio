import React from "react";

import {
  DiNodejsSmall,
  DiReact,
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiMongodb,
  DiJavascript,
  DiMsqlServer,
  DiAngularSimple,
} from "react-icons/di";

import { BiLogoGoLang } from "react-icons/bi";

import { SiDotnet } from "react-icons/si";
import { FaDocker } from "react-icons/fa";

import { BsDiscord } from "react-icons/bs";

import { SiConstruct3, SiSqlite } from "react-icons/si";

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
      {technology === "dotnet" && <SiDotnet size={iconSize} className="icon" />}
      {technology === "docker" && <FaDocker size={iconSize} className="icon" />}
      {technology === "angular" && (
        <DiAngularSimple size={iconSize} className="icon" />
      )}
      {technology === "sqlserver" && (
        <DiMsqlServer size={iconSize} className="icon" />
      )}
      {technology === "go" && <BiLogoGoLang size={iconSize} className="icon" />}
      {technology === "sqlite" && <SiSqlite size={iconSize} className="icon" />}
    </>
  );
};

export default ApplicationIcon;
