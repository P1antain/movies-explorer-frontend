import React, { useRef } from "react";
import "./SearchForm.css";
import loupeImage from "../../images/loupe.svg";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaSearch } from "../../utils/Constants";

function SearchForm({ onSearch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaSearch),
    mode: "onChange",
  });
  const focusInp = useRef(null);
  const focusInput = () => {
    focusInp.current.focus();
  };

  const onSubmit = (data) => {
    onSearch(data);
  };

  return (
    <div className="searchForm">
      <div className="searchForm__block">
        <form className="searchForm__form" onSubmit={handleSubmit(onSubmit)}>
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
            {...register("search")}
          />
          <button className="searchForm__button">Найти</button>

          {/*<div className="searchForm__help">*/}
          {/*  <FilterCheckbox register={register} disable/>*/}
          {/*</div>*/}
        </form>
        <div className="searchForm__helper">
          <FilterCheckbox register={register} />
        </div>
      </div>
      <p className="searchForm__error">
        {errors.search?.type === "required" && "You must enter a keyword"}
      </p>
    </div>
  );
}

export default SearchForm;
