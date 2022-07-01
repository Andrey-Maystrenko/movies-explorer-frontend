import React from "react";
import "./NavTab.css";
import { Route, Switch, Link } from "react-router-dom";

function NavTab() {
    return (
        <section className="navtab">
            <Switch>
                <Route>
                    <Link to="/signin">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">О проекте</span>
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">Технологии</span>
                        </button>
                    </Link>
                    <Link to="/signin">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">Студент</span>
                        </button>
                    </Link>
                </Route>
            </Switch>
        </section>
    )
}

export default NavTab;