import React from "react";
import "./Register.css";

function Register() {
    return (
        <div className="profile__window">
            <section className="profile__content">
                <h3 className="profile__title">Добро пожаловать!</h3>
                <form className="form">
                    <span className="profile__userdata profile__username-position_register">Имя</span>
                    <input
                        className="form__input_register profile__userdata-value"
                        type="text"
                        name="profile__username"
                        minLength="2"
                        maxLength="30"
                        // required
                        // onChange={handleEmailChange}
                    />
                    <span className="profile__userdata profile__useremail-position_register">E-mail</span>
                    <input
                        className="form__input_register profile__userdata-value"
                        type="email"
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
                    <a className="profile__save-button-text profile__save-button-text_red" href="/#">Выйти из аккаунта</a>
                </form>
            </section>
        </div>
    )
}

export default Register;