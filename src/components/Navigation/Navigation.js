import React from "react";
import "./Navigation.css";
import "../Header/Header.css";
import { Link } from "react-router-dom";


function Navigation({ isOpen, onClose, counter }) {
    // console.log('counter', counter)
    return (
        <div className={`popup ${isOpen ? "" : "hidden"}`}>
            <button
                className="popup__close-button"
                type="button"
                onClick={onClose}
            ></button>
            {!counter ?
                <div className="popup__menu">
                    <Link className="popup__link popup__link_main" to="/#">
                        Главная
                    </Link>
                    <Link
                        className="popup__link popup__link_movies"
                        to="/movies"
                        onClick={onClose}
                    >
                        Фильмы
                    </Link>
                    <Link
                        className="popup__link popup__link_saved-movies"
                        to="/saved-movies"
                        onClick={onClose}
                    >
                        Сохраненные фильмы
                    </Link>
                    <Link
                        className="popup__account"
                        to="/profile"
                        onClick={onClose}
                    >
                        <button className="header__account" type="button">
                            <span className="header__account-text">Аккаунт</span>
                        </button>
                    </Link>
                </div> :
                <div className="notSaveMessage">
                    К сожалению, сохранить данный фильм невозможно
                </div>
            }
        </div>
    )
}

export default Navigation;