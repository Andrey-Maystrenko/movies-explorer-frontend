import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";
import Navigation from "../Navigation/Navigation";

function Header() {
    return (
        <header className="header">
            <Switch>
                <Route exact path="/">
                    <a href="/#">
                        <img className="header__logo" src={logo} alt="логотип" />
                    </a>
                    <Link className="header__link header__link_register" to="/signup">
                        Регистрация
                    </Link>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                </Route>
                <Route path={["/movies", "/saved-movies", "/profile"]}>
                    <a href="/#">
                        <img className="header__logo" src={logo} alt="логотип" />
                    </a>
                    <Link className="header__link header__link_movies header__link_hidden" to="/movies">
                        Фильмы
                    </Link>
                    <Link className="header__link header__link_saved-movies header__link_hidden" to="/saved-movies">
                        Сохраненные фильмы
                    </Link>
                    <Link to="/signin">
                        <button className="header__account header__account_hidden" type="button">
                            <span className="header__account-text">Аккаунт</span>
                        </button>
                    </Link>
                    <button className="sandwich"></button>
                    <nav className="navigation">
                        <Navigation />
                    </nav>
                </Route>
                <Route path={["/signup", "/signin"]}>
                    <a href="/#">
                        <img className="header__logo-auth" src={logo} alt="логотип" />
                    </a>
                </Route>
            </Switch>
        </header>
    )
}

export default Header;