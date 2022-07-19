import React from "react";
import "./MoviesCardListSaved.css";
import "../../../index.css"
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardListSaved() {
    return (
        <section className="movies">
            <div className="movies__table">
            <MoviesCard cardType="movie__delete" />
            <MoviesCard cardType="movie__delete" />
            <MoviesCard cardType="movie__delete" />
            </div>
            {/* <button className="movies__more">
                <span className="movies__more-text">Ещё</span>
            </button> */}
        </section>
    )
}

export default MoviesCardListSaved;