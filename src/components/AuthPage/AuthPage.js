import React from "react";
import "./AuthPage.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

function AuthPage({ title, question, linkFrom, path, children }) {
  return (
    <div className="authPage">
      <div className="authPage__wrapper">
        <Logo />
        <h2 className="authPage__title">{title}</h2>
        {children}
        <div className="authPage__more">
          <span className="authPage__question">{question}</span>
          <Link className="authPage__link" to={path}>
            {linkFrom}
          </Link>
        </div>
      </div>
    </div>
  );
}
export default AuthPage;
