import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({register}) {
  return (
    <div className="filterCheckbox">
      <input
        type="checkbox"
        className="filterCheckbox__input"
        id="filter"
        value={true}
        {...register('checkbox')}
      />
      <label className="filterCheckbox__title" htmlFor="filter">
        Короткометражки
      </label>
    </div>
  );
}

export default FilterCheckbox;
