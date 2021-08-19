import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({ ifMovies }) {
  return (
    <>
      <Header ifLoginIn={true} />
      <div className="movies">
        <SearchForm />
        <MoviesCardList ifMovies={ifMovies} />
      </div>
      <Footer />
    </>
  );
}

export default Movies;
