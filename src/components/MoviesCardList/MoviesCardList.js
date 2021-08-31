import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList({
  inResult,
  ifMovies,
  inErrorMoviesApi,
  inErrorSearch,
  handleAddCard,
  inSearch,
  handleLikeCard,
  inDataMovies,
  renderApplication,
  handleDeleteCard,
  inSavedMovies,
}) {

  return (
    <>
      {" "}
      {inErrorMoviesApi && (
        <p className="moviesCardList__error">
          Во время запроса произошла ошибка. Возможно, проблема с соединением
          или сервер недоступен. Подождите немного и попробуйте ещё раз
        </p>
      )}
      <ul className="moviesCardList">
        {!renderApplication &&
          inResult.map((card) => {
            return (
              <MoviesCard
                card={card}
                key={card.id}
                handleLikeCard={handleLikeCard}
                handleDeleteCard={handleDeleteCard}
                inSavedMovies={inSavedMovies}
              />
            );
          })}
        {renderApplication &&
          inDataMovies.map((card) => {
            return (
              <MoviesCard
                card={card}
                key={card._id}
                handleLikeCard={handleLikeCard}
                handleDeleteCard={handleDeleteCard}
                inSavedMovies={inSavedMovies}
              />
            );
          })}
      </ul>
      {inErrorSearch ? (
        <p className="moviesCardList__error">
          Ничего не найдено, попробуйте другое название
        </p>
      ) : (
        ""
      )}
      {ifMovies && inSearch.length > 0 && (
        <button className="moviesCardList__btn" onClick={handleAddCard}>
          Еще
        </button>
      )}
    </>
  );
}

export default MoviesCardList;
