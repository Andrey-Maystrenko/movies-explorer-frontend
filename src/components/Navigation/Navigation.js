import React from "react";
import "./Navigation.css";
import "../Header/Header.css";
import { Route, Switch, Link } from "react-router-dom";


function Navigation() {
    return (
        <div className="popup">
            <div className="popup__menu">
                <Link className="header__link header__link_movies" to="/movies">
                    Фильмы
                </Link>
                <Link className="header__link header__link_saved-movies" to="/saved-movies">
                    Сохраненные фильмы
                </Link>
                <Link to="/signin">
                    <button className="header__account" type="button">
                        <span className="header__account-text">Аккаунт</span>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Navigation;