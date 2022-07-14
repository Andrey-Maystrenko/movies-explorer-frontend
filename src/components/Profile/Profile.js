import React from "react";
import "./Profile.css";

function Profile() {
    return (
        <div className="profile__window">
            <section className="profile__content">
                <h3 className="profile__title">Привет, Андрей!</h3>
                <form className="form">
                    <span className="profile__userdata profile__username-position">Имя</span>
                    <input
                        className="form__input profile__userdata"
                        type="text"
                        placeholder="Андрей"
                        name="profile__username"
                        minLength="2"
                        maxLength="30"
                        // required
                        // onChange={handleEmailChange}
                    />
                    <span className="profile__userdata profile__useremail-position">E-mail</span>
                    <input
                        className="form__input profile__userdata"
                        type="email"
                        placeholder="pochta@yandex.ru"
                        name="profile__useremail"
                        // required
                        // onChange={handlePasswordChange}
                    />
                    {/* <span className="popup__error" id="element__name"></span> */}
                    <button
                        className="profile__save-button"
                        type="submit"
                    >
                        <span className="profile__save-button-text">
                            Редактировать
                        </span>
                    </button>
                    <a className="profile__save-button-text profile__save-button-text_red" href="#/">Выйти из аккаунта</a>
                </form>
            </section>
        </div>
    )
}

export default Profile;