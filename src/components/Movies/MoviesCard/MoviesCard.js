import React from "react";
import "./MoviesCard.css";
import { IMG_BASE_URL } from "../../../utils/MainApi";

function MoviesCard({
    movieData,
    saveMovie,
    deleteMovie,
    savedMovies
}) {
    // console.log('savedMovies in Card', savedMovies)

    const [isSaved, setIsSaved] = React.useState(false);

    // console.log('номер карточки ', movieData.id)
    // console.log('значение isSaved при отрисовке карточки', isSaved)
    
     function setSavedToMovie() {
        savedMovies.forEach(card => {
            if (movieData.id === card.movieId) { setIsSaved(true) }
        });
    }

    React.useEffect(() => {
        setSavedToMovie()
    }, [savedMovies])

    function handleSaveClick() {
        setIsSaved(!isSaved);
        if (!isSaved) {
            saveMovie(movieData);
        } else {
            // console.log('значение isSaved при удалении лайка', isSaved)
            deleteMovie(movieData.id);
        };
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
                    className={`${isSaved ? "movie__saved" : "movie__unsaved"}`}
                    type="button"
                    onClick={handleSaveClick}
                >
                </button>
            </div>
            <a href={movieData.trailerLink} target="_blank" rel="noreferrer">
                <img
                    className="movie__image"
                    src={`${IMG_BASE_URL}${movieData.image.url}`}
                    // onClick={handleClick}
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
