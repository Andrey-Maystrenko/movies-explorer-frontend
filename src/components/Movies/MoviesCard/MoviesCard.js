import React from "react";
import "./MoviesCard.css";
import { IMG_BASE_URL } from "../../../utils/MainApi";

function MoviesCard({
    movieData,
    saveMovie,
    deleteMovie
    // cardType
}) {
    const [isSaved, setIsSaved] = React.useState(false);
    function handleSaveClick() {
        setIsSaved(!isSaved);
        if (!isSaved) { saveMovie(movieData) } else {
            // deleteMovie('62daf42aff988828f331f932')
            deleteMovie(movieData.id)

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
                    // className={cardType}
                    type="button"
                    onClick={handleSaveClick}
                >
                </button>
            </div>
            <img
                className="movie__image"
                // src={data.link}
                // src={movie}
                src={`${IMG_BASE_URL}${movieData.image.url}`}
                // alt={data.name}
                // onClick={handleClick}
                alt="кадр из фильма"
            />
            {/* <button
                // className="element__trash element__trash_invisible"
                className={cardDeleteButtonClassName}
                type="button"
                onClick={handleDeleteClick}
            ></button> */}
        </div>
    )
}

export default MoviesCard;

// React.useEffect(() => {
    //     setName(currentUser.name);
    //     setDescription(currentUser.about);
    //   }, [isSaved]);