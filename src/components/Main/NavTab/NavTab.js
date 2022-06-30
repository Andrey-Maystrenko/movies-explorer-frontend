import React from "react";
import "./NavTab.css";
import { Route, Switch, Link } from "react-router-dom";

function NavTab() {
    return (
        <section className="navtab">
            <Switch>
                <Route>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="header__login" type="button">
                            <span className="header__login-text">Войти</span>
                        </button>
                    </Link>
                </Route>
            </Switch>
        </section>
    )
}

export default NavTab;