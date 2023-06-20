import React from "react";

import clock from "../../../assets/clockimage.png";
import tasklist from "../../../assets/tasklist.png";
import personRegister from "../../../assets/personRegister.png";
import qrcodeImage from "../../../assets/qrcode.png";
import catacombs from "../../../assets/catacombs.png";
import stockQuoter from "../../../assets/stockquoter.png";
import discord from "../../../assets/discord.png";
import recipeGenerator from "../../../assets/recipeGenerator.png";
import inProgress from "../../../assets/progress.png";

import "./ApplicationImage.css";

const ApplicationImage = ({ applicationName }) => {
  let appImage;

  switch (applicationName) {
    case "clock":
      appImage = clock;
      break;

    case "tasklist":
      appImage = tasklist;
      break;

    case "person register":
      appImage = personRegister;
      break;

    case "qrcode":
      appImage = qrcodeImage;
      break;
    case "catacombs":
      appImage = catacombs;
      break;
    case "stock quoter":
      appImage = stockQuoter;
      break;

    case "discord bot":
      appImage = discord;
      break;

    case "recipe generator":
      appImage = recipeGenerator;
      break;

    default:
      appImage = inProgress;
      break;
  }

  return (
    <img className="project-book-image" src={appImage} alt={applicationName} />
  );
};

export default ApplicationImage;
