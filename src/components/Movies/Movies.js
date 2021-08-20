import React from "react";
import "./Movies.css";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

function Movies({ ifMovies, onSearch, inResult, handleAddCard, isCheckbox, isPreloader, inErrorMoviesApi, inErrorSearch }) {
  return (
    <>
      <Header ifLoginIn={true} />
      <div className="movies">
        <SearchForm onSearch={onSearch} isCheckbox={isCheckbox} />
          {isPreloader ? (
              <Preloader/>
          ) : (
              <MoviesCardList ifMovies={ifMovies} inResult={inResult} inErrorMoviesApi={inErrorMoviesApi} inErrorSearch={inErrorSearch} handleAddCard={handleAddCard}/>
          )}
      </div>
      <Footer />
    </>
  );
}

export default Movies;
