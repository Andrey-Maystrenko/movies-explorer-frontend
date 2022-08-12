import React from "react";
import "./SavedMoviesCard.css";
import { Link } from "react-router-dom";

function SavedMoviesCard({
    movieData,
    deleteMovie,
}) {

    function handleDeleteClick() {
        deleteMovie(movieData._id)
    }

    function setMovieData() {
        localStorage.setItem("currentMovie", JSON.stringify(movieData));
        // console.log('currentMovie', JSON.parse(localStorage.getItem("currentMovie")));
    }

    return (
        <div className="movie">
            <div className="movie__title-group">
                <div className="movie__parameters">
                    <Link
                        className="movie__desrciption-link"
                        to="/description"
                        target="_blank">
                        <h2
                            className="movie__title"
                            onClick={setMovieData}
                        >
                            {movieData.nameRU}
                        </h2>
                    </Link>
                    <p className="movie__duration">
                        {`${movieData.duration} мин`}
                    </p>
                </div>
                <button
                    className="movie__delete"
                    type="button"
                    onClick={handleDeleteClick}
                >
                </button>
            </div>
            <a href={movieData.trailerLink} target="_blank" rel="noreferrer">
                <img
                    className="movie__image"
                    src={`${movieData.image}`}
                    alt={movieData.nameRU}
                />
            </a>
        </div>
    )
}

export default SavedMoviesCard;