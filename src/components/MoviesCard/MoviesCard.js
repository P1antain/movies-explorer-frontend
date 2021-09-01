import React from "react";
import "./MoviesCard.css";
import { Route } from "react-router-dom";

function MoviesCard({ card, handleLikeCard, handleDeleteCard, inSavedMovies }) {
  const { duration, image, trailerLink } = card;
  const handleOpenTrailer = () => {
    window.open(trailerLink);
  };

  const timeDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const minutes = duration % 60;
    if (hours === 0) {
      return minutes + "min";
    }
    return hours + "h " + minutes + "min";
  };

  const onClickLike = () => {
    handleLikeCard(card);
  };

  const onClickDelete = () => {
    handleDeleteCard(card);
  };

  const saved = inSavedMovies.some(
    (i) => i.movieId === card.id || i.movieId === card.movieId
  );

  return (
    <li className="moviesCard">
      <div className="moviesCard__about">
        <h2 className="moviesCard__name">{card.nameRU || card.nameEN}</h2>
        <p className="moviesCard__time">{timeDuration(duration)}</p>
        <Route path="/movies">
          <button
            type="button"
            className={`moviesCard__like ${
              saved ? "moviesCard__time_active" : ""
            }`}
            onClick={onClickLike}
          />
        </Route>
        <Route path="/saved-movies">
          <button
            type="button"
            className="moviesCard__del"
            onClick={onClickDelete}
          />
        </Route>
      </div>
      <img
        src={image}
        alt="Фото фильма"
        className="moviesCard__photo"
        onClick={handleOpenTrailer}
      />
    </li>
  );
}

export default MoviesCard;
