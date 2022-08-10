import React from "react";
import "./MoviesCard.css";
import { IMG_BASE_URL } from "../../../utils/MainApi";
import { Link } from "react-router-dom";

function MoviesCard({
    movieData,
    saveMovie,
    deleteMovie,
    savedMovies,
    // savingIsPossible
}) {
    // console.log('savedMovies in Card', savedMovies)


    const [isSaved, setIsSaved] = React.useState(false);
    // const [saveIconDisabled,setSaveIconDisabled] = React.useState(false);
    // const [invalidCard, setInvalidCard] = React.useState("");


    const savingIsPossible = localStorage.getItem("savingIsPossible");
    console.log('savingIsPossible', savingIsPossible)
    // const invalidCardId = localStorage.getItem("invalidCardId");
    // console.log('invalidCardId in MoviesCard', invalidCardId)


    // console.log('номер карточки ', movieData.id)
    // console.log('значение isSaved при отрисовке карточки', isSaved)

    function setSavedToMovie() {
        savedMovies.forEach(card => {
            if (movieData.id === card.movieId) { setIsSaved(true) }
        });
    }

    React.useEffect(() => {
        setSavedToMovie()
    }, [savedMovies]);

    React.useEffect(() => {
        console.log(' сработал юзэффект, savingIsPossible =', savingIsPossible)
        setIsSaved(false); 
        // localStorage.setItem("savingIsPossible", true);
        // setSaveIconDisabled(true)
        setSavedToMovie()
    }, [savingIsPossible]);

    // React.useEffect(() => {
    //     setInvalidCard(invalidCardId)
    // }, [savingIsPossible]);

    function handleSaveClick() {
        
        
        // if (savingIsPossible) {
            if (!isSaved) {
                saveMovie(movieData);
            } else {
                // console.log('значение isSaved при удалении лайка', isSaved)
                deleteMovie(movieData.id);
            };
            setIsSaved(!isSaved);
        // } 
        // else {
        //     setIsSaved(false); 
        //     localStorage.setItem("savingIsPossible", true);
        // }
    }

    function setMovieData() {
        localStorage.setItem("currentMovie", JSON.stringify(movieData));
        console.log('currentMovie', JSON.parse(localStorage.getItem("currentMovie")));
    }

    return (
        <div className="movie">
            <div className="movie__title-group">
                <div className="movie__parameters">
                    {/* <h2 className="movie__title">
                        {movieData.nameRU}
                    </h2> */}
                    <Link className="movie__desrciption-link" to="/description" target="_blank">
                        <h2
                            className="movie__title"
                            onClick={setMovieData}
                        >
                            {movieData.nameRU}
                        </h2>
                    </Link>
                    <p className="movie__duration">
                        {`${movieData.duration} мин`}
                        {/* 1ч 47м */}
                    </p>
                </div>
                <button
                    // className={`${(isSaved && (invalidCard !== movieData.id)) ? "movie__saved" : "movie__unsaved"}`}
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
