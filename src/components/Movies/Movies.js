import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

export default function Movies() {
    const [foundMovies, setFoundMovies] = React.useState([]);
    console.log("foundMovies", foundMovies);
    const [savedMovies, setSavedMovies] = React.useState([]);
    console.log('сохраненные фильмы от стейта', savedMovies);

    async function findMovie(movie, chosen) {
        try {
            const moviesArray = await MoviesApi.getInitialMovies();
            // console.log(movie)
            const selectedMovies = moviesArray.filter((element) =>
            ((element.nameRU !== null && element.nameRU.includes(movie)) ||
                (element.nameEN !== null && element.nameEN.includes(movie)))
            )
            if (!chosen) { setFoundMovies(selectedMovies) } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= 40
                );
                setFoundMovies(refinedMovies);
                // console.log("switchStatus при сабмите", chosen);
            }
        }
        catch (err) {
            console.log(err); // выведем ошибку в консоль
        }
    }

    function saveMovie(movieData) {
        MainApi.postMovie(movieData);
        // console.log('сохраненный фильм', movieData);
        // const updatedSavedMovies = MainApi.getSavedMovies();
        // console.log('updatedSavedMovies', updatedSavedMovies)
        fetch(`http://localhost:4001/movies`, {
            method: "GET",
            // headers: {
            // Authorization: `Bearer ${token}`,
            // },
        })
            .then((res) => res.json())
            .then((data) =>  setSavedMovies(data))
        // setSavedMovies(updatedSavedMovies)
        // console.log('сохраненные фильмы от фетч', updatedSavedMovies);
       
    }

    function deleteMovie(cardId) {
        console.log(cardId);
        const movieToDelete = savedMovies.filter((movie) => movie.movieId === cardId);
        console.log(movieToDelete)
        console.log(movieToDelete[0].nameEN)
        MainApi.deleteMovie(movieToDelete[0]._id);
        fetch(`http://localhost:4001/movies`, {
            method: "GET",
            // headers: {
            // Authorization: `Bearer ${token}`,
            // },
        })
            .then((res) => res.json())
            .then((data) =>  setSavedMovies(data))
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

    return (

        <div>
            <SearchForm
                onFindMovie={findMovie}
            // findMovie(movie)=onFindMovie(keyWord)
            />
            <MoviesCardList
                movies={foundMovies}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
            />
            <Footer />
        </div>
    )
}
