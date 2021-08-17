import React from "react";
import "../Header/Header.css";
import { NavLink } from "react-router-dom";
import accountImage from "../../images/accountImage.svg";

function HeaderAuthorized({ isBurgerOpen, openBurger }) {
  return (
    <div className="headerAuthorized">
      <div className="header__account">
        <NavLink to="/profile" className="header__name">
          Аккаунт
        </NavLink>
        <img src={accountImage} alt="Account" className="header__image" />
      </div>
      <div
        className={`header__burger ${
          isBurgerOpen ? "header__burger_opened" : ""
        }`}
        onClick={openBurger}
      >
        <nav
          className={`header__menu ${
            isBurgerOpen ? "header__menu_opened" : ""
          }`}
        >
          <ul className="header__lists">
            <li className="header__item">
              <NavLink className="header__link" to="/">
                Главная
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className="header__link"
                activeClassName="header__link_active"
                to="/movies"
              >
                Фильмы
              </NavLink>
            </li>
            <li className="header__item">
              <NavLink
                className="header__link"
                activeClassName="header__link_active"
                to="/saved-movies"
              >
                Сохраненные фильмы
              </NavLink>
            </li>
          </ul>
          <div
            className={`header__account ${
              isBurgerOpen ? "header__account_opened" : ""
            }`}
          >
            <NavLink to="/profile" className="header__name">
              Аккаунт
            </NavLink>
            <img src={accountImage} alt="Account" className="header__image" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default HeaderAuthorized;
