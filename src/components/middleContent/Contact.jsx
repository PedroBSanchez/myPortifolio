import React from "react";

import InfoCard from "./InfoCard";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-card-container">
      <div className="row ">
        <div className="col-md-12">
          <p className="middle-card-title text-center">Contact</p>
        </div>
      </div>
      <div className="container">
        <div className="row cards-container ">
          <div className="col-lg-3 col-sm-12 mx-auto">
            <InfoCard
              iconType={"github"}
              username={"/PedroBSanchez"}
              link={"https://github.com/PedroBSanchez"}
            />
          </div>
          <div className="col-lg-3 col-sm-12 mx-auto">
            <InfoCard
              iconType={"linkedin"}
              username={"/pedro-sanchez"}
              link={"https://www.linkedin.com/in/pedro-sanchez-b884831b2/"}
            />
          </div>
          <div className="col-lg-3 col-sm-12 mx-auto">
            <InfoCard
              iconType={"email"}
              username={"contato.pedrosanchez@gmail.com"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
