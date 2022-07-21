import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";

export default function Movies() {
    const [foundMovies, setFoundMovies] = React.useState([]);
    console.log("foundMovies", foundMovies);

    async function findMovie(movie, chosen) {
        try {
            const moviesArray = await MoviesApi.getInitialMovies();
            console.log(movie)
            const selectedMovies = moviesArray.filter((element) =>
            ((element.nameRU !== null && element.nameRU.includes(movie)) ||
                (element.nameEN !== null && element.nameEN.includes(movie)))
            )
            if (!chosen) { setFoundMovies(selectedMovies) } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= 40
                );
                setFoundMovies(refinedMovies);
                console.log("switchStatus при сабмите", chosen);
            }
        }
        catch (err) {
            console.log(err); // выведем ошибку в консоль
        }
    }

    function saveMovie(movieData) {
        console.log(movieData);
        MainApi.postMovie(movieData);
    }

    function deleteMovie(cardId) {
        MainApi.deleteMovie(cardId);
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
