import React, { useRef } from "react";
import "./SearchForm.css";
import loupeImage from "../../images/loupe.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
function SearchForm() {
  const focusInp = useRef(null);
  const focusInput = () => {
    focusInp.current.focus();
  };

  return (
    <div className="searchForm">
      <div className="searchForm__block">
        <form className="searchForm__form">
          <img
            src={loupeImage}
            alt="Найти"
            className="searchForm__loupe"
            onClick={focusInput}
          />
          <input
            type="text"
            placeholder="Фильм"
            className="searchForm__input"
            ref={focusInp}
          />
          <button className="searchForm__button">Найти</button>
          <div className="searchForm__help">
            <FilterCheckbox />
          </div>
        </form>
        <div className="searchForm__helper">
          <FilterCheckbox />
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
