import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../../vendor/preloader/Preloader';
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import {
    shownCardsDesktop,
    shownCardsTablet,
    shownCardsSmartphone,
    addedCardsDesktop,
    addedCardsNoDesktop,
    shortyDuration
} from '../../utils/config';

export default function Movies() {
    const JWT = localStorage.getItem("jwt");

    const [width, setWidth] = React.useState(window.innerWidth);

    const [pattern, setPattern] = React.useState({});

    const [foundMovies, setFoundMovies] = React.useState([]);
    // console.log("foundMovies", foundMovies);

    const [savedMovies, setSavedMovies] = React.useState([]);
    // console.log('savedMovies', savedMovies);

    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());

    const [isLoading, setIsLoading] = React.useState(false);

    const [savingIsPossible, setSavingIsPossible] = React.useState(true);
    localStorage.setItem("savingIsPossible", savingIsPossible);
    // console.log('savingIsPossible', savingIsPossible)
   

    const [counter, setCounter] = React.useState(0);
    // console.log('savingIsPossible', localStorage.getItem("savingIsPossible"))
    // console.log('counter', counter)

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("foundMovies"));
        if (storedMovies) { setFoundMovies(storedMovies) } else { setFoundMovies([]) };
        updateSavedMovies();
        definePattern();
    }, []);

    React.useEffect(() => {
        setSavingIsPossible(true);
    }, [counter]);

    React.useEffect(() => {
        definePattern();
    }, [width]);

    window.addEventListener('resize', () => setWidth(window.innerWidth));

    async function findMovie(movie, chosen) {
        try {
            setIsLoading(true);
            const moviesArray = await MoviesApi.getInitialMovies();
            setIsLoading(false);
            const selectedMovies = moviesArray.filter((element) =>
            ((element.nameRU !== null && element.nameRU.toLowerCase().includes(movie.toLowerCase())) ||
                (element.nameEN !== null && element.nameEN.toLowerCase().includes(movie.toLowerCase())))
            )
            if (!chosen) {
                setFoundMovies(selectedMovies);
                localStorage.setItem("foundMovies", JSON.stringify(selectedMovies));
                definePattern();
                setSearchPerformed(true)
            } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= shortyDuration
                );
                setFoundMovies(refinedMovies);
                localStorage.setItem("foundMovies", JSON.stringify(refinedMovies));
                definePattern();
                setSearchPerformed(true)
            }
            localStorage.setItem("shorty", (chosen));
            localStorage.setItem("keyword", (movie));
        }
        catch (err) {
            setIsLoading(false);
            console.log(err); // выведем ошибку в консоль
        }
    }

    function definePattern() {
        if (width >= 1280) setPattern({ quantity: shownCardsDesktop, grouth: addedCardsDesktop })
        if (width < 1280 && width >= 768) setPattern({ quantity: shownCardsTablet, grouth: addedCardsNoDesktop })
        if (width < 768) setPattern({ quantity: shownCardsSmartphone, grouth: addedCardsNoDesktop })
    }

    function toRenderFoundMovies() {
        const moviesToRender = foundMovies.filter((movie, index) => index < pattern.quantity);
        return moviesToRender;
    }

    function showMore() {
        const increase = pattern.quantity + pattern.grouth;
        setPattern({ quantity: increase, grouth: pattern.grouth });
    }

    async function updateSavedMovies() {
        const updatedSavedMovies = await MainApi.getSavedMovies(JWT);
        //    console.log('currentUser', currentUser)
        const mySavedMovies = updatedSavedMovies.filter((movie) => (movie.owner === currentUser._id))
        setSavedMovies(mySavedMovies);
    }

    async function saveMovie(movieData) {
        try {
            await MainApi.postMovie(movieData, JWT);
            updateSavedMovies();
        }
        catch (err) {
            console.log("сработал catch", err); // выведем ошибку в консоль
            setSavingIsPossible(false);
            setCounter(counter + 1);
        }
    }

    async function deleteMovie(cardId) {
        const movieToDelete = savedMovies.filter((movie) => movie.movieId === cardId);
        await MainApi.deleteMovie(movieToDelete[0]._id, JWT);
        updateSavedMovies();
    }

    return (
        <div>
            <SearchForm
                onFindMovie={findMovie}
            />
            <Preloader
                isLoading={isLoading}
            />
            <MoviesCardList
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                toRenderFoundMovies={toRenderFoundMovies}
                showMore={showMore}
                foundMovies={foundMovies}
                quantity={pattern.quantity}
                searchPerformed={searchPerformed}
                savedMovies={savedMovies}
                isLoading={isLoading}
                savingIsPossible={savingIsPossible}
                counter={counter}
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
