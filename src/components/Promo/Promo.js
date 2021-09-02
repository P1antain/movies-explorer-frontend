import React from "react";
import promoLogo from "../../images/background_logo.png";
import "./Promo.css";

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo__text">
        Учебный проект студента факультета Веб-разработки.
      </h1>
      <img
        src={promoLogo}
        alt="Yandex.praktikum"
        className="promo__background"
      />
    </div>
  );
}
export default Promo;
