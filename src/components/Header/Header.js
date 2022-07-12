import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className="header">
            <a href="/#">
                <img className="header__logo" src={logo} alt="логотип" />
            </a>
            <Switch>
                <Route exact path="/">
                    <Link className="header__link header__link_register" to="/signup">
                        Регистрация
                    </Link>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                </Route>
                <Route path="/movies">
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
                    <button className="sandwich"></button>
                    <nav className="navigation">
                        <Navigation />
                    </nav>
                </Route>
            </Switch>
        </header>
    )
}

export default Header;