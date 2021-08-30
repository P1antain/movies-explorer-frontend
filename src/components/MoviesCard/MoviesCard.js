import React from "react";
import "./MoviesCard.css";
import { Route } from "react-router-dom";

function MoviesCard({ card, handleLikeCard }) {
  const { duration, image, trailerLink } = card;

  const BASEURL = "https://api.nomoreparties.co";

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


  return (
    <li className="moviesCard">
      <div className="moviesCard__about">
        <h2 className="moviesCard__name">{card.nameRU || card.nameEN}</h2>
        <p className="moviesCard__time">{timeDuration(duration)}</p>
        <Route path="/movies">
          <button type="button" className={`moviesCard__like ${'' ? "moviesCard__time_active" : ""}`} onClick={handleLikeCard}/>
        </Route>
        <Route path="/saved-movies">
          <button type="button" className="moviesCard__del" />
        </Route>
      </div>
      <img
        src={BASEURL + image.url}
        alt="Фото фильма"
        className="moviesCard__photo"
        onClick={handleOpenTrailer}
      />
    </li>
  );
}

export default MoviesCard;
