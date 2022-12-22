import React from "react";

import ApplicationIcon from "./applicationComponents/ApplicationIcon";
import ApplicationImage from "./applicationComponents/ApplicationImage";

import tasklist from "../../assets/tasklist.png";
import personRegister from "../../assets/personRegister.png";
import qrcodeImage from "../../assets/qrcode.png";

import clock from "../../assets/clockimage.png";

import "./NewProject.css";

const NewProject = ({
  projectName,
  description,
  icons,
  repositories,
  applicationLink,
  image,
}) => {
  //Definir imagem do projeto
  let appImage;
  switch (image) {
    case "clock":
      appImage = clock;
      break;

    case "tasklist":
      appImage = tasklist;
      break;

    case "personRegister":
      appImage = personRegister;
      break;

    case "qrcode":
      appImage = qrcodeImage;
      break;

    default:
      appImage = null;
      break;
  }

  return (
    <div className="project-card p-2">
      <img className="application-image-img" src={appImage} />

      <div className="row mt-2 text-center">
        <p className="application-text application-text-title">{projectName}</p>
      </div>
    </div>
  );
};

export default NewProject;
