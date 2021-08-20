import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  inResult,
  ifMovies,
  inErrorMoviesApi,
  inErrorSearch,
  handleAddCard,
}) {
  return (
    <>
      {" "}
      {inErrorMoviesApi ? (
        <p className="moviesCardList__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      ) : (
        <ul className="moviesCardList">
          {inResult.map((card) => {
            return <MoviesCard card={card} key={card.id} />;
          })}
        </ul>
      )}
      {inErrorSearch ? (
        <p className="moviesCardList__error">
          Ничего не найдено, попробуйте другое название
        </p>
      ) : (
        ""
      )}
      {ifMovies && (
        <button className="moviesCardList__btn" onClick={handleAddCard}>
          Еще
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
