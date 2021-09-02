import React from "react";
import "./NotFound.css";
import { useHistory } from "react-router-dom";

function NotFound() {
  const history = useHistory();

  function clickGoBack() {
    history.goBack();
  }

  return (
    <div className="notFound">
      <h1 className="notFound__title">404</h1>
      <p className="notFound__text">Страница не найдена</p>
      <button className="notFound__btn" onClick={clickGoBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFound;
