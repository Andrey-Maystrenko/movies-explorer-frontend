import React from "react";
import "./Profile.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

function Profile(
    { handlePatchUserData,
        setCurrentUser,
        onSignOut
    },

) {
    const currentUser = React.useContext(CurrentUserContext);
    const { name, email } = currentUser;

    function handleNameChange(e) {
        setCurrentUser({ ...currentUser, name: e.target.value })
    }

    function handleEmailChange(e) {
        setCurrentUser({ ...currentUser, email: e.target.value })
    }

    function onPatchUserData(e) {
        e.preventDefault();
        handlePatchUserData(name, email)
    }
    return (
        <div className="profile__window">
            <section className="profile__content">
                <h3 className="profile__title">Привет, {name}!</h3>
                <form
                    className="form"
                    onSubmit={onPatchUserData}
                >
                    <span className="profile__userdata profile__username-position">Имя</span>
                    <input
                        className="form__input profile__userdata"
                        type="text"
                        placeholder="Имя"
                        name="profile__username"
                        minLength="2"
                        maxLength="30"
                        required
                        onChange={handleNameChange}
                        value={name}
                    />
                    <span className="profile__userdata profile__useremail-position">E-mail</span>
                    <input
                        className="form__input profile__userdata"
                        type="email"
                        placeholder="E-mail"
                        name="profile__useremail"
                        required
                        onChange={handleEmailChange}
                        value={email}
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
                    <a
                        className="profile__save-button-text profile__save-button-text_red"
                        href="/#"
                        onClick={onSignOut}
                    >Выйти из аккаунта</a>
                </form>
            </section>
        </div>
    )
}

export default Profile;