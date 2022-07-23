import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({
    movies,
    saveMovie,
    deleteMovie,
    toRenderFoundMovies,
    showMore,
    hideMore,
    moreHidden
}) {
// console.log('hideMore', hideMore())
    return (
        <section className="movies">
            <div className="movies__table">
                {toRenderFoundMovies().map((card) => {
                    return (
                        <MoviesCard
                            key={card.id}
                            movieData={card}
                            saveMovie={saveMovie}
                            deleteMovie={deleteMovie}
                        />
                    );
                })}

            </div>
            <button
                className={`${moreHidden ? "movies__more_hidden" : "movies__more"}`}
                // className={`${isSaved ? "movie__saved" : "movie__unsaved"}`}
                // className="movies__more"
                onClick={showMore}
            >
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>

    )
}

export default MoviesCardList;

// function MoviesCardList({ movies, saveMovie, deleteMovie, toRenderFoundMovies }) {
//     const [more, setMore] = React.useState(8);
//     console.log('movies to render', toRenderFoundMovies(more));

//     function showMore() {
//         const increase = more + 8;
//         setMore(increase);
//     }

//     return (
//         <section className="movies">
//             <div className="movies__table">
//                 {toRenderFoundMovies(more).map((card) => {
//                     return (
//                         <MoviesCard
//                             key={card.id}
//                             movieData={card}
//                             saveMovie={saveMovie}
//                             deleteMovie={deleteMovie}
//                         />
//                     );
//                 })}

//             </div>
//             <button
//                 className="movies__more"
//                 onClick={showMore}
//             >
//                 <span className="movies__more-text">Ещё</span>
//             </button>
//         </section>

//     )
// }

