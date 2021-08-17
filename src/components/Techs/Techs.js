import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <div className="techs" id="aboutTechnology">
      <div className="techs__wrapper">
        <h2 className="techs__about">Технологии</h2>
        <div className="techs__block">
          <h3 className="techs__name">7 технологий</h3>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <ul className="techs__technology">
          <li className="techs__element">HTML</li>
          <li className="techs__element">CSS</li>
          <li className="techs__element">JS</li>
          <li className="techs__element">React</li>
          <li className="techs__element">Git</li>
          <li className="techs__element">Express.js</li>
          <li className="techs__element">mongoDB</li>
        </ul>
      </div>
    </div>
  );
}

export default Techs;
