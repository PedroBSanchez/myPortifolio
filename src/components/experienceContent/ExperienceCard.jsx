import React from "react";

import "./ExperienceCard.css";
const ExperienceCard = () => {
  // os props serão src da image, map de funções na empresa e período

  return (
    <div className="card-border-experience p-3">
      <div className="row text-center experience-image-func-row">
        <div className="col-md-6">
          <img
            className="experience-image"
            src="https://picsum.photos/seed/picsum/200"
          />
          <p className="text">Nome Empresa</p>
        </div>
        <div className="col-md-6">
          <ul>
            <li className="text">Software Developer</li>
            <li className="text">Software Engenireeing</li>
            <li className="text">Software Engenireeing</li>
            <li className="text">Software Engenireeing</li>
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <p className="text mb-2">2018-2022</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
