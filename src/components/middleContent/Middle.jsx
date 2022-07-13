import React from "react";

import About from "./About";
import Contact from "./Contact";

import "./Middle.css";

const Middle = () => {
  return (
    <div className="row middle-container">
      <div className="col-md-6 about-container">
        <About />
      </div>
      <div className="col-md-6 contact-container">
        <Contact />
      </div>
    </div>
  );
};

export default Middle;
