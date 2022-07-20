import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import * as MoviesApi from "../../utils/MoviesApi";

export default function Movies() {
    const [foundMovies, setFoundMovies] = React.useState([]);

    async function findMovie(movie, chosen) {
        try {
            const moviesArray = await MoviesApi.getInitialMovies();
            const processRequest = (someArray) => {
                console.log(movie)
                const selectedMovies = someArray.filter((element) => {
                    if (((element.nameRU !== null && element.nameRU.includes(movie)) ||
                        (element.nameEN !== null && element.nameEN.includes(movie))))
                        return element;
                })
                if (!chosen) { setFoundMovies(selectedMovies) } else {
                    const refinedMovies = selectedMovies.filter((element) => {
                        if (element.duration <= 40) return element;
                    });
                    setFoundMovies(refinedMovies);
                }
                console.log("foundMovies", foundMovies);
                console.log("switchStatus при сабмите", chosen);
            }
            processRequest(moviesArray);
        }
        catch (err) {
            console.log(err); // выведем ошибку в консоль
        }
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
            />
            <Footer />
        </div>
    )
}
