import React from "react";
import "./NavTab.css";
import { HashLink } from "react-router-hash-link";

function NavTab() {
  return (
    <nav className="navTab">
      <ul className="navTab__lists">
        <li className="navTab__item">
          <HashLink to="#aboutProject" className="navTab__link">
            О проекте
          </HashLink>
        </li>
        <li className="navTab__item">
          <HashLink to="#aboutTechnology" className="navTab__link">
            Технологии
          </HashLink>
        </li>
        <li className="navTab__item">
          <HashLink to="#aboutStudent" className="navTab__link">
            Студент
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavTab;
