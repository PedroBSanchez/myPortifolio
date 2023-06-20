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
      periodo: "Jun 2022 - Jun 2023",
    },
    {
      image: require("../../assets/pma.jpg"),
      atividades: [
        "IT infrastructure",
        "Computer maintenance",
        "Customer service",
        "Support for internal protocol system",
      ],
      empresa: "Apucarana City Hall",
      periodo: "Aug 2021 - Jun 2022",
    },
    {
      image: require("../../assets/ams.png"),
      atividades: [
        "IT infrastructure",
        "Computer maintenance",
        "Customer service",
        "Support for internal public health system (IDS)",
      ],
      empresa: "Public Health System of Apucarana",
      periodo: "Aug 2021 - Jun 2022",
    },
    {
      image: require("../../assets/telesul.jpg"),
      atividades: [
        "Network infraestructure",
        "Mikrotik set up",
        "Network monitoring",
      ],
      empresa: "Telesul Internet",
      periodo: "Jan 2021 - Aug 2021",
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
