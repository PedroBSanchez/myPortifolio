import React from "react";

import { BsGithub, BsLinkedin, BsFillEnvelopeFill } from "react-icons/bs";
import image from "../../assets/me2.jpg";
import "./NewAbout.css";

const NewAbout = () => {
  const handleClick = (link) => {
    if (link) window.open(link);
  };
  return (
    <>
      <div className="row text-center justify-content-center">
        <div className="col-10 border-neon p-3">
          <div className="row p-2">
            <div className="col-md-2">
              <img className="about-image" src={image} alt={"Me"} />
            </div>
            <div className="col-md-9">
              <ul>
                <li className="about-text text-objective">
                  Allow me to introduce myself. I'm Pedro Bernardo Sanchez, a
                  21-year-old FullStack Developer with a profound love for
                  technology. Ever since I was 15, I've been immersed in
                  studying the fascinating world of technology, constantly
                  seeking to learn more and improve my skills. My ultimate goal
                  is to develop systems that make our lives easier, constantly
                  pushing the boundaries of what's possible. I find immense joy
                  in automating routines and streamlining work processes,
                  harnessing the power of technology to enhance productivity.
                  With a solid foundation in Software Engineering through my
                  Bachelor's degree, I am ready to make meaningful contributions
                  to the field of software development.
                </li>
                <hr className="line" />
              </ul>
            </div>
          </div>
          <div className="row justify-content-center  text-center mt-2">
            <div className="col-md-2 mt-2">
              <button
                className="button-linkedin text-white p-2"
                onClick={() => {
                  handleClick(
                    "https://www.linkedin.com/in/pedro-sanchez-b884831b2/"
                  );
                }}
              >
                <BsLinkedin /> Linkedin
              </button>
            </div>
            <div className="col-md-2 mt-2">
              <button
                className="button-github text-white p-2"
                onClick={() => {
                  handleClick("https://github.com/PedroBSanchez");
                }}
              >
                <BsGithub /> GitHub
              </button>
            </div>
            <div className="col-md-2 mt-2">
              <button
                className="button-email text-dark p-2"
                onClick={() => {
                  handleClick("https://utapy.link/pedrobsanchez");
                }}
              >
                <BsFillEnvelopeFill /> Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewAbout;
