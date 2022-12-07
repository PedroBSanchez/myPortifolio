import React, { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";
import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";

import "./InfoCard.css";

const InfoCard = ({ iconType, username, link }) => {
  const Tilt = (props) => {
    const { options, ...rest } = props;
    const tilt = useRef(null);

    useEffect(() => {
      VanillaTilt.init(tilt.current, options);
    }, [options]);

    return <div ref={tilt} {...rest} />;
  };

  const options = {
    scale: 1.2,
    speed: 1000,
    max: 30,
  };

  const handleClick = () => {
    if (link) window.open(link);
  };

  return (
    <Tilt className="card-contact-card" options={options} onClick={handleClick}>
      <div className="mt-3 p-2">
        {iconType === "github" && <BsGithub size={45} onClick={handleClick} />}
        {iconType === "linkedin" && (
          <BsLinkedin size={45} onClick={handleClick} />
        )}
        {iconType === "email" && (
          <BsFillEnvelopeFill size={45} onClick={handleClick} />
        )}
        {username !== "contato.pedrosanchez@gmail.com" && (
          <h1 className="card-contact-text">{username}</h1>
        )}

        {username == "contato.pedrosanchez@gmail.com" && (
          <h1 className="card-contact-text card-contact-email-text">
            contato.pedrosanchez <br /> @gmail.com
          </h1>
        )}
      </div>
    </Tilt>
  );
};

export default InfoCard;
