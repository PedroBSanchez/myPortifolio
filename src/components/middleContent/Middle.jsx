import React from "react";

import About from "./About";
import Contact from "./Contact";

import "./Middle.css";
import NewAbout from "./NewAbout";

const Middle = () => {
  return (
    <div>
      <div className="middle-about-container row">
        <div className="row text-center mt-3">
          <h2 className="middle-card-title">About</h2>
        </div>
      </div>
      <div className="middle-about-container p-3">
        <NewAbout />
      </div>
    </div>
  );
};

export default Middle;
