import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

function Movies({ ifMovies }) {
  return (
    <div className="movies">
      <SearchForm />
      <MoviesCardList ifMovies={ifMovies} />
    </div>
  );
}

export default Movies;
