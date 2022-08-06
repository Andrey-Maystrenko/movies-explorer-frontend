import React from 'react'
import SearchForm from './SearchForm/SearchForm';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import Footer from '../Footer/Footer';
import Preloader from '../../vendor/preloader/Preloader';
import * as MoviesApi from "../../utils/MoviesApi";
import * as MainApi from "../../utils/MainApi";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";


export default function Movies() {
    const JWT = localStorage.getItem("jwt");

    // const width = window.innerWidth;
    // console.log('window.innerWidth', window.innerWidth)

    const [width, setWidth] = React.useState(window.innerWidth);

    const [pattern, setPattern] = React.useState({});

    // const [more, setMore] = React.useState(12);
    // const [moreHidden, setMoreHidden] = React.useState(true);

    const [foundMovies, setFoundMovies] = React.useState([]);
    // console.log("foundMovies", foundMovies);

    const [savedMovies, setSavedMovies] = React.useState([]);
    // console.log('сохраненные фильмы от стейта', savedMovies);

    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());

    const [isLoading, setIsLoading] = React.useState(false);

    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        const storedMovies = JSON.parse(localStorage.getItem("foundMovies"));
        if (storedMovies) { setFoundMovies(storedMovies) } else { setFoundMovies([]) };
        updateSavedMovies();
        definePattern();
    }, []);

    React.useEffect(() => {
        definePattern();
    }, [width]);

    // React.useEffect(() => {
    //     updateSavedMovies();
    // }, [savedMovies]);

    window.addEventListener('resize', () => setWidth(window.innerWidth));

    async function findMovie(movie, chosen) {
        try {
            setIsLoading(true);
            const moviesArray = await MoviesApi.getInitialMovies();
            setIsLoading(false);
            const selectedMovies = moviesArray.filter((element) =>
            ((element.nameRU !== null && element.nameRU.includes(movie)) ||
                (element.nameEN !== null && element.nameEN.includes(movie)))
            )
            if (!chosen) {
                setFoundMovies(selectedMovies);
                localStorage.setItem("foundMovies", JSON.stringify(selectedMovies));
                // setMore(12);
                definePattern();
                setSearchPerformed(true)
            } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= 40
                );
                setFoundMovies(refinedMovies);
                localStorage.setItem("foundMovies", JSON.stringify(refinedMovies));
                // setMore(12);
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
        if (width >= 1280) setPattern({ quantity: 12, grouth: 3 })
        if (width < 1280 && width >= 768) setPattern({ quantity: 8, grouth: 2 })
        if (width < 768) setPattern({ quantity: 5, grouth: 2 })
    }

    function toRenderFoundMovies() {
        // const moviesToRender = foundMovies.filter((movie, index) => index < more);
        const moviesToRender = foundMovies.filter((movie, index) => index < pattern.quantity);

        return moviesToRender;
    }

    // function showMore() {
    //     const increase = more + 3;
    //     setMore(increase);
    // }

    function showMore() {
        const increase = pattern.quantity + pattern.grouth;
        setPattern({ quantity: increase, grouth: pattern.grouth });
    }

    async function updateSavedMovies() {
        const updatedSavedMovies = await MainApi.getSavedMovies(JWT);
        // console.log('updatedSavedMovies', updatedSavedMovies)
        const mySavedMovies =  updatedSavedMovies.filter((movie) => (movie.owner === currentUser._id))
        // setSavedMovies(updatedSavedMovies);
        setSavedMovies(mySavedMovies);

    }

    async function saveMovie(movieData) {
        await MainApi.postMovie(movieData, JWT);
        updateSavedMovies();
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
                movies={foundMovies}
                saveMovie={saveMovie}
                deleteMovie={deleteMovie}
                toRenderFoundMovies={toRenderFoundMovies}
                showMore={showMore}
                foundMovies={foundMovies}
                // more={more}
                quantity={pattern.quantity}
                searchPerformed={searchPerformed}
                savedMovies={savedMovies}
                isLoading={isLoading}
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
