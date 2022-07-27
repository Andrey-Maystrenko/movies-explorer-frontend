import React from "react";
import "./SavedMoviesCardList.css";
import "../../../index.css"
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";


function SavedMoviesCardList({
    foundMovies,
    allSavedMovies,
    moviesToRender,
    saveMovie,
    deleteMovie,
    showMore,
    more,
    searchPerformed
}) {
    console.log('searchPerformed', searchPerformed)
    console.log('moviesToRender', moviesToRender)
    return (
        <section className="movies">
            <div className="movies__table">
                {moviesToRender.map((card) => {
                    return (
                        <SavedMoviesCard
                            key={card._id}
                            movieData={card}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}
                        />
                    );
                })}
            </div>
            <div className={`${((moviesToRender.length === 0) &&
                searchPerformed) ? "notfoundmessage" : "notfoundmessage_hidden"}`}>
                Ничего не найдено
            </div>
            <button
                className={`${foundMovies.length ||
                    allSavedMovies.length <= more || moviesToRender.length === 0 ? "movies__more_hidden" : "movies__more"}`}
                onClick={showMore}
            >
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>
    )
}

export default SavedMoviesCardList;