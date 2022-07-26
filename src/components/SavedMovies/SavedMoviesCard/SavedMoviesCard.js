import React from "react";
import "./SavedMoviesCard.css";

function SavedMoviesCard({
    movieData,
    deleteMovie,
}) {

    function handleDeleteClick() {
        deleteMovie(movieData._id)
    }

    return (
        <div className="movie">
            <div className="movie__title-group">
                <div className="movie__parameters">
                    <h2 className="movie__title">
                        {movieData.nameRU}
                        {/* 33 слова о дизайне */}
                    </h2>
                    <p className="movie__duration">
                        {`${movieData.duration} мин`}
                        {/* 1ч 47м */}
                    </p>
                </div>
                <button
                    className="movie__delete"
                    type="button"
                    onClick={handleDeleteClick}
                >
                </button>
            </div>
            <img
                className="movie__image"
                src={`${movieData.image}`}
                alt={movieData.nameRU}
            // onClick={handleClick}
            />
        </div>
    )
}

export default SavedMoviesCard;