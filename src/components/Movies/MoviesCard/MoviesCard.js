import React from "react";
import "./MoviesCard.css";
import movie from "../../../images/movie.jpg";

function MoviesCard() {
    return (
        <div className="movie">
            <div className="movie__title-group">
                <div className="movie__parameters">
                    <h2 className="movie__title">
                        {/* {data.name} */}
                        33 слова о дизайне
                    </h2>
                    <p className="movie__duration">
                        {/* {data.likes.length} */}
                        1ч 47м
                    </p>
                </div>
                <button
                    className="movie__saved movie__unsaved movie__delete"
                    // className={cardLikeButtonClassName}
                    type="button"
                // onClick={handleLikeClick}
                >
                </button>
            </div>
            <img
                className="movie__image"
                // src={data.link}
                src={movie}
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