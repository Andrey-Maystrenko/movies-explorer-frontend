import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({ movies, saveMovie, deleteMovie }) {

    return (
        <section className="movies">
            <div className="movies__table">
                {movies.map((card) => {
                    return (
                        <MoviesCard
                            // cardType="movie__unsaved"
                            key={card.id}
                            movieData={card}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}

                        //   onCardClick={onCardClick}
                        //   onCardLike={onCardLike}
                        //   onCardDelete={onCardDelete}
                        />
                    );
                })}
                {/* <MoviesCard
                    cardType="movie__saved"
                    movieData={movies} /> */}
            </div>
            <button className="movies__more">
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>

    )
}

export default MoviesCardList;