import React from "react";

import "./CarrouselExperience.css";
import ExperienceCard from "./ExperienceCard";

import "../../assets/mocx.jpg";

import Carousel from "react-elastic-carousel";
import { useState } from "react";
const CarrouselExperience = () => {
  const [experiencias, setExperiencias] = useState([
    {
      image: require("../../assets/mocx.jpg"),
      atividades: [
        "FullStack developer",
        "AWS server analysis and monitoring",
        "Customer service",
        "Team manager",
      ],
      empresa: "Mocx - Engineering and industrial automation",
      periodo: "Jun 2022 - At moment",
    },
  ]);

  return (
    <div className="p-2">
      <Carousel itemsToShow={1}>
        {experiencias.map((element, index) => (
          <ExperienceCard
            key={index}
            image={element?.image}
            atividades={element?.atividades}
            empresa={element?.empresa}
            periodo={element?.periodo}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarrouselExperience;
