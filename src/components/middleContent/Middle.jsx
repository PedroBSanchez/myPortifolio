import React from "react";

import About from "./About";
import Contact from "./Contact";

import "./Middle.css";

const Middle = () => {
  return (
    <div>
      <div className="middle-about-container row">
        <div className="row text-center mt-3">
          <h2 className="middle-card-title">About</h2>
        </div>
        <div className="row mb-2">
          <About />
        </div>
      </div>
    </div>
  );
};

export default Middle;
