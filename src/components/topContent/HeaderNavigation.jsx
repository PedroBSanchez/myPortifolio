import React from "react";

import "./HeaderNavigation.css";

const HeaderNavigation = () => {
  return (
    <ul className="nav justify-content-center">
      <div className="navigation-background ">
        <div className="col sm-3">
          <li class="nav-item">
            <a href="#about" className="navigation-button ">
              About
            </a>
          </li>
        </div>
        <div className="col sm-3">
          <li class="nav-item">
            <a href="#skills" className="navigation-button">
              Skills
            </a>
          </li>
        </div>
        <div className="col sm-3">
          <li class="nav-item">
            <a href="#experience" className="navigation-button">
              Experience
            </a>
          </li>
        </div>
        <div className="col sm-3">
          <li class="nav-item">
            <a href="#projects" className="navigation-button ">
              Projects
            </a>
          </li>
        </div>
      </div>
    </ul>
  );
};

export default HeaderNavigation;
