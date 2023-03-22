import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import { BsGithub } from "react-icons/bs";

import ApplicationIcon from "./applicationComponents/ApplicationIcon";
import ApplicationImage from "./applicationComponents/ApplicationImage";

import tasklist from "../../assets/tasklist.png";
import personRegister from "../../assets/personRegister.png";
import qrcodeImage from "../../assets/qrcode.png";
import clock from "../../assets/clockimage.png";
import progess from "../../assets/progress.png";
import discord from "../../assets/discord.png";
import stockquoter from "../../assets/stockquoter.png";
import catacombs from "../../assets/catacombs.png";

import "./NewProjectCard.css";

const NewProjectCard = ({
  projectName,
  description,
  icons,
  repositories,
  applicationLink,
  image,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openPage = (pageLink) => {
    if (pageLink) window.open(pageLink, "_blank");
  };
  return (
    <>
      <div className="card" onClick={handleShow}>
        <div className="align">
          <span className="red"></span>
          <span className="yellow"></span>
          <span className="green"></span>
        </div>

        <h4 className="text-center">{projectName}</h4>
        <br />
        <p
          className="text-center"
          style={{
            fontFamily: "Quicksand",
            fontSize: "14px",
          }}
        >
          {description}
        </p>
        <div className="row text-center justify-content-center">
          <div class="loader"></div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} centered animation={true}>
        <Modal.Header closeButton>
          <Modal.Title className="application-text">{projectName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="application-text">
          <div className="row">
            <p>{description}</p>
          </div>
          <hr />
          <div className="row justify-content-around">
            <div className="col-5">
              {icons.map((element) => (
                <ApplicationIcon technology={element} iconSize={35} />
              ))}
            </div>
            <div className="col-4">
              <div className="row justify-content-evenly">
                {repositories.map((repo) => {
                  return (
                    <div className="col-1">
                      <button
                        class="btn btn-warning btn-sm"
                        onClick={() => openPage(repo?.repo)}
                      >
                        <BsGithub />
                        <span className="badge badge-light modal-repo modal-span">
                          {repo?.type}
                        </span>
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-2">
              <div className="row">
                <button
                  class="btn btn-success btn-sm"
                  onClick={() => {
                    openPage(applicationLink);
                  }}
                >
                  <BsGithub />
                  <span className="badge badge-light modal-span">
                    Application
                  </span>
                </button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default NewProjectCard;
