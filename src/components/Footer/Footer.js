import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <h2 className="footer__about">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h2>
        <div className="footer__item">
          <span className="footer__copyright">&copy; 2021</span>
          <ul className="footer__elements">
            <li className="footer__element">
              <a
                href="https://praktikum.yandex.ru"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Яндекс.Практикум
              </a>
            </li>
            <li className="footer__element">
              <a
                href="https://github.com/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Github
              </a>
            </li>
            <li className="footer__element">
              <a
                href="https://opensource.fb.com/"
                className="footer__link"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
