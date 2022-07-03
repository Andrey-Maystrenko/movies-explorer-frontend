import React from "react";
import "./NavTab.css";
import "../../../index.css";
import { Route, Switch, Link } from "react-router-dom";

function NavTab() {
    return (
        <section className="navtab">
            <Switch>
                <Route>
                    <a href="#about-project">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">О проекте</span>
                        </button>
                    </a>
                    <a href="#techs">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">Технологии</span>
                        </button>
                    </a>
                    <a href="#about-me">
                        <button className="navtab__button" type="button">
                            <span className="navtab__button-text">Студент</span>
                        </button>
                    </a>
                </Route>
            </Switch>
        </section>
    )
}

export default NavTab;