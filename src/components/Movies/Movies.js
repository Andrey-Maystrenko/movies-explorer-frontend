import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../../vendor/preloader/Preloader';
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

export default function Movies(
    // {presavedMovies}
) {
    const [more, setMore] = React.useState(12);
    // const [moreHidden, setMoreHidden] = React.useState(true);
    const [foundMovies, setFoundMovies] = React.useState([]);
    console.log("foundMovies", foundMovies);
    const [savedMovies, setSavedMovies] = React.useState([]);
    console.log('сохраненные фильмы от стейта', savedMovies);
    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());

      async function findMovie(movie, chosen) {
        try {
            <Preloader />
            const moviesArray = await  MoviesApi.getInitialMovies();
            const selectedMovies = moviesArray.filter((element) =>
            ((element.nameRU !== null && element.nameRU.includes(movie)) ||
                (element.nameEN !== null && element.nameEN.includes(movie)))
            )
            if (!chosen) {
                setFoundMovies(selectedMovies);
                setMore(12);
                setSearchPerformed(true)
            } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= 40
                );
                setFoundMovies(refinedMovies);
                setMore(12);
                setSearchPerformed(true)
            }
        }
        catch (err) {
            console.log(err); // выведем ошибку в консоль
        }
    }
    function toRenderFoundMovies() {
        const moviesToRender = foundMovies.filter((movie, index) => index < more);
        return moviesToRender;
    }

    function showMore() {
        const increase = more + 3;
        setMore(increase);
    }

    async function updateSavedMovies() {
        const updatedSavedMovies = await MainApi.getSavedMovies();
        // console.log('updatedSavedMovies', updatedSavedMovies)
        setSavedMovies(updatedSavedMovies);
    }

    function saveMovie(movieData) {
        MainApi.postMovie(movieData);
        updateSavedMovies();
    }

    function deleteMovie(cardId) {
        const movieToDelete = savedMovies.filter((movie) => movie.movieId === cardId);
        MainApi.deleteMovie(movieToDelete[0]._id);
        updateSavedMovies();
    }

    return (
        <div>
            <SearchForm
                onFindMovie={findMovie}
            />
            {/* <Preloader /> */}
            <MoviesCardList
                movies={foundMovies}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                toRenderFoundMovies={toRenderFoundMovies}
                showMore={showMore}
                foundMovies={foundMovies}
                more={more}
                searchPerformed={searchPerformed}
            />
            <Footer />
        </div>
    )
}

    // async function findMovie(movie, chosen) {
    //     await MoviesApi
    //         .getInitialMovies()
    //         .then((moviesArray) => {
    //             console.log(movie)
    //             const selectedMovies = moviesArray.filter((element) => {
    //                 if (((element.nameRU !== null && element.nameRU.includes(movie)) ||
    //                     (element.nameEN !== null && element.nameEN.includes(movie))))
    //                     return element;
    //             })
    //             if (!chosen) { setFoundMovies(selectedMovies) } else {
    //                 const refinedMovies = selectedMovies.filter((element) => {
    //                     if (element.duration <= 40) return element;
    //                 });
    //                 setFoundMovies(refinedMovies);
    //             }
    //             console.log("foundMovies", foundMovies);
    //             console.log("switchStatus при сабмите", chosen);
    //         })
    //         .catch((err) => {
    //             console.log(err); // выведем ошибку в консоль
    //         });
    // }
