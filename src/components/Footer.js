import React from "react";
import Reactlogo from "../images/react-icon.png";

const Footer = (props) => {
  return (
    <p className="footer">
      Made with React at Le Reacteur by Romain Catry{" "}
      <img className="react-logo" src={Reactlogo} alt="react-logo" />
    </p>
  );
};

export default Footer;
