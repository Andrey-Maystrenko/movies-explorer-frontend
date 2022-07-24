import React from "react";
import "./SavedMoviesCardList.css";
import "../../../index.css"
import SavedMoviesCard from "../SavedMoviesCard/SavedMoviesCard";


function SavedMoviesCardList({
    initialMovies,
    saveMovie,
    deleteMovie,
    toRenderFoundMovies,
    showMore,
    foundMovies,
    more,
    searchPerformed
}) {
    console.log('searchPerformed', searchPerformed)
    return (
        <section className="movies">
            <div className="movies__table">
                {initialMovies.map((card) => {
                    return (
                        <SavedMoviesCard
                            key={card.id}
                            movieData={card}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}
                        />
                    );
                })}
                {/* {toRenderFoundMovies().map((card) => {
                    return (
                        <SavedMoviesCard
                            key={card.id}
                            movieData={card}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}
                        />
                    );
                })} */}
            </div>
            <div className={`${foundMovies.length === 0 && searchPerformed ? "notfoundmessage" : "notfoundmessage_hidden"}`}>Ничего не найдено</div>
            <button
                className={`${foundMovies.length <= more ? "movies__more_hidden" : "movies__more"}`}
                onClick={showMore}
            >
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>
    )
}

export default SavedMoviesCardList;