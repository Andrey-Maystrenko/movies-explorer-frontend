import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({
    movies,
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

