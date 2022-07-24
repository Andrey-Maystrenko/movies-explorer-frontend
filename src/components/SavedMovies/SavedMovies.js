// const savedMovies = MainApi.getSavedMovies()
import React, { useEffect } from 'react'
import SearchForm from '../Movies/SearchForm/SearchForm';
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import * as MainApi from "../../utils/MainApi";

export default function SavedMovies(
    // presavedMovies
    ) {
    // console.log('presavedMovies', presavedMovies)
    const [more, setMore] = React.useState(12);
    // const [allSavedMovies, setAllSavedMovies] = React.useState([]);
    const [foundMovies, setFoundMovies] = React.useState([]);
    console.log("foundMovies", foundMovies);
    const [savedMovies, setSavedMovies] = React.useState([]);
    // console.log('сохраненные фильмы от стейта', savedMovies);
    
    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());
    
    const [allSavedMovies, setAllSavedMovies] = React.useState([]);
    
    async function initialMovies() {
        setAllSavedMovies(await MainApi.getSavedMovies());
    }
    React.useEffect(() => {
        console.log("сработал юз эффект")
        initialMovies()
        // setAllSavedMovies( MainApi.getInitialSavedMovies());
      }, []);

    console.log('allSavedMovies', allSavedMovies);

    // async function initialMovies() {
    //     const initialMovies = (await MainApi.getSavedMovies2());
    //     return initialMovies;
    // }

    async function findMovie(movie, chosen) {
        try {
            // const moviesArray = await MainApi.getSavedMovies();
            // console.log(movie)
            const selectedMovies = foundMovies.filter((element) =>
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
        setSavedMovies(updatedSavedMovies);
    }

    // function saveMovie(movieData) {
    //     MainApi.postMovie(movieData);
    //     updateSavedMovies();
    // }

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
            <SavedMoviesCardList
                // initialMovies={presavedMovies.savedMovies}
                initialMovies={allSavedMovies}
                // saveMovie={saveMovie}
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
