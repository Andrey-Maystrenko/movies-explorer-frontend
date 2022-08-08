import React from "react";
import "./Description.css";
// import { Link } from "react-router-dom"

function Description() {

    const movieData = JSON.parse(localStorage.getItem("currentMovie"))
    return (
        <section className="description">
            <p className="description__name">{movieData.nameRU}</p>
            <p className="description__name">{movieData.nameEN}</p>
            <p className="description__data">{movieData.country}</p>
            <p className="description__data">{movieData.year}</p>
            <p className="description__data">{movieData.director}</p>
            <p className="description__text">{movieData.description}</p>
            {/* <Link className="notfound__backwards" to="/#">Назад</Link> */}
        </section>
    )
}

export default Description;