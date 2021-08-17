import React from "react";
import './FilterCheckbox.css'

function FilterCheckbox(){
    return(
        <div className="filterCheckbox">
            <input
                type="checkbox"
                className="filterCheckbox__input"
                id="filter"
            />
            <label className="filterCheckbox__title" htmlFor="filter">Короткометражки</label>
        </div>
    )
}

export default FilterCheckbox
