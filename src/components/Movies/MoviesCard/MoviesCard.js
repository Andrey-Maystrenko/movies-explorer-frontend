import React from "react";
import "./MoviesCard.css";
import { IMG_BASE_URL } from "../../../utils/MainApi";
import { Link } from "react-router-dom";

function MoviesCard({
    movieData,
    saveMovie,
    deleteMovie,
    savedMovies,
}) {
    // console.log('savedMovies in Card', savedMovies)

    const [isSaved, setIsSaved] = React.useState(false);

    const savingIsPossible = localStorage.getItem("savingIsPossible");
    // console.log('savingIsPossible', savingIsPossible)

    function setSavedToMovie() {
        savedMovies.forEach(card => {
            if (movieData.id === card.movieId) { setIsSaved(true) }
        });
    }

    React.useEffect(() => {
        setSavedToMovie()
    }, [savedMovies]);

    React.useEffect(() => {
        setIsSaved(false);
        setSavedToMovie()
        // console.log(' сработал юзэффект, savingIsPossible =', savingIsPossible)
    }, [savingIsPossible]);

    function handleSaveClick() {
        if (!isSaved) {
            saveMovie(movieData);
        } else {
            deleteMovie(movieData.id);
        };
        setIsSaved(!isSaved);
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
                    className={`${isSaved ? "movie__saved" : "movie__unsaved"}`}
                    type="button"
                    disabled={!savingIsPossible}
                    onClick={handleSaveClick}
                >
                </button>
            </div>
            <a href={movieData.trailerLink} target="_blank" rel="noreferrer">
                <img
                    className="movie__image"
                    src={`${IMG_BASE_URL}${movieData.image.url}`}
                    alt="кадр из фильма"
                />
            </a>
        </div>
    )
}

export default MoviesCard;

// React.useEffect(() => {
    //     setName(currentUser.name);
    //     setDescription(currentUser.about);
    //   }, [isSaved]);

    // const JWT = localStorage.getItem("jwt");
    // const isSavedArray = JSON.parse(localStorage.getItem("isSavedArray"));
    // const isSavedArray = JSON.parse(localStorage.getItem("foundMovies"));
