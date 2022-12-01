import React from "react";
import HeaderNavigation from "./HeaderNavigation";

import "./Header.css";

const Header = () => {
  return (
    <div className="row">
      <div className="image-container bg">
        <div className="col sm-12">
          <div className="row">
            <HeaderNavigation />
          </div>
          <div className="row justify-content-center">
            <div className="header-text-container">
              <h1 className="header-text">Welcome</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
