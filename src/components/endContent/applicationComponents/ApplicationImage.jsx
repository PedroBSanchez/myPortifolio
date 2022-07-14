import React from "react";

import clock from "../../../assets/clockimage.png";
import tasklist from "../../../assets/tasklist.png";

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

    default:
      appImage = null;
      break;
  }

  return (
    <img
      className="application-image-img"
      src={appImage}
      alt={applicationName}
    />
  );
};

export default ApplicationImage;
