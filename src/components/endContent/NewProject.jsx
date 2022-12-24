import React from "react";
import Modal from "react-bootstrap/Modal";

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
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default NewProject;
