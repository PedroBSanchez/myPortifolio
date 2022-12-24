import React from "react";
import Modal from "react-bootstrap/Modal";
import { BsGithub } from "react-icons/bs";

import ApplicationIcon from "./applicationComponents/ApplicationIcon";
import ApplicationImage from "./applicationComponents/ApplicationImage";

import tasklist from "../../assets/tasklist.png";
import personRegister from "../../assets/personRegister.png";
import qrcodeImage from "../../assets/qrcode.png";
import clock from "../../assets/clockimage.png";
import progess from "../../assets/progress.png";

import "./NewProject.css";
import { useState } from "react";

const NewProject = ({
  projectName,
  description,
  icons,
  repositories,
  applicationLink,
  image,
}) => {
  //Definir imagem do projeto
  let appImage;
  switch (image) {
    case "clock":
      appImage = clock;
      break;

    case "tasklist":
      appImage = tasklist;
      break;

    case "personRegister":
      appImage = personRegister;
      break;

    case "qrcode":
      appImage = qrcodeImage;
      break;

    default:
      appImage = progess;
      break;
  }

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(repositories);

  return (
    <>
      <div className="project-card p-2" onClick={handleShow}>
        <img className="application-image-img" src={appImage} alt={"Project"} />
        <div className="row mt-2 text-center">
          <p className="application-text application-text-title">
            {projectName}
          </p>
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
          <div className="row justify-content-around">
            <div className="col-5">
              <ApplicationIcon technology={"html"} iconSize={35} />
              <ApplicationIcon technology={"css"} iconSize={35} />
              <ApplicationIcon technology={"javascript"} iconSize={35} />
              <ApplicationIcon technology={"javascript"} iconSize={35} />
            </div>
            <div className="col-4">
              <div className="row justify-content-evenly">
                {repositories.map((repo) => {
                  console.log(repo.type);
                  return (
                    <div className="col-1">
                      <button class="btn btn-warning btn-sm">
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
                <button class="btn btn-success btn-sm">
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

export default NewProject;
