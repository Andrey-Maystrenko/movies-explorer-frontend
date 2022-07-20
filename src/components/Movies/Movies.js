import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi";

export default function Movies() {
    const [foundMovies, setFoundMovies] = React.useState([]);
    async function findMovie(movie) {
        await MoviesApi
            .getInitialMovies()
            .then((moviesArray) => {
                console.log(movie)
                const movies = moviesArray.filter((element) => {
                    if (((element.nameRU !== null && element.nameRU.includes(movie)) ||
                        (element.nameEN !== null && element.nameEN.includes(movie)))) return element;
                })
                setFoundMovies(movies);
                console.log("foundMovies", foundMovies);
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
            });
    }

    return (
        <div>
            <SearchForm
                onFindMovie={findMovie}
            // findMovie(movie)=onFindMovie(keyWord)
            />
            <MoviesCardList
                movies={foundMovies}
            />
            <Footer />
        </div>
    )
}
