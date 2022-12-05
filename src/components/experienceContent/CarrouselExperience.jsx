import React from "react";

import "./CarrouselExperience.css";
import ExperienceCard from "./ExperienceCard";

import Carousel from "react-elastic-carousel";

const CarrouselExperience = () => {
  return (
    <div className="rec-carousel-item">
      <Carousel itemsToShow={1}>
        <p>1123124</p>
        <p>2</p>
        <p>3</p>
        <p>4</p>
        <p>5</p>
        <p>6</p>
      </Carousel>
    </div>
  );
};

export default CarrouselExperience;
