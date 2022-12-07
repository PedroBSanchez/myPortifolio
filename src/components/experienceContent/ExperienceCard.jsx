import React from "react";

import "./ExperienceCard.css";
const ExperienceCard = ({ image, atividades, empresa, periodo }) => {
  // os props serão src da image, map de funções na empresa e período

  return (
    <div className="card-border-experience p-3">
      <div className="row text-center ">
        <div className="col-md-6 ">
          <img className="experience-image" src={image} />
          <p className="text">{empresa}</p>
        </div>
        <div className="col-md-6 justify-content-center">
          <ul>
            {atividades.map((element) => {
              return (
                <div className="row text-left">
                  <li className="text text-functions">{element}</li>
                </div>
              );
            })}
          </ul>
        </div>
      </div>
      <hr className="line" />
      <div className="row justify-content-center">
        <div className="col-md-4">
          <p className="text mb-2">{periodo}</p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
