import React, { useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import testCard from "../../utils/utils";

function MoviesCardList({ ifMovies }) {
  const [inFilm, setFilm] = React.useState([]);

  useEffect(() => {
    setFilm([...inFilm, ...testCard]);
  }, [testCard]);

  return (
    <>
      <ul className="moviesCardList">
        {inFilm.map((card) => {
          return <MoviesCard card={card} key={card.id} />;
        })}
      </ul>
      {ifMovies && <button className="moviesCardList__btn">Еще</button>}
    </>
  );
}

export default MoviesCardList;
