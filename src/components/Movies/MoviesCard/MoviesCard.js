import React from "react";
import "./MoviesCard.css";


function MoviesCard({
    cardType,
    movieData,
}) {
    // console.log(`${BASE_URL}${movieData.image.url}`)
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
                    // className="movie__saved movie__unsaved movie__delete"
                    className={cardType}
                    type="button"
                // onClick={handleLikeClick}
                >
                </button>
            </div>
            <img
                className="movie__image"
                // src={data.link}
                // src={movie}
                src={`https://api.nomoreparties.co/${movieData.image.url}`}
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