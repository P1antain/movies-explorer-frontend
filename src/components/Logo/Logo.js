import React from "react";
import "./Logo.css";
import logoPage from "../../images/logo.svg";
import { useHistory } from "react-router-dom";

function Logo() {
  const history = useHistory();
  const removePage = () => {
    history.push("/");
  };

  return (
    <img src={logoPage} alt="Logo" className="logoPage" onClick={removePage} />
  );
}

export default Logo;
