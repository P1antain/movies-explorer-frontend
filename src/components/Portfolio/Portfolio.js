import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <div className="portfolio">
      <h2 className="portfolio__more">Портфолио</h2>
      <ul className="portfolio__lists">
        <li className="portfolio__elements">
          <form
            action="https://github.com/"
            target="_blank"
            className="portfolio__form"
          >
            <button className="portfolio__element">Статичный сайт</button>
            <button className="portfolio__btn" />
          </form>
        </li>
        <li className="portfolio__elements">
          <form
            action="https://github.com/"
            target="_blank"
            className="portfolio__form"
          >
            <button className="portfolio__element">Адаптивный сайт</button>
            <button className="portfolio__btn" />
          </form>
        </li>
        <li className="portfolio__elements">
          <form
            action="https://github.com/"
            target="_blank"
            className="portfolio__form"
          >
            <button className="portfolio__element">
              Одностраничное приложение
            </button>
            <button className="portfolio__btn" />
          </form>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
