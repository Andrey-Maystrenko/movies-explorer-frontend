import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import Navigation from "../../Navigation/Navigation";

function MoviesCardList({
    movies,
    saveMovie,
    deleteMovie,
    toRenderFoundMovies,
    showMore,
    foundMovies,
    // more,
    quantity,
    searchPerformed,
    savedMovies,
    // isSaved,
    isLoading,
    savingIsPossible,
    counter
}) {

    // console.log('searchPerformed', searchPerformed)

    const [navigationState, setNavigationState] = React.useState();
    console.log('navigationState', navigationState)

    console.log('savingIsPossible in MoviesCardList', localStorage.getItem("savingIsPossible"))

    React.useEffect(() => {
        setNavigationState(!savingIsPossible);
    }, [counter])

    function closeNavigation() {
        setNavigationState(false);
    }


    if (isLoading) return null

    return (
        <section className="movies">
            <div className="movies__table">
                {toRenderFoundMovies().map((card) => {
                    // setMovieData(card);
                    return (
                        <>
                            <MoviesCard
                                key={card.id}
                                movieData={card}
                                saveMovie={saveMovie}
                                deleteMovie={deleteMovie}
                                // isSaved={isSaved}
                                savedMovies={savedMovies}
                            // savingIsPossible={savingIsPossible}
                            />
                            {/* <nav className="navigation"> */}
                                <Navigation
                                    isOpen={navigationState}
                                    onClose={closeNavigation}
                                    // isOpen={!savingIsPossible}
                                    // onClose={savingIsPossible}
                                />
                            {/* </nav> */}
                        </>

                    );
                })}
            </div>
            <div className={`${foundMovies.length === 0 && searchPerformed ? "notfoundmessage" : "notfoundmessage_hidden"}`}>Ничего не найдено</div>
            <button
                // className={`${foundMovies.length <= more ? "movies__more_hidden" : "movies__more"}`}
                className={`${foundMovies.length <= quantity ? "movies__more_hidden" : "movies__more"}`}

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

