import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList() {
    return (
        <section className="movies">
            <div className="movies__table">
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__unsaved" />
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__unsaved" />
            <MoviesCard cardType="movie__unsaved" />
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__unsaved" />
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__saved" />
            <MoviesCard cardType="movie__unsaved" />
            <MoviesCard cardType="movie__unsaved" />
            </div>
            <button className="movies__more">
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>

    )
}

export default MoviesCardList;