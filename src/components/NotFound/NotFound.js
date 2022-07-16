import React from "react";
import "./NotFound.css";
import { Link } from "react-router-dom"

function NotFound() {
    return (
        <section className="notfound">
            <p className="notfound__error">404</p>
            <p className="notfound__message">Страница не найдена</p>
            <Link className="notfound__backwards" to="/#">Назад</Link>
        </section>
    )
}

export default NotFound;