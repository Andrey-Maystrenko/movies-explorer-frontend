import React from "react";
import "./Navigation.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";


function Navigation() {
    return (
        <div className="popup hidden">
            <div className="popup__menu">
                <Link className="popup__link popup__link_main" to="/#">
                    Главная
                </Link>
                <Link className="popup__link popup__link_movies" to="/movies">
                    Фильмы
                </Link>
                <Link className="popup__link popup__link_saved-movies" to="/saved-movies">
                    Сохраненные фильмы
                </Link>
                <Link className="popup__account" to="/signin">
                    <button className="header__account" type="button">
                        <span className="header__account-text">Аккаунт</span>
                    </button>
                </Link>
            </div>
        </div>

    )
}

export default Navigation;