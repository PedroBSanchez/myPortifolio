import React from "react";
import { saveAs } from "file-saver";

import englishCV from "../../assets/englishCV.pdf";
import portugueseCV from "../../assets/portugueseCV.pdf";

import "./Footer.css";

const Footer = () => {
  const downloadEnglishCV = () => {
    saveAs(englishCV, "EnglishCV");
  };

  const downloadPortugueseCV = () => {
    saveAs(portugueseCV, "PortugueseCV");
  };

  return (
    <div className="row footer text-center pt-3">
      <p className="footer-text">
        Download My CV:
        <button className="footer-button" onClick={downloadEnglishCV}>
          <u> English CV.pdf</u>
        </button>
        <button className="footer-button" onClick={downloadPortugueseCV}>
          <u> Portuguese CV.pdf</u>
        </button>
      </p>
    </div>
  );
};

export default Footer;
