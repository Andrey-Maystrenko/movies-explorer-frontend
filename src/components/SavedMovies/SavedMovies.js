import React from 'react'
import SearchFormSavedMovies from "../SavedMovies/SearchFormSavedMovies/SearchFormSavedMovies";
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
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

export default function SavedMovies() {
    const JWT = localStorage.getItem("jwt");

    const [width, setWidth] = React.useState(window.innerWidth);

    const [pattern, setPattern] = React.useState({});

    const currentUser = React.useContext(CurrentUserContext);

    const [foundMovies, setFoundMovies] = React.useState([]);
    // console.log("foundMovies", foundMovies);

    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());

    const [mySavedMovies, setMySavedMovies] = React.useState([]);
    // console.log('mySavedMovies', mySavedMovies)

    const [moviesToRender, setMoviesToRender] = React.useState([]);

    React.useEffect(() => {
        definePattern();
    }, [width]);

    window.addEventListener('resize', () => setWidth(window.innerWidth));

    // console.log('mySavedMovies', mySavedMovies);
    // console.log('currentUser', currentUser);

    async function getInitialSavedMovies() {
        const savedMovies = await MainApi.getSavedMovies(JWT);
        const mySavedMovies = savedMovies.filter((movie) => (movie.owner === currentUser._id))
        setMySavedMovies(mySavedMovies);
    }

    React.useEffect(() => {
        getInitialSavedMovies();
    }, []);  

    // console.log('mySavedMovies', mySavedMovies);

    async function findMovie(movie, chosen) {
        try {
            const selectedMovies = mySavedMovies.filter((element) =>
            ((element.nameRU !== null && element.nameRU.toLowerCase().includes(movie.toLowerCase())) ||
                (element.nameEN !== null && element.nameEN.toLowerCase().includes(movie.toLowerCase())))
            )
            if (!chosen) {
                setFoundMovies(selectedMovies);
                definePattern();
                setSearchPerformed(true)
            } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= shortyDuration
                );
                setFoundMovies(refinedMovies);
                definePattern();
                setSearchPerformed(true)
            }
        }
        catch (err) {
            console.log(err); // выведем ошибку в консоль
        }
    }

    React.useEffect(() => {
        if (searchPerformed) {
            setMoviesToRender(
                foundMovies.filter((movie, index) => index < pattern.quantity))
        } else {
            setMoviesToRender(
                mySavedMovies.filter((movie, index) => index < pattern.quantity))
        }
    }, [searchPerformed, mySavedMovies, foundMovies, pattern.quantity]);

    function definePattern() {
        if (width >= 1280) setPattern({ quantity: shownCardsDesktop, grouth: addedCardsDesktop })
        if (width < 1280 && width >= 768) setPattern({ quantity: shownCardsTablet, grouth: addedCardsNoDesktop })
        if (width < 768) setPattern({ quantity: shownCardsSmartphone, grouth: addedCardsNoDesktop })
    }

    function showMore() {
        const increase = pattern.quantity + pattern.grouth;
        setPattern({ quantity: increase, grouth: pattern.grouth });
    }

    async function deleteMovie(cardId) {
        const movieToDelete = moviesToRender.filter((movie) => movie._id === cardId);
        await MainApi.deleteMovie(movieToDelete[0]._id, JWT);
        setSearchPerformed(true)
        const restedMovies = moviesToRender.filter((movie) => movie._id !== cardId);
        setFoundMovies(restedMovies);
        // console.log('deleted', movieToDelete)
    }

    return (
        <div>
            <SearchFormSavedMovies
                onFindMovie={findMovie}
            />
            <SavedMoviesCardList
                deleteMovie={deleteMovie}
                moviesToRender={moviesToRender}
                showMore={showMore}
                foundMovies={foundMovies}
                mySavedMovies={mySavedMovies}
                searchPerformed={searchPerformed}
                quantity={pattern.quantity}
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
