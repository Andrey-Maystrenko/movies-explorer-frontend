import React from 'react'
// import SearchForm from '../Movies/SearchForm/SearchForm';
import SearchFormSavedMovies from "../SavedMovies/SearchFormSavedMovies/SearchFormSavedMovies";
import SavedMoviesCardList from './SavedMoviesCardList/SavedMoviesCardList';
import Footer from '../Footer/Footer';
import * as MainApi from "../../utils/MainApi";

export default function SavedMovies() {
    const JWT = localStorage.getItem("jwt");

    const [width, setWidth] = React.useState(window.innerWidth);

    const [pattern, setPattern] = React.useState({});

    // const [more, setMore] = React.useState(12);


    const [foundMovies, setFoundMovies] = React.useState([]);
    // console.log("foundMovies", foundMovies);

    const [searchPerformed, setSearchPerformed] = React.useState(false);
    // console.log('movies to render', toRenderFoundMovies());

    const [allSavedMovies, setAllSavedMovies] = React.useState([]);
    // console.log('allSavedMovies', allSavedMovies)

    const [moviesToRender, setMoviesToRender] = React.useState([]);

    React.useEffect(() => {
        definePattern();
    }, [width]);

    window.addEventListener('resize', () => setWidth(window.innerWidth));

    async function getInitialSavedMovies() {
        const savedMovies = await MainApi.getSavedMovies(JWT);
        setAllSavedMovies(savedMovies);
    }

    React.useEffect(() => {
        getInitialSavedMovies();
    }, []);

    console.log('allSavedMovies', allSavedMovies);

    async function findMovie(movie, chosen) {
        try {
            const selectedMovies = allSavedMovies.filter((element) =>
            ((element.nameRU !== null && element.nameRU.includes(movie)) ||
                (element.nameEN !== null && element.nameEN.includes(movie)))
            )
            if (!chosen) {
                setFoundMovies(selectedMovies);
                // setMore(12);
                definePattern();
                setSearchPerformed(true)
            } else {
                const refinedMovies = selectedMovies.filter((element) =>
                    element.duration <= 40
                );
                setFoundMovies(refinedMovies);
                // setMore(12);
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
                allSavedMovies.filter((movie, index) => index < pattern.quantity))
        }
    }, [searchPerformed, allSavedMovies, foundMovies, pattern.quantity]);

    function definePattern() {
        if (width >= 1280) setPattern({ quantity: 12, grouth: 3 })
        if (width < 1280 && width >= 768) setPattern({ quantity: 8, grouth: 2 })
        if (width < 768) setPattern({ quantity: 5, grouth: 2 })
    }

    function showMore() {
        const increase = pattern.quantity + pattern.grouth;
        setPattern({ quantity: increase, grouth: pattern.grouth });
    }

    // function showMore() {
    //     const increase = more + 3;
    //     setMore(increase);
    // }

    async function deleteMovie(cardId) {
        const movieToDelete = moviesToRender.filter((movie) => movie._id === cardId);
        await MainApi.deleteMovie(movieToDelete[0]._id, JWT);
        setSearchPerformed(true)
        const restedMovies = moviesToRender.filter((movie) => movie._id !== cardId);
        setFoundMovies(restedMovies);
        console.log('deleted', movieToDelete)
    }

    return (
        <div>
            {/* <SearchForm
                onFindMovie={findMovie}
            /> */}
             <SearchFormSavedMovies
                onFindMovie={findMovie}
            />
            <SavedMoviesCardList
                deleteMovie={deleteMovie}
                moviesToRender={moviesToRender}
                showMore={showMore}
                foundMovies={foundMovies}
                allSavedMovies={allSavedMovies}
                // more={more}
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
