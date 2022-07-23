import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


function MoviesCardList({ movies, saveMovie, deleteMovie, toRenderFoundMovies, showMore }) {

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
                className="movies__more"
                onClick={showMore}
            >
                <span className="movies__more-text">Ещё</span>
            </button>
        </section>

    )
}

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

export default MoviesCardList;