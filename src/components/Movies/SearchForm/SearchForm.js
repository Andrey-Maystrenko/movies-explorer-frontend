import React from "react";
import "./SearchForm.css";
import loop from "../../../images/loop.svg";
import search from "../../../images/search.svg";

function SearchForm() {
    return (
        <section className="search__area">
            <form
                className="search__form"
            // noValidate
            // onSubmit={onSubmit}
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
                // value={name}
                // onChange={handleAddPlaceNameChange}
                />
                <button
                    className="search__form-button"
                    // id={name}
                    type="submit">
                    <img className="search__form-button-image" alt="кнопка поиска фильма" src={search}></img>
                </button>
            </form>
            <div className="search__option-separator"></div>
            <div className="switch-group">
                <label class="switch">
                    <input type="checkbox" />
                    <span className="slider round"></span>
                </label>
                <p className="switch-name">Короткометражки</p>
            </div>

        </section>
    )
}

export default SearchForm;