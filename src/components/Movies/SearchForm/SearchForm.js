import React from "react";
import "./SearchForm.css";
import loop from "../../../images/loop.svg";
import search from "../../../images/search.svg";

function SearchForm({ onFindMovie }) {
    const [keyWord, setKeyWord] = React.useState('');

    function handleSubmit(e) {
        onFindMovie(keyWord);
        e.preventDefault();
    }

    function handleSearchFormChange(e) {
        setKeyWord(e.target.value);
    }

    return (
        <section className="search__area">
            <form
                className="search__form"
                // noValidate
                onSubmit={handleSubmit}
            >
                <img className="search__loop" src={loop} alt="иконка лупы"></img>
                <input
                    className="search__input"
                    type="search"
                    placeholder="Фильм"
                    name="movie"
                    minLength="2"
                    maxLength="300"
                    id="form__input"
                    required
                    value={keyWord}
                    onChange={handleSearchFormChange}
                />
                <button
                    className="search__form-button"
                    // id={name}
                    type="submit">
                    <img className="search__form-button-image" alt="кнопка поиска фильма" src={search}></img>
                </button>
            </form>
            <div className="search__separator"></div>
            <div className="switch-group">
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className="switch-name">Короткометражки</p>
            </div>
        </section>
    )
}

export default SearchForm;