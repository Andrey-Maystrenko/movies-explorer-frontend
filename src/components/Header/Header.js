import React from "react";
import "./Header.css";
import logo from "../../images/logo.svg";
import { Route, Switch, Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="логотип" />
            <Switch>
                <Route exact path="/">
                    <Link className="header__link" to="/signup">
                        Регистрация
                    </Link>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                </Route>
                <Route path="/movies">
                    <Link className="header__link" to="">
                        Фильмы
                    </Link>
                    <Link className="header__link" to="">
                        Сохраненные фильмы
                    </Link>
                    <Link to="/signin">
                        <button className="header__account" type="button">
                            <span className="header__account-text">Аккаунт</span>
                        </button>
                    </Link>
                </Route>
            </Switch>
        </header>
    )
}

export default Header;