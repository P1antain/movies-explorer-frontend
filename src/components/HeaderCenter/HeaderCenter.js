import React from "react";
import '../Header/Header.css'
import { NavLink } from "react-router-dom";

function HeaderCenter(){
    return(
        <div className="header__elements">
            <NavLink
                className="header__link"
                activeClassName="header__link_active"
                to="/movies"
            >
                Фильмы
            </NavLink>
            <NavLink
                className="header__link"
                activeClassName="header__link_active"
                to="/saved-movies"
            >
                Сохраненные фильмы
            </NavLink>
        </div>
    )
}

export default HeaderCenter;
